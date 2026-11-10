'use strict';

const { spawn } = require('node:child_process');
const { createHash, randomUUID } = require('node:crypto');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const { Readable, Transform } = require('node:stream');
const { pipeline } = require('node:stream/promises');
const { app, shell } = require('electron');
const semver = require('semver');
const { config } = require('../config.js');
const { Logger } = require('../packages/logger/Logger.js');
const { state } = require('./state.js');
const { getUpdateChannel } = require('./updateChannel.js');

const RELEASE_API = 'https://api.github.com/repos/yamixdev/Overtone/releases';
const RELEASE_PATH = '/yamixdev/Overtone/releases/download/';
const INSTALLER_NAME = /^Overtone-Setup-(\d+\.\d+\.\d+(?:-beta\.\d+)?)-win-x64\.exe$/;
const PORTABLE_NAME = /^Yandex-Music-\d+\.\d+\.\d+-Overtone-(\d+\.\d+\.\d+(?:-beta\.\d+)?)-win-x64-\d+-\d+\.zip$/;
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
    return asset && { ...asset, version, portable };
}

function selectOvertoneBetaRelease(releases, currentVersion, portable) {
    if (!Array.isArray(releases)) return null;
    return releases.reduce((latest, release) => {
        const candidate = selectOvertoneRelease(release, currentVersion, portable, true);
        return candidate && (!latest || semver.gt(candidate.version, latest.version)) ? candidate : latest;
    }, null);
}

async function downloadInstaller(asset, target, progress) {
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
                progress(bytes / asset.size, bytes / asset.size);
                callback(null, chunk);
            },
        }),
        fs.createWriteStream(target, { flags: 'wx' }),
    );
    if (bytes !== asset.size || hash.digest('hex') !== asset.digest) throw new Error('Overtone update SHA-256 mismatch');
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

    async check() {
        if (!this.isEnabled() || this.checking || this.downloading || this.installing) return;
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
            if (getUpdateChannel() !== channel || this.downloading || this.installing) return;
            const previous = this.available;
            if (candidate && channel === previous?.channel && candidate.version === previous.version && candidate.digest === previous.digest) return;
            this.available = candidate && { ...candidate, channel };
            if (this.downloaded) await fsp.rm(this.downloaded.path, { force: true }).catch(() => {});
            this.downloaded = null;
            if (!candidate || getUpdateChannel() !== channel) return;
            for (const listener of this.listeners) listener(CURRENT_VERSION, candidate.version, candidate.portable);
        } catch (error) {
            this.logger.warn('Overtone update check failed:', error);
        } finally {
            this.checking = false;
        }
    }

    async onUpdateDownload(progress) {
        const candidate = this.available;
        if (!this.isEnabled() || candidate?.channel !== getUpdateChannel() || this.downloading || this.installing) return;
        if (candidate.portable) {
            await shell.openExternal(candidate.url).catch((error) => this.logger.warn('Could not open Overtone ZIP:', error));
            return;
        }
        if (this.downloaded?.asset === candidate) {
            progress(1.1, -1);
            return;
        }

        this.downloading = true;
        const folder = path.join(app.getPath('userData'), 'overtone-updates');
        const target = path.join(folder, candidate.name);
        const partial = `${target}.${randomUUID()}.part`;
        try {
            await fsp.mkdir(folder, { recursive: true });
            await downloadInstaller(candidate, partial, progress);
            if (getUpdateChannel() !== candidate.channel || this.available !== candidate) throw new Error('Overtone update channel changed');
            await fsp.rename(partial, target);
            this.downloaded = { path: target, asset: candidate };
            progress(1.1, -1);
        } catch (error) {
            this.logger.warn('Overtone update download failed:', error);
            progress(-1, -1);
        } finally {
            this.downloading = false;
            await fsp.rm(partial, { force: true }).catch(() => {});
        }
    }

    async onInstallUpdate() {
        if (!this.isEnabled() || this.portable || this.installing || this.downloaded?.asset.channel !== getUpdateChannel() || !fs.existsSync(this.installerMarker))
            return false;
        this.installing = true;
        const { path: installer, asset } = this.downloaded;
        try {
            const stat = await fsp.stat(installer);
            if (stat.size !== asset.size) throw new Error('Overtone installer size mismatch');
            const hash = createHash('sha256');
            for await (const chunk of fs.createReadStream(installer)) hash.update(chunk);
            if (hash.digest('hex') !== asset.digest) throw new Error('Overtone installer SHA-256 mismatch');
            if (getUpdateChannel() !== asset.channel || this.available !== asset) return false;

            const directory = path.dirname(process.resourcesPath);
            const child = spawn(installer, ['/VERYSILENT', '/SUPPRESSMSGBOXES', '/NORESTART', `/DIR=${directory}`, '/OVERTONE-RESTART'], {
                detached: true,
                stdio: 'ignore',
                windowsHide: true,
            });
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
            this.downloaded = null;
            return false;
        } finally {
            this.installing = false;
        }
    }
}

let updater;
const getModUpdater = () => (updater ??= new ModUpdater());

module.exports = { ModUpdater, getModUpdater, selectOvertoneRelease, selectOvertoneBetaRelease };
