import type { PulseSyncPlayer, TrackFormat, TrackQualityInfo } from '../contracts';
import { getPlayerInstance } from '../core/values';

const qualityMap: Record<string, string> = {
    lq: 'LQ',
    nq: 'NQ',
    hq: 'HQ',
    'hq+': 'HQ+',
    hqplus: 'HQ+',
    lossless: 'HQ+',
};
const YASP_FORMAT_CACHE_LIMIT = 16;

function normalizeCodec(value: unknown) {
    const raw = String(value ?? '')
        .trim()
        .toLowerCase();

    if (!raw) {
        return null;
    }

    if (raw.includes('flac')) {
        return 'FLAC';
    }

    if (raw.includes('mp3') || raw.includes('mpeg')) {
        return 'MP3';
    }

    if (raw.includes('he-aac') || raw.includes('heaac') || raw.includes('mp4a.40.5') || raw.includes('mp4a.40.29')) {
        return 'HE-AAC';
    }

    if (raw.includes('aac') || raw.includes('mp4a')) {
        return 'AAC';
    }

    if (raw.includes('alac')) {
        return 'ALAC';
    }

    return raw.toUpperCase();
}

function normalizeNumber(value: unknown) {
    const number = Number(value);

    return Number.isFinite(number) && number > 0 ? number : null;
}

function normalizeBitrate(value: unknown) {
    const number = normalizeNumber(value);

    return number ? Math.round(number > 10_000 ? number / 1_000 : number) : null;
}

function formatSampleRate(value: unknown) {
    const sampleRate = normalizeNumber(value);

    return sampleRate ? String(Math.round(sampleRate / 100) / 10) : '?';
}

function normalizeRank(format: TrackFormat, fallback: TrackFormat, bitrateKbits: number | null, codec: string | null) {
    const rawQuality = String(format.quality ?? fallback.quality ?? '')
        .trim()
        .toLowerCase();

    if (qualityMap[rawQuality]) {
        return qualityMap[rawQuality];
    }

    if (format.lossless === true || codec === 'FLAC' || codec === 'ALAC') {
        return 'HQ+';
    }

    if (!bitrateKbits) {
        return null;
    }

    if (bitrateKbits >= 256) {
        return 'HQ+';
    }

    if (bitrateKbits >= 192) {
        return 'HQ';
    }

    if (bitrateKbits >= 128) {
        return 'NQ';
    }

    return 'LQ';
}

function getCurrentTrackSource(player?: PulseSyncPlayer | null) {
    const entity = player?.state?.queueState?.currentEntity?.value?.entity;
    const mediaSource = entity?.mediaSourceData;

    return {
        entity,
        trackId: entity?.data?.meta?.id,
        sourceIndex: normalizeSourceIndex(mediaSource?.sourceIndex),
        downloadInfo: (mediaSource?.data ?? null) as TrackFormat | null,
    };
}

function normalizeSourceIndex(value: unknown) {
    return typeof value === 'number' || (typeof value === 'string' && value !== '') ? String(value) : null;
}

function canUseYaspFormat(downloadInfo: TrackFormat | null) {
    const codec = normalizeCodec(downloadInfo?.codec);

    // MP3 quality comes from Sonata's source metadata even when a YASP stream is still buffered.
    return Boolean(
        codec && codec !== 'MP3' && downloadInfo?.transport !== 'raw' && !downloadInfo?.pulseSyncReplacement,
    );
}

function selectYaspFormat(format: TrackFormat | null, downloadInfo: TrackFormat | null, sourceIndex: string | null) {
    const codec = normalizeCodec(format?.codec ?? format?.mimeType);

    return sourceIndex !== null &&
        sourceIndex === normalizeSourceIndex(format?.sourceIndex) &&
        canUseYaspFormat(downloadInfo) &&
        codec === normalizeCodec(downloadInfo?.codec)
        ? format
        : null;
}

export function buildTrackQualityInfo(
    format: TrackFormat | null = null,
    fallbackDownloadInfo: TrackFormat | null = null,
): TrackQualityInfo | null {
    const sourceFormat = format && typeof format === 'object' ? format : {};
    const fallback = fallbackDownloadInfo && typeof fallbackDownloadInfo === 'object' ? fallbackDownloadInfo : {};
    const codec = normalizeCodec(sourceFormat.codec ?? fallback.codec);
    const bitrateKbits = normalizeBitrate(sourceFormat.bitrate) ?? normalizeBitrate(fallback.bitrate);
    const parsedBitsPerSample = normalizeNumber(sourceFormat.bitsPerSample);
    const sampleRate = normalizeNumber(sourceFormat.sampleRate);
    const bitsPerSample = parsedBitsPerSample ?? (codec && !['FLAC', 'ALAC'].includes(codec) ? 16 : null);
    const quality = normalizeRank(sourceFormat, fallback, bitrateKbits, codec);

    if (!quality && !codec && !bitrateKbits && !bitsPerSample && !sampleRate) {
        return null;
    }

    const resolution = bitsPerSample || sampleRate ? `${bitsPerSample ?? '?'}/${formatSampleRate(sampleRate)}` : '';
    const formatLabel = [codec, resolution, bitrateKbits && `${bitrateKbits} kbits/s`].filter(Boolean).join(' ');

    return {
        quality,
        codec,
        bitsPerSample,
        sampleRate,
        bitrateKbits,
        label: [quality, formatLabel].filter(Boolean).join(': '),
        source: sourceFormat.source ?? null,
        updatedAt: sourceFormat.updatedAt ?? null,
    };
}

