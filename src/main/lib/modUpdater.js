'use strict';

const { spawn } = require('node:child_process');
const { createHash, randomUUID } = require('node:crypto');
const fs = process.versions.electron ? require('original-fs') : require('node:fs');
const { promises: fsp } = fs;
const path = require('node:path');
const { Readable, Transform } = require('node:stream');
const { pipeline } = require('node:stream/promises');
const { app, shell } = require('electron');
const semver = require('semver');
const { config } = require('../config.js');
const { Logger } = require('../packages/logger/Logger.js');
const { state } = require('./state.js');
const { getUpdateChannel } = require('./updateChannel.js');
const { getModSettings } = require('./store.js');
const { APP_EXE, getUpdateLayout, hashFile, patchExecutable, unpackArchive, verifyFastManifest } = require('./overtoneAsarUpdate.js');

const RELEASE_API = 'https://api.github.com/repos/yamixdev/Overtone/releases';
const RELEASE_PATH = '/yamixdev/Overtone/releases/download/';
const INSTALLER_NAME = /^Overtone-Setup-(\d+\.\d+\.\d+(?:-beta\.\d+)?)-win-x64\.exe$/;
const PORTABLE_NAME = /^Yandex-Music-\d+\.\d+\.\d+-Overtone-(\d+\.\d+\.\d+(?:-beta\.\d+)?)-win-x64-\d+-\d+\.zip$/;
const FAST_UPDATE_NAME = /^Overtone-ASAR-(\d+\.\d+\.\d+(?:-beta\.\d+)?)-win-x64\.(?:asar\.gz|exe|asar|bin)$/;
const MAX_INSTALLER_BYTES = 512 * 1024 * 1024;
const CURRENT_VERSION = config.modification.version;

function readAsset(asset) {
    if (asset?.state !== 'uploaded' || !Number.isSafeInteger(asset.size) || asset.size < 1 || asset.size > MAX_INSTALLER_BYTES) return null;
    const digest = /^sha256:([a-f\d]{64})$/i.exec(asset.digest ?? '')?.[1].toLowerCase();
    if (!digest) return null;

    try {
        const url = new URL(asset.browser_download_url);
        if (
            url.origin !== 'https://github.com' ||
            url.username ||
            url.password ||
            !url.pathname.startsWith(RELEASE_PATH) ||
            decodeURIComponent(url.pathname.split('/').at(-1)) !== asset.name
        ) {
            return null;
        }
        return { name: asset.name, url: url.href, size: asset.size, digest };
    } catch {
        return null;
    }
}

function fastPrefix(version) {
    return `Overtone-ASAR-${version}-win-x64`;
}

function selectFastAssets(assets, version, installerSize) {
    const prefix = fastPrefix(version);
    const manifest = readAsset(assets.find((asset) => asset?.name === `${prefix}.json`));
    const archive = readAsset(assets.find((asset) => asset?.name === `${prefix}.asar.gz`));
    const installer = readAsset(assets.find((asset) => asset?.name === `${prefix}.exe`));
    if (manifest && manifest.size <= 16 * 1024 && archive && installer && manifest.size + archive.size + installer.size < installerSize) {
        return { manifest, archive, installer };
    }
    return null;
}

function readPendingAsset(saved) {
    return readAsset({ ...saved, state: 'uploaded', browser_download_url: saved?.url, digest: `sha256:${saved?.digest}` });
}

function isCompatibleManifest(manifest, version) {
    return verifyFastManifest(manifest, version, process.versions.electron, config.app?.ffmpegRepository, config.modification.realYMVersion);
}

