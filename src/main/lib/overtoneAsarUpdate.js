'use strict';

const fs = process.versions.electron ? require('original-fs') : require('node:fs');
const { promises: fsp } = fs;
const path = require('node:path');
const { createHash } = require('node:crypto');
const { Transform } = require('node:stream');
const { pipeline } = require('node:stream/promises');
const { createGunzip } = require('node:zlib');

const APP_EXE = 'Яндекс Музыка.exe';
const ARCHIVE = 'resources/app.asar';
const SHA256 = /^[a-f0-9]{64}$/;
const MAX_BYTES = 512 * 1024 * 1024;
const outsideLayout = new Set([APP_EXE, ARCHIVE, 'build.json', 'temp', 'resources/overtone-installed', 'resources/ffmpeg.exe', 'resources/yt-dlp.exe']);

async function hashFile(file) {
    const hash = createHash('sha256');
    for await (const chunk of fs.createReadStream(file)) hash.update(chunk);
    return hash.digest('hex');
}

async function getUpdateLayout(directory) {
    const layout = createHash('sha256');
    async function visit(relative) {
        const entries = await fsp.readdir(path.join(directory, relative), { withFileTypes: true });
        for (const entry of entries.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))) {
            const name = path.posix.join(relative, entry.name);
            if (outsideLayout.has(name) || /^unins\d{3}\.(?:exe|dat|msg)$/i.test(name)) continue;
            if (entry.isDirectory()) await visit(name);
            else if (entry.isFile()) layout.update(`${JSON.stringify(name)} ${await hashFile(path.join(directory, name))}\n`);
            else throw new Error(`Unsupported entry in the Overtone installation: ${name}`);
        }
    }
    await visit('');
    return layout.digest('hex');
}

function describeExecutable(buffer, headerHash) {
    if (!SHA256.test(headerHash)) throw new Error('Invalid ASAR header SHA-256');
    const matches = [];
    for (const algorithm of ['SHA256', 'sha256']) {
        const resource = Buffer.from(JSON.stringify([{ file: ARCHIVE.replace('/', '\\'), alg: algorithm, value: headerHash }]));
        const resourceOffset = buffer.indexOf(resource);
        if (resourceOffset < 0) continue;
        if (buffer.indexOf(resource, resourceOffset + resource.length) !== -1) throw new Error('Duplicate ASAR integrity resource');
        matches.push(resourceOffset + resource.indexOf(headerHash));
    }
    if (matches.length !== 1) throw new Error('Could not locate the packaged ASAR integrity resource');
    return {
        size: buffer.length,
        sha256: createHash('sha256').update(buffer).digest('hex'),
        offset: matches[0],
        headerHash,
    };
}

function verifyFastManifest(manifest, version, electronVersion, ffmpegRepository, yandexMusicVersion) {
    const { archive, executable } = manifest ?? {};
    const validFile = (file) => Number.isSafeInteger(file?.size) && file.size > 0 && file.size <= MAX_BYTES && SHA256.test(file.sha256);
    return (
        manifest?.schema === 1 &&
        manifest.version === version &&
        manifest.yandexMusicVersion === yandexMusicVersion &&
        manifest.electronVersion === electronVersion &&
        manifest.ffmpegRepository === ffmpegRepository &&
        SHA256.test(manifest.layout) &&
        validFile(archive) &&
        validFile(executable) &&
        Number.isSafeInteger(executable.offset) &&
        executable.offset > 0 &&
        executable.offset + 64 < executable.size &&
        SHA256.test(executable.headerHash)
    );
}

async function writeVerified(source, transforms, target, expected) {
    const hash = createHash('sha256');
    let bytes = 0;
    await pipeline(
        fs.createReadStream(source),
        ...transforms,
        new Transform({
            transform(chunk, _encoding, callback) {
                bytes += chunk.length;
                if (bytes > expected.size) return callback(new Error('Overtone update exceeds its declared size'));
                hash.update(chunk);
                callback(null, chunk);
            },
        }),
        fs.createWriteStream(target, { flags: 'wx' }),
    );
    if (bytes !== expected.size || hash.digest('hex') !== expected.sha256) throw new Error('Overtone update SHA-256 mismatch');
}

function unpackArchive(source, target, expected) {
    return writeVerified(source, [createGunzip()], target, expected);
}

function patchExecutable(source, target, expected) {
    let position = 0;
    const headerHash = Buffer.from(expected.headerHash);
    const patch = new Transform({
        transform(chunk, _encoding, callback) {
            const start = Math.max(position, expected.offset);
            const end = Math.min(position + chunk.length, expected.offset + headerHash.length);
            if (start < end) headerHash.copy(chunk, start - position, start - expected.offset, end - expected.offset);
            position += chunk.length;
            callback(null, chunk);
        },
    });
    return writeVerified(source, [patch], target, expected);
}

module.exports = { APP_EXE, ARCHIVE, hashFile, getUpdateLayout, describeExecutable, verifyFastManifest, unpackArchive, patchExecutable };
