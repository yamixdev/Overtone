'use strict';

const OVERTONE_FFMPEG_REPOSITORY = 'yamixdev/Overtone';
const FFMPEG_CHANNEL_TAG = 'ffmpeg-binaries';
const RELEASE_POINTER = /^<!-- overtone-ffmpeg-release: (ffmpeg-v\d+\.\d+\.\d+) -->\s*$/m;

async function readFfmpegRelease(repo, tag) {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/tags/${encodeURIComponent(tag)}`, {
        headers: { Accept: 'application/vnd.github+json' },
        signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Could not read FFmpeg release ${tag} (HTTP ${response.status})`);
    const release = await response.json();
    if (release.tag_name !== tag || release.draft !== false) throw new Error(`Invalid FFmpeg release ${tag}`);
    return release;
}

async function resolveFfmpegTag(repo, tag) {
    if (repo !== OVERTONE_FFMPEG_REPOSITORY || tag !== FFMPEG_CHANNEL_TAG) return tag;
    const release = await readFfmpegRelease(repo, tag);
    return RELEASE_POINTER.exec(release.body ?? '')?.[1] ?? tag;
}

module.exports = { OVERTONE_FFMPEG_REPOSITORY, FFMPEG_CHANNEL_TAG, readFfmpegRelease, resolveFfmpegTag };