function selectOvertoneRelease(release, currentVersion, portable, beta = false) {
    if (!release || release.draft !== false || release.prerelease !== beta || !semver.valid(currentVersion)) return null;
    const assets = Array.isArray(release.assets) ? release.assets : [];
    const installers = assets.filter((asset) => INSTALLER_NAME.test(asset?.name ?? ''));
    if (installers.length !== 1) return null;
    const version = INSTALLER_NAME.exec(installers[0].name)[1];
    if (semver.valid(version) !== version || !semver.gt(version, currentVersion) || Boolean(semver.prerelease(version)) !== beta) return null;
    if (beta && release.tag_name !== `overtone-${version}`) return null;

    const matchingAssets = portable ? assets.filter((asset) => PORTABLE_NAME.exec(asset?.name ?? '')?.[1] === version) : installers;
    const asset = matchingAssets.length === 1 ? readAsset(matchingAssets[0]) : null;
    if (!asset) return null;
    const fast = !portable && selectFastAssets(assets, version, asset.size);
    return { ...asset, version, portable, ...(fast && { fast }) };
}

function selectOvertoneBetaRelease(releases, currentVersion, portable) {
    if (!Array.isArray(releases)) return null;
    return releases.reduce((latest, release) => {
        const candidate = selectOvertoneRelease(release, currentVersion, portable, true);
        return candidate && (!latest || semver.gt(candidate.version, latest.version)) ? candidate : latest;
    }, null);
}

async function downloadAsset(asset, target, progress = () => {}) {
    const response = await fetch(asset.url, { signal: AbortSignal.timeout(10 * 60_000) });
    if (!response.ok || !response.body) throw new Error(`HTTP ${response.status}`);

    const hash = createHash('sha256');
    let bytes = 0;
    await pipeline(
        Readable.fromWeb(response.body),
        new Transform({
            transform(chunk, _encoding, callback) {
                bytes += chunk.length;
                if (bytes > asset.size) return callback(new Error('Overtone update exceeds its published size'));
                hash.update(chunk);
                progress(bytes / asset.size);
                callback(null, chunk);
            },
        }),
        fs.createWriteStream(target, { flags: 'wx' }),
    );
    if (bytes !== asset.size || hash.digest('hex') !== asset.digest) throw new Error('Overtone update SHA-256 mismatch');
}

class UpdateIntegrityError extends Error {}

async function verifyFile(file, { size, sha256 }) {
    if ((await fsp.stat(file)).size !== size) throw new UpdateIntegrityError('Overtone update size mismatch');
    if ((await hashFile(file)) !== sha256) throw new UpdateIntegrityError('Overtone update SHA-256 mismatch');
}

function verifyAsset(file, asset) {
    return verifyFile(file, { size: asset.size, sha256: asset.digest });
}

class ModUpdater {
    logger = new Logger('OvertoneUpdater');
    listeners = [];
    installerMarker = path.join(process.resourcesPath ?? '', 'overtone-installed');
    portable = !fs.existsSync(this.installerMarker);
    available = null;
    downloaded = null;
    checking = false;
    downloading = false;
    installing = false;
    clearing = false;
    progress = -100;
    skipFastVersion = null;

    get cacheDir() {
        return path.join(app.getPath('userData'), 'overtone-updates');
    }

    get pendingFile() {
        return path.join(this.cacheDir, 'pending.json');
    }

    async savePending({ asset, fast }, installAttempted = false) {
        const partial = `${this.pendingFile}.${randomUUID()}.part`;
        const { fast: _fastAssets, ...installer } = asset;
        try {
            await fsp.writeFile(partial, JSON.stringify({ ...installer, fast, installAttempted }), { flag: 'wx' });
            await fsp.rename(partial, this.pendingFile);
        } finally {
            await fsp.rm(partial, { force: true }).catch(() => {});
        }
    }

    fastFiles(version) {
        const prefix = path.join(this.cacheDir, fastPrefix(version));
        return { installer: `${prefix}.exe`, archive: `${prefix}.asar.gz`, unpacked: `${prefix}.asar`, executable: `${prefix}.bin` };
    }

    async verifyPreparedUpdate(downloaded) {
        const { asset, fast, path: installer } = downloaded;
        if (!fast) return verifyAsset(installer, asset);
        const files = this.fastFiles(asset.version);
        await verifyAsset(installer, fast.installer);
        await verifyFile(files.unpacked, fast.manifest.archive);
        await verifyFile(files.executable, fast.manifest.executable);
    }

