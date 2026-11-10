'use strict';

const fs = require('original-fs');
const fsPromise = fs.promises;
const path = require('path');
const https = require('https');
const axios = require('axios');
const electron = require('electron');
const crypto = require('crypto');
const tar = require('tar');
const { pipeline } = require('stream/promises');
const Logger_js_1 = require('../packages/logger/Logger.js');
const { downloadFileWithProgress } = require('./utils.js');
const { queueComponentInstall } = require('./componentInstall.js');
const { FFMPEG_CHANNEL_TAG, resolveFfmpegTag } = require('./ffmpegRelease.js');

const HASH_REQUEST_TIMEOUT_MS = 5000;

function getBaseDirNearAsar() {
    const appPath = electron.app.getAppPath();
    return appPath.includes('app.asar') ? path.dirname(appPath) : appPath;
}

function mapPlatform() {
    if (process.platform === 'win32') return 'windows';
    if (process.platform === 'linux') return 'linux';
    if (process.platform === 'darwin') return 'macos';
    throw new Error(`Unsupported platform: ${process.platform}`);
}

function mapArch(platform) {
    if (process.arch === 'x64') return 'x86_64';
    if (process.arch === 'arm64' && platform === 'macos') return 'arm64';
    throw new Error(`Unsupported arch: ${process.arch}`);
}

function getBinaryName(platform) {
    return platform === 'windows' ? 'ffmpeg.exe' : 'ffmpeg';
}

async function sha256File(p) {
    const hash = crypto.createHash('sha256');
    await pipeline(fs.createReadStream(p), hash);
    return hash.digest('hex');
}

class FfmpegUpdater {
    constructor({ repo, tagName = FFMPEG_CHANNEL_TAG, requireHash = true } = {}) {
        if (typeof repo !== 'string' || !repo.includes('/')) {
            throw new Error(`"repo" must be in form "OWNER/REPO"`);
        }

        this.logger = new Logger_js_1.Logger('FfmpegUpdater');
        this.repo = repo;
        this.tagName = tagName;
        this.requireHash = requireHash === true;
        this.isInstalledValidated = false;

        this.platform = mapPlatform();
        this.arch = mapArch(this.platform);

        if (this.platform === 'linux') {
            this.baseDir = path.join(electron.app.getPath('userData'), 'ffmpeg');
            this.tempDir = path.join(this.baseDir, 'temp');
        } else {
            this.baseDir = getBaseDirNearAsar();
            this.tempDir = path.join(this.baseDir, '..', 'temp');
        }

        this.assetName = `ffmpeg-${this.platform}-${this.arch}.tar.gz`;
        this.archivePath = path.join(this.tempDir, this.assetName);
        this.extractDir = path.join(this.tempDir, 'extract');

        this.installPath = path.join(this.baseDir, getBinaryName(this.platform));

        this.logger.log('Initialized');
        this.logger.log('Platform:', this.platform, this.arch);
        this.logger.log('Install path:', this.installPath);
        this.logger.log('Require hash:', this.requireHash);
    }

    getDownloadUrl(tag = this.tagName) {
        return `https://github.com/${this.repo}/releases/download/${tag}/${this.assetName}`;
    }

    getHashUrl(tag = this.tagName) {
        return `https://github.com/${this.repo}/releases/download/${tag}/ffmpeg-${this.platform}-${this.arch}.sha256`;
    }

    async fileExists(p) {
        try {
            await fsPromise.access(p, fs.constants.F_OK);
            return true;
        } catch {
            return false;
        }
    }

    async deleteFileIfExists(p) {
        try {
            if (await this.fileExists(p)) {
                await fsPromise.unlink(p);
            }
        } catch (e) {
            this.logger.warn('Failed to delete file:', p, e?.message || e);
        }
    }

    async cleanupDirIfExists(p) {
        try {
            await fsPromise.rm(p, { recursive: true, force: true });
        } catch (e) {
            this.logger.warn('Failed to cleanup dir:', p, e?.message || e);
        }
    }

