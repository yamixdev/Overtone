'use strict';

const fs = require('original-fs');
const fsPromise = fs.promises;
const path = require('path');
const https = require('https');
const axios = require('axios');
const electron = require('electron');
const crypto = require('crypto');
const { pipeline } = require('stream/promises');
const Logger_js_1 = require('../packages/logger/Logger.js');
const { downloadFileWithProgress } = require('./utils.js');
const { queueComponentInstall } = require('./componentInstall.js');

function getBaseDirNearAsar() {
    const appPath = electron.app.getAppPath();
    return appPath.includes('app.asar') ? path.dirname(appPath) : appPath;
}

function mapAssetName() {
    if (process.platform === 'win32') {
        if (process.arch === 'arm64') return 'yt-dlp_arm64.exe';
        if (process.arch === 'x64') return 'yt-dlp.exe';
    }

    if (process.platform === 'darwin') {
        if (['x64', 'arm64'].includes(process.arch)) return 'yt-dlp_macos';
    }

    if (process.platform === 'linux') {
        if (process.arch === 'arm64') return 'yt-dlp_linux_aarch64';
        if (process.arch === 'x64') return 'yt-dlp_linux';
    }

    throw new Error(`Unsupported yt-dlp platform/arch: ${process.platform}/${process.arch}`);
}

function getInstallBinaryName(assetName) {
    if (process.platform === 'win32') return 'yt-dlp.exe';
    return assetName.endsWith('.exe') ? assetName.slice(0, -4) : 'yt-dlp';
}

async function sha256File(filePath) {
    const hash = crypto.createHash('sha256');
    await pipeline(fs.createReadStream(filePath), hash);
    return hash.digest('hex');
}

class YtDlpInstaller {
    constructor({ repo = 'yt-dlp/yt-dlp', channel = 'latest' } = {}) {
        this.logger = new Logger_js_1.Logger('YtDlpInstaller');
        this.repo = repo;
        this.channel = channel;
        this.assetName = mapAssetName();

        if (process.platform === 'linux') {
            this.baseDir = path.join(electron.app.getPath('userData'), 'yt-dlp');
            this.tempDir = path.join(this.baseDir, 'temp');
        } else {
            this.baseDir = getBaseDirNearAsar();
            this.tempDir = path.join(this.baseDir, '..', 'temp');
        }

        this.archivePath = path.join(this.tempDir, this.assetName);
        this.installPath = path.join(this.baseDir, getInstallBinaryName(this.assetName));

        this.logger.log('Initialized');
        this.logger.log('Install path:', this.installPath);
        this.logger.log('Asset name:', this.assetName);
    }

    getAssetUrl() {
        return `https://github.com/${this.repo}/releases/${this.channel}/download/${this.assetName}`;
    }

    getShaUrl() {
        return `https://github.com/${this.repo}/releases/${this.channel}/download/SHA2-256SUMS`;
    }

    async fileExists(filePath) {
        try {
            await fsPromise.access(filePath, fs.constants.F_OK);
            return true;
        } catch {
            return false;
        }
    }

    async deleteFileIfExists(filePath) {
        try {
            if (await this.fileExists(filePath)) {
                await fsPromise.unlink(filePath);
            }
        } catch (error) {
            this.logger.warn('Failed to delete file:', filePath, error?.message || error);
        }
    }

    async fetchExpectedHash() {
        const agent = new https.Agent({ keepAlive: true });

        try {
            const response = await axios.get(this.getShaUrl(), {
                httpsAgent: agent,
                responseType: 'text',
                timeout: 8000,
                headers: { 'User-Agent': 'PulseSync-yt-dlp-installer' },
                validateStatus: (status) => status === 200 || status === 404,
            });

            if (response.status === 404) {
                this.logger.warn('SHA2-256SUMS not found');
                return null;
            }

            const escapedAssetName = this.assetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const match = String(response.data).match(new RegExp(`([a-fA-F0-9]{64})\\s+\\*?${escapedAssetName}`));

            return match?.[1]?.toLowerCase() ?? null;
        } catch (error) {
            this.logger.warn('Failed to fetch yt-dlp checksums:', error?.message || error);
            return null;
        }
    }

    async hasInstalledBinary() {
        return await this.fileExists(this.installPath);
    }

    async download(callback) {
        await fsPromise.mkdir(path.dirname(this.archivePath), { recursive: true });
        await this.deleteFileIfExists(this.archivePath);
        callback?.(0, 0);
        await downloadFileWithProgress(this.getAssetUrl(), this.archivePath, (progress) => callback?.(progress, progress), undefined, {
            signal: AbortSignal.timeout(10 * 60_000),
        });
    }

    async install() {
        await fsPromise.mkdir(path.dirname(this.installPath), { recursive: true });
        if (process.platform !== 'win32') {
            await fsPromise.chmod(this.archivePath, 0o755);
        }
        await fsPromise.rename(this.archivePath, this.installPath);
    }

    ensureInstalled(callback) {
        return queueComponentInstall(this, () => this.installIfNeeded(callback, false)).then(() => this.installPath);
    }

    updateIfNeeded(callback) {
        return queueComponentInstall(this, () => this.installIfNeeded(callback, true), true);
    }

    async installIfNeeded(callback, verifyLatest) {
        const exists = await this.hasInstalledBinary();
        const expectedHash = await this.fetchExpectedHash();
        if (!expectedHash) {
            if (exists && !verifyLatest) return false;
            throw new Error('yt-dlp checksum unavailable');
        }
        if (exists && (await sha256File(this.installPath)) === expectedHash) return false;

        try {
            await this.download(callback);
            if ((await sha256File(this.archivePath)) !== expectedHash) {
                throw new Error('Could not verify yt-dlp SHA-256');
            }
            await this.install();
            return true;
        } finally {
            await this.deleteFileIfExists(this.archivePath);
        }
    }
}

exports.YtDlpInstaller = YtDlpInstaller;

exports.getYtDlpInstaller = (() => {
    let instance;
    return (opts) => {
        if (!instance) {
            instance = new YtDlpInstaller(opts);
        }
        return instance;
    };
})();