    async prepareFastUpdate(candidate, progress) {
        const { version, fast } = candidate;
        if (!fast || this.skipFastVersion === version) return null;
        const files = this.fastFiles(version);
        const manifestFile = `${files.installer}.${randomUUID()}.part`;
        let prepared = false;
        try {
            await downloadAsset(fast.manifest, manifestFile);
            const manifest = JSON.parse(await fsp.readFile(manifestFile, 'utf8'));
            if (!isCompatibleManifest(manifest, version)) return null;
            const appDirectory = path.dirname(process.resourcesPath);
            if (!(await fsp.stat(path.join(appDirectory, 'build.json'))).isFile()) return null;
            if ((await getUpdateLayout(appDirectory)) !== manifest.layout) return null;
            await Promise.all(Object.values(files).map((file) => fsp.rm(file, { force: true })));
            await patchExecutable(path.join(appDirectory, APP_EXE), files.executable, manifest.executable);

            const total = fast.archive.size + fast.installer.size;
            const archiveShare = fast.archive.size / total;
            await downloadAsset(fast.archive, files.archive, (fraction) => progress(fraction * archiveShare));
            await downloadAsset(fast.installer, files.installer, (fraction) => progress(archiveShare + fraction * (1 - archiveShare)));
            progress(-2);
            await unpackArchive(files.archive, files.unpacked, manifest.archive);
            prepared = true;
            return { asset: candidate, path: files.installer, fast: { installer: fast.installer, manifest } };
        } catch (error) {
            this.logger.warn('Could not prepare the ASAR update, using the full installer:', error);
            return null;
        } finally {
            await fsp.rm(manifestFile, { force: true }).catch(() => {});
            if (!prepared) await Promise.all(Object.values(files).map((file) => fsp.rm(file, { force: true }).catch(() => {})));
        }
    }

    async restore() {
        if (!this.isEnabled() || this.portable) return false;
        try {
            const saved = JSON.parse(await fsp.readFile(this.pendingFile, 'utf8'));
            const version = INSTALLER_NAME.exec(saved?.name ?? '')?.[1];
            const channel = getUpdateChannel();
            const asset = readPendingAsset(saved);
            if (!asset || semver.valid(version) !== version || !semver.gt(version, CURRENT_VERSION)) return false;
            if (saved.channel !== channel || Boolean(semver.prerelease(version)) !== (channel === 'overtone-beta')) return false;
            const candidate = { ...asset, version, channel, portable: false };
            let downloaded;
            if (saved.fast) {
                const installer = readPendingAsset(saved.fast.installer);
                const { manifest } = saved.fast;
                if (!saved.installAttempted && installer?.name === `${fastPrefix(version)}.exe` && isCompatibleManifest(manifest, version)) {
                    downloaded = { asset: candidate, path: this.fastFiles(version).installer, fast: { installer, manifest } };
                    try {
                        await this.verifyPreparedUpdate(downloaded);
                    } catch (error) {
                        this.logger.warn('Could not restore the prepared ASAR update:', error);
                        downloaded = null;
                    }
                }
                if (!downloaded) this.skipFastVersion = version;
            } else {
                downloaded = { asset: candidate, path: path.join(this.cacheDir, asset.name) };
                await this.verifyPreparedUpdate(downloaded);
            }
            if (getUpdateChannel() !== channel) return false;
            this.available = candidate;
            if (!downloaded) return false;
            this.downloaded = downloaded;
            this.progress = 110;
            return saved.installAttempted !== true && getModSettings()?.appAutoUpdates?.installDownloadedOnStartup === true && (await this.onInstallUpdate());
        } catch (error) {
            if (error.code !== 'ENOENT') this.logger.warn('Could not restore the downloaded Overtone update:', error);
            return false;
        }
    }

    announce(allowAutoDownload = false) {
        const asset = this.available;
        if (!this.isEnabled() || asset?.channel !== getUpdateChannel()) return;
        for (const listener of this.listeners) listener(CURRENT_VERSION, asset.version, asset.portable, this.progress, allowAutoDownload);
    }