    /**
     * Очистка кеша/временных файлов:
     * - архив
     * - директория распаковки
     */
    async clearCache() {
        await this.deleteFileIfExists(this.archivePath);
        await this.cleanupDirIfExists(this.extractDir);
    }

    async fetchExpectedHash(tag) {
        const agent = new https.Agent({ keepAlive: true });

        try {
            const resp = await axios.get(this.getHashUrl(tag), {
                httpsAgent: agent,
                responseType: 'text',
                timeout: HASH_REQUEST_TIMEOUT_MS,
                headers: { 'User-Agent': 'Electron-FFmpeg-Updater' },
                validateStatus: (s) => s === 200 || s === 404,
            });

            if (resp.status === 404) {
                this.logger.warn('SHA-256 file not found (404)');
                return null;
            }

            const m = String(resp.data).match(/\b[a-fA-F0-9]{64}\b/);
            if (!m) {
                this.logger.warn('SHA-256 file fetched but hash not found');
                return null;
            }

            return m[0].toLowerCase();
        } catch (e) {
            this.logger.warn('Failed to fetch SHA-256:', e?.message || e);
            return null;
        }
    }

    async download(url, out, callback) {
        await fsPromise.mkdir(path.dirname(out), { recursive: true });
        await this.deleteFileIfExists(out);
        callback?.(0, 0);
        const { bytes } = await downloadFileWithProgress(url, out, (progress) => callback?.(progress, progress), undefined, {
            signal: AbortSignal.timeout(10 * 60_000),
        });
        if (bytes < 1024 * 1024) throw new Error(`Downloaded FFmpeg archive is too small (${bytes} bytes)`);
        callback?.(1.1, -1);
        this.logger.log('Downloaded tar.gz:', out, 'size:', bytes);
    }

    async extract() {
        await this.cleanupDirIfExists(this.extractDir);
        await fsPromise.mkdir(this.extractDir, { recursive: true });

        await tar.x({
            file: this.archivePath,
            cwd: this.extractDir,
            gzip: true,
        });
    }

    async install(expectedHash) {
        const src = path.join(this.extractDir, getBinaryName(this.platform));
        if (!(await this.fileExists(src))) {
            throw new Error('Extracted ffmpeg binary not found');
        }
        if (this.requireHash && (await sha256File(src)) !== expectedHash) {
            throw new Error('Could not verify FFmpeg SHA-256');
        }

        if (process.platform !== 'win32') {
            await fsPromise.chmod(src, 0o755);
        }
        await fsPromise.rename(src, this.installPath);
    }

    ensureInstalled(callback) {
        return queueComponentInstall(this, () => this.installIfNeeded(callback, false)).then(() => this.installPath);
    }

    updateIfNeeded(callback) {
        return queueComponentInstall(this, () => this.installIfNeeded(callback, true), true);
    }

    async installIfNeeded(callback, verifyLatest) {
        const exists = await this.fileExists(this.installPath);
        if (exists && (!this.requireHash || (!verifyLatest && this.isInstalledValidated))) return false;

        let tag;
        let expectedHash;
        try {
            tag = await resolveFfmpegTag(this.repo, this.tagName);
            if (this.requireHash) {
                expectedHash = await this.fetchExpectedHash(tag);
                if (!expectedHash) throw new Error('FFmpeg checksum unavailable');
            }
        } catch (error) {
            if (exists && !verifyLatest) return false;
            throw error;
        }

        if (exists && (await sha256File(this.installPath)) === expectedHash) {
            this.isInstalledValidated = true;
            return false;
        }

        this.isInstalledValidated = false;
        try {
            this.logger.log('Downloading:', this.assetName);
            await this.download(this.getDownloadUrl(tag), this.archivePath, callback);
            await this.extract();
            await this.install(expectedHash);
            this.isInstalledValidated = true;
            return true;
        } finally {
            await this.clearCache();
        }
    }
}

exports.FfmpegUpdater = FfmpegUpdater;

exports.getFfmpegUpdater = (() => {
    let instance;
    return (opts) => {
        if (!instance) {
            instance = new FfmpegUpdater(opts);
        }
        return instance;
    };
})();