async function readYaspAudioFormat() {
    try {
        return (await window.nativeAudioOutput?.getYaspAudioFormat?.()) ?? null;
    } catch (error) {
        console.debug('[PulseSync] Failed to read YASP audio format:', error);

        return null;
    }
}

function subscribeToCurrentTrack(
    player: PulseSyncPlayer,
    listener: (info: TrackQualityInfo | null, trackId: unknown) => void,
) {
    let current = getCurrentTrackSource(player);
    const formatsBySource = new Map<string, TrackFormat>();
    let lastFormatSourceIndex: string | null = null;
    let receivedFormatEvent = false;
    let disposed = false;
    let retry: ReturnType<typeof setInterval> | undefined;
    const publish = () => {
        const format = current.sourceIndex === null ? null : (formatsBySource.get(current.sourceIndex) ?? null);

        listener(
            buildTrackQualityInfo(
                selectYaspFormat(format, current.downloadInfo, current.sourceIndex),
                current.downloadInfo,
            ),
            current.trackId,
        );
    };
    const readSource = () => {
        const next = getCurrentTrackSource(player);

        if (
            next.entity === current.entity &&
            next.downloadInfo === current.downloadInfo &&
            next.sourceIndex === current.sourceIndex
        ) {
            return;
        }

        current = next;
        publish();
    };
    const updateFormat = (format: TrackFormat | null) => {
        const sourceIndex = normalizeSourceIndex(format?.sourceIndex);

        if (!format && lastFormatSourceIndex !== null) {
            formatsBySource.delete(lastFormatSourceIndex);

            if (lastFormatSourceIndex === current.sourceIndex) {
                publish();
            }
        } else if (format && sourceIndex !== null) {
            formatsBySource.delete(sourceIndex);
            formatsBySource.set(sourceIndex, format);

            if (formatsBySource.size > YASP_FORMAT_CACHE_LIMIT) {
                const oldest = formatsBySource.keys().next();

                if (!oldest.done) {
                    formatsBySource.delete(oldest.value);
                }
            }

            if (sourceIndex === current.sourceIndex) {
                publish();
            }
        }

        lastFormatSourceIndex = sourceIndex;
    };
    const refresh = () => {
        clearInterval(retry);
        readSource();

        // Sonata fills mediaSourceData asynchronously without notifying currentEntity again.
        let attempts = 10;

        retry = setInterval(() => {
            readSource();

            if (--attempts === 0) {
                clearInterval(retry);
            }
        }, 200);
    };
    const unsubscribeTrack = player?.state?.queueState?.currentEntity?.onChange?.(refresh);
    const unsubscribePlayback = player?.state?.playerState?.status?.onChange?.(refresh);
    const unsubscribeFormat = window.musicDesktop?.pulsesync.audio.onFormatChanged?.((value) => {
        receivedFormatEvent = true;
        readSource();
        updateFormat(value as TrackFormat | null);
    });

    refresh();
    publish();

    void readYaspAudioFormat().then((value) => {
        if (!disposed && !receivedFormatEvent) {
            updateFormat(value);
        }
    });

    return () => {
        disposed = true;
        clearInterval(retry);
        unsubscribeTrack?.();
        unsubscribePlayback?.();
        unsubscribeFormat?.();
    };
}

export function installTrackQualityApi() {
    let lastInfo = window.PulseSyncTrackQuality?.getLastInfo?.() ?? null;
    const updateFromFormat = (format: TrackFormat | null = null, fallback: TrackFormat | null = null) => {
        lastInfo = buildTrackQualityInfo(format, fallback);

        return lastInfo;
    };

    window.PulseSyncTrackQuality = {
        buildInfo: buildTrackQualityInfo,
        updateFromFormat,
        format: (format = null, fallback = null) => buildTrackQualityInfo(format, fallback)?.label ?? null,
        getLastInfo: () => lastInfo,
        subscribeToCurrentTrack: (player, listener) =>
            subscribeToCurrentTrack(player, (info, trackId) => {
                lastInfo = info;
                listener(info, trackId);
            }),
        getCurrentInfo: async (fallback = null) => {
            const player = getPlayerInstance();
            const initial = getCurrentTrackSource(player);
            const downloadInfo = fallback ?? initial.downloadInfo;

            if (!canUseYaspFormat(downloadInfo)) {
                return updateFromFormat(null, downloadInfo);
            }

            const format = await readYaspAudioFormat();
            const current = getCurrentTrackSource(player);

            if (
                current.entity !== initial.entity ||
                current.downloadInfo !== initial.downloadInfo ||
                current.sourceIndex !== initial.sourceIndex
            ) {
                return updateFromFormat(null, current.downloadInfo);
            }

            return updateFromFormat(selectYaspFormat(format, downloadInfo, current.sourceIndex), downloadInfo);
        },
        getCurrentLabel: async (fallback = null) =>
            (await window.PulseSyncTrackQuality?.getCurrentInfo(fallback))?.label ?? null,
    };
}