    async clearCache({ obsoleteOnly = false } = {}) {
        if (obsoleteOnly && (!app.isPackaged || this.portable || !semver.valid(CURRENT_VERSION))) return 'empty';
        if (this.downloading || this.installing || this.checking || this.clearing) return 'busy';
        this.clearing = true;
        try {
            const files = await fsp.readdir(this.cacheDir, { withFileTypes: true }).catch((error) => {
                if (error.code === 'ENOENT') return [];
                throw error;
            });
            let removed = false;
            for (const file of files) {
                const partialBase = file.name.replace(/\.[a-f0-9-]{36}\.part$/i, '');
                const update = INSTALLER_NAME.exec(partialBase) ?? FAST_UPDATE_NAME.exec(partialBase);
                if (!file.isFile() || (partialBase !== 'pending.json' && !update)) continue;
                const cachedPath = path.join(this.cacheDir, file.name);
                try {
                    if (obsoleteOnly) {
                        const version = update?.[1] ?? INSTALLER_NAME.exec(JSON.parse(await fsp.readFile(cachedPath, 'utf8'))?.name ?? '')?.[1];
                        if (!semver.valid(version) || semver.gt(version, CURRENT_VERSION)) continue;
                    }
                    await fsp.unlink(cachedPath);
                    removed = true;
                } catch (error) {
                    if (error.code !== 'ENOENT' && !(obsoleteOnly && error instanceof SyntaxError)) throw error;
                }
            }
            return removed ? 'cleared' : 'empty';
        } finally {
            this.clearing = false;
            if (!obsoleteOnly) {
                this.downloaded = null;
                this.progress = -100;
                this.announce();
            }
        }
    }

    isEnabled() {
        return app.isPackaged && process.platform === 'win32' && process.arch === 'x64' && ['overtone', 'overtone-beta'].includes(getUpdateChannel());
    }

    onUpdateAvailable(listener) {
        this.listeners.push(listener);
    }

    start() {
        if (!this.isEnabled() || this.interval) return;
        setTimeout(() => void this.check(), 5000).unref();
        this.interval = setInterval(() => void this.check(), config.common.UPDATE_POLL_INTERVAL_MS);
        this.interval.unref();
    }

    async check({ manual = false } = {}) {
        if (!this.isEnabled()) return 'disabled';
        if (this.checking || this.downloading || this.installing || this.clearing) return 'busy';
        this.checking = true;
        try {
            const channel = getUpdateChannel();
            const beta = channel === 'overtone-beta';
            const response = await fetch(beta ? `${RELEASE_API}?per_page=100` : `${RELEASE_API}/latest`, {
                headers: { Accept: 'application/vnd.github+json' },
                signal: AbortSignal.timeout(15_000),
            });
            if (!response.ok && response.status !== 404) throw new Error(`HTTP ${response.status}`);
            const releases = response.ok ? await response.json() : null;
            const candidate = beta
                ? selectOvertoneBetaRelease(releases, CURRENT_VERSION, this.portable)
                : selectOvertoneRelease(releases, CURRENT_VERSION, this.portable);
            if (getUpdateChannel() !== channel || this.downloading || this.installing) return 'busy';
            const previous = this.available;
            if (candidate && channel === previous?.channel && candidate.version === previous.version && candidate.digest === previous.digest) {
                const autoDownload = !this.downloaded && !this.portable && getModSettings()?.appAutoUpdates?.autoDownload === true;
                if (manual || autoDownload) this.announce(autoDownload);
                return 'available';
            }
            this.available = null;
            if (this.downloaded) {
                await fsp.rm(this.pendingFile, { force: true }).catch(() => {});
                await fsp.rm(this.downloaded.path, { force: true }).catch(() => {});
            }
            this.downloaded = null;
            this.progress = -100;
            if (getUpdateChannel() !== channel) return 'busy';
            if (!candidate) {
                if (previous) {
                    for (const listener of this.listeners) listener(CURRENT_VERSION, null, this.portable, this.progress, false);
                }
                return 'current';
            }
            this.available = { ...candidate, channel };
            this.announce(true);
            return 'available';
        } catch (error) {
            this.logger.warn('Overtone update check failed:', error);
            return 'error';
        } finally {
            this.checking = false;
        }
    }

    async onUpdateDownload(onProgress) {
        const candidate = this.available;
        if (!this.isEnabled() || candidate?.channel !== getUpdateChannel() || this.downloading || this.installing || this.clearing) return false;
        if (candidate.portable) {
            try {
                await shell.openExternal(candidate.url);
                return true;
            } catch (error) {
                this.logger.warn('Could not open Overtone ZIP:', error);
                return false;
            }
        }
        const progress = (fraction, windowProgress = fraction < 0 ? -1 : fraction) => {
            this.progress = fraction * 100;
            onProgress(fraction, windowProgress);
        };
        if (this.downloaded?.asset === candidate) {
            progress(1.1, -1);
            return true;
        }

        this.downloading = true;
        const target = path.join(this.cacheDir, candidate.name);
        const partial = `${target}.${randomUUID()}.part`;
        try {
            progress(-2, -1);
            await fsp.mkdir(this.cacheDir, { recursive: true });
            let downloaded = await this.prepareFastUpdate(candidate, progress);
            if (getUpdateChannel() !== candidate.channel || this.available !== candidate) throw new Error('Overtone update channel changed');
            if (!downloaded) {
                progress(-2);
                await downloadAsset(candidate, partial, progress);
                if (getUpdateChannel() !== candidate.channel || this.available !== candidate) throw new Error('Overtone update channel changed');
                await fsp.rename(partial, target);
                downloaded = { path: target, asset: candidate };
            }
            await this.savePending(downloaded);
            this.downloaded = downloaded;
            progress(1.1, -1);
            return true;
        } catch (error) {
            this.logger.warn('Overtone update download failed:', error);
            progress(-1, -1);
            return false;
        } finally {
            await fsp.rm(partial, { force: true }).catch(() => {});
            this.downloading = false;
        }
    }

    async onInstallUpdate() {
        if (
            !this.isEnabled() ||
            this.portable ||
            this.installing ||
            this.downloading ||
            this.clearing ||
            this.downloaded?.asset.channel !== getUpdateChannel() ||
            !fs.existsSync(this.installerMarker)
        )
            return false;
        this.installing = true;
        const downloaded = this.downloaded;
        const { path: installer, asset, fast } = downloaded;
        this.progress = -200;
        try {
            this.announce();
            try {
                await this.verifyPreparedUpdate(downloaded);
                if (fast && (await getUpdateLayout(path.dirname(process.resourcesPath))) !== fast.manifest.layout) {
                    throw new UpdateIntegrityError('Installed Overtone runtime differs from the ASAR update manifest');
                }
            } catch (error) {
                if (error instanceof UpdateIntegrityError || error.code === 'ENOENT') {
                    if (fast) this.skipFastVersion = asset.version;
                    this.downloaded = null;
                    await fsp.rm(this.pendingFile, { force: true }).catch(() => {});
                }
                throw error;
            }
            if (getUpdateChannel() !== asset.channel || this.available !== asset) return false;

            const directory = path.dirname(process.resourcesPath);
            await this.savePending(downloaded, true);
            if (getUpdateChannel() !== asset.channel || this.available !== asset) return false;
            const args = ['/SILENT', '/NOCANCEL', '/NORESTART', `/DIR=${directory}`, `/OVERTONE-PID=${process.pid}`, '/OVERTONE-RESTART'];
            if (fast) args.push('/SUPPRESSMSGBOXES');
            const child = spawn(installer, args, { detached: true, stdio: 'ignore', windowsHide: true });
            await new Promise((resolve, reject) => {
                child.once('spawn', resolve);
                child.once('error', reject);
            });
            child.unref();
            state.willQuit = true;
            app.quit();
            return true;
        } catch (error) {
            this.logger.error('Overtone update could not be installed:', error);
            return false;
        } finally {
            this.installing = false;
            this.progress = this.downloaded ? 110 : -100;
        }
    }
}

let updater;
const getModUpdater = () => (updater ??= new ModUpdater());

module.exports = { ModUpdater, getModUpdater, selectOvertoneRelease, selectOvertoneBetaRelease };
