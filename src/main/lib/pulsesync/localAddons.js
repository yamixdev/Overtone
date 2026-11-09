'use strict';

const { createHash } = require('node:crypto');
const fs = require('node:fs/promises');
const path = require('node:path');
const { fromBufferPromise } = require('yauzl');
const { LOCAL_ADDON_PREFIX, isLocalAddonId, normalizeCanonicalSnapshot, validateAddonId } = require('./isolatedAddonExecution.js');
const { acceptsValue, readLocalAddonSettings } = require('./localAddonSettings.js');
const { validateWebHostRequirements } = require('./webHostRequirements.js');

const MAX_ARCHIVE_BYTES = 24 * 1024 * 1024;
const MAX_STORE_BYTES = 24 * 1024 * 1024;
const MAX_ASSET_BYTES = 2 * 1024 * 1024;
const MAX_ADDONS = 32;
const EMPTY_ASSETS = Object.freeze([]);

function readAllowedUrls(value) {
    if (value === undefined) return [];
    if (!Array.isArray(value) || value.length > 64) throw new Error('Некорректный список сетевых разрешений в metadata.json.');
    return [
        ...new Set(
            value.map((entry) => {
                try {
                    if (typeof entry !== 'string' || entry.length > 1024) throw new TypeError();
                    const url = new URL(entry);
                    if (url.protocol !== 'https:' || url.username || url.password || url.hash) throw new TypeError();
                    return url.href;
                } catch {
                    throw new Error('Сетевые разрешения модификации должны содержать HTTPS-адреса без логина, пароля и фрагмента.');
                }
            }),
        ),
    ];
}

async function readPackage(filePath) {
    if (path.extname(filePath).toLowerCase() !== '.pext') throw new Error('Выберите файл с расширением .pext.');

    const file = await fs.open(filePath, 'r');
    let archive;
    try {
        const stat = await file.stat();
        if (!stat.isFile()) throw new Error('Выберите файл с расширением .pext.');
        const { size } = stat;
        if (size > MAX_ARCHIVE_BYTES) throw new Error('Архив превышает 24 МБ.');
        const contents = Buffer.alloc(size);
        for (let offset = 0; offset < size;) {
            const { bytesRead } = await file.read(contents, offset, size - offset, offset);
            if (!bytesRead) throw new Error('Файл изменился во время чтения.');
            offset += bytesRead;
        }
        try {
            archive = await fromBufferPromise(contents, { validateEntrySizes: true });
        } catch (error) {
            throw new Error('Не удалось открыть .pext. Проверьте, что файл содержит ZIP-архив.', { cause: error });
        }
    } finally {
        await file.close();
    }

    try {
        if (archive.entryCount > 2048) throw new Error('В архиве слишком много файлов.');
        const entries = new Map();
        for await (const entry of archive.eachEntry()) {
            if (entries.has(entry.fileName)) throw new Error('В архиве есть файлы с одинаковыми именами.');
            entries.set(entry.fileName, entry);
        }

        async function readText(name, maxBytes = MAX_ASSET_BYTES) {
            const key = typeof name === 'string' ? name.replaceAll('\\', '/').replace(/^\.\//, '') : '';
            const entry = entries.get(key);
            if (!entry || key.endsWith('/')) throw new Error(`В архиве отсутствует файл ${key.slice(0, 100) || 'из metadata.json'}.`);
            if (entry.uncompressedSize > maxBytes) throw new Error('Один из файлов модификации слишком большой.');
            const stream = await archive.openReadStreamPromise(entry);
            const chunks = [];
            for await (const chunk of stream) chunks.push(chunk);
            return Buffer.concat(chunks)
                .toString('utf8')
                .replace(/^\uFEFF/, '');
        }

        const metadata = JSON.parse(await readText('metadata.json', 64 * 1024));
        const name = typeof metadata?.name === 'string' ? metadata.name.trim() : '';
        if (!name || name.length > 160) throw new Error('Укажите название модификации в metadata.json.');
        const type = metadata.type === 'script' ? 'web-addon' : metadata.type;
        if (!['theme', 'web-addon'].includes(type)) throw new Error('Поддерживаются CSS-темы и изолированные WebHost-аддоны.');

        const requirements = validateWebHostRequirements(metadata.requirements);
        if (requirements?.capabilities.includes('modules-v1') || Object.keys(metadata.modules ?? {}).length || metadata.securityManifest) {
            throw new Error('Этой модификации нужны модули PulseSync Client. Локальная установка модулей пока недоступна.');
        }

        const code = metadata.script ? await readText(metadata.script) : '';
        if (type === 'theme' && code.trim()) throw new Error('Темы с устаревшими скриптами не поддерживаются.');
        if (type === 'web-addon' && !code.includes('__PULSESYNC_ADDON_QUEUE__')) {
            throw new Error('Скрипт собран для старого загрузчика PulseSync. Нужна версия аддона для WebHost.');
        }

        const definitionId = type === 'web-addon' ? validateAddonId(metadata.id) : undefined;
        const identity = definitionId ?? (typeof metadata.id === 'string' && metadata.id.trim() ? metadata.id.trim() : name);
        const id = LOCAL_ADDON_PREFIX + createHash('sha256').update(identity).digest('hex');
        const css = metadata.css ? await readText(metadata.css) : '';
        const snapshot = normalizeCanonicalSnapshot({
            addons: [
                {
                    id,
                    name,
                    type,
                    version: typeof metadata.version === 'string' ? metadata.version.slice(0, 80) : '',
                    css,
                    code,
                    allowedUrls: type === 'web-addon' ? readAllowedUrls(metadata.allowedUrls) : [],
                    requirements,
                    cssScope: metadata.cssScope,
                },
            ],
        });
        if (snapshot.addons.length !== 1) throw new Error('Пакет не прошёл проверку CSS или изолированного JavaScript.');
        return {
            asset: { ...snapshot.addons[0], ...(definitionId ? { definitionId } : {}) },
            settings: definitionId ? readLocalAddonSettings(metadata.settings) : [],
        };
    } finally {
        archive.close();
    }
}

function createLocalAddonStore(openStore) {
    let store;
    let records;
    let activeAssets = EMPTY_ASSETS;

    const updateCache = (next) => {
        records = next;
        activeAssets = records.filter(({ enabled }) => enabled).map(({ asset }) => asset);
    };

    const read = () => {
        store ??= openStore();
        if (!records) {
            const saved = store.get('addons', []);
            if (!Array.isArray(saved) || saved.some((record) => !isLocalAddonId(record?.asset?.id) || typeof record.enabled !== 'boolean')) {
                throw new Error('Не удалось прочитать список локальных модификаций.');
            }
            updateCache(saved);
        }
        return records;
    };

    const save = (next) => {
        if (next.length > MAX_ADDONS || Buffer.byteLength(JSON.stringify(next)) > MAX_STORE_BYTES) {
            throw new Error('В хранилище модификаций закончилось место.');
        }
        store.set('addons', next);
        updateCache(next);
    };

    return {
        getActiveAssets() {
            try {
                read();
                return activeAssets;
            } catch {
                return EMPTY_ASSETS;
            }
        },
        list() {
            return read().map(({ asset: { id, name, type, version, allowedUrls }, enabled, settings }) => ({ id, name, type, version, enabled, allowedUrls, settings }));
        },
        getSettingsSnapshot() {
            try {
                return Object.fromEntries(read().map(({ asset, settings = [] }) => [asset.id, Object.fromEntries(settings.map(({ id, value }) => [id, { value }]))]));
            } catch {
                return {};
            }
        },
        setSetting(id, key, value) {
            const current = read();
            const record = current.find(({ asset }) => asset.id === id);
            const setting = record?.settings?.find((item) => item.id === key);
            if (!setting || !acceptsValue(setting, value)) throw new Error('Недопустимое значение настройки модификации.');
            if (setting.value === value) return;
            const settings = record.settings.map((item) => (item === setting ? { ...item, value } : item));
            save(current.map((item) => (item === record ? { ...record, settings } : item)));
        },
        async import(filePath) {
            const { asset, settings } = await readPackage(filePath);
            const current = read();
            const previousSettings = current.find((record) => record.asset.id === asset.id)?.settings ?? [];
            for (const setting of settings) {
                const previous = previousSettings.find((item) => item.id === setting.id && item.type === setting.type);
                if (previous && acceptsValue(setting, previous.value)) setting.value = previous.value;
            }
            save([...current.filter((record) => record.asset.id !== asset.id), { asset, settings, enabled: false }]);
        },
        setEnabled(id, enabled) {
            const current = read();
            if (!current.some((record) => record.asset.id === id)) throw new Error('Модификация не найдена.');
            save(current.map((record) => (record.asset.id === id ? { ...record, enabled } : record)));
        },
        remove(id) {
            save(read().filter((record) => record.asset.id !== id));
        },
    };
}

const localAddons = createLocalAddonStore(() => {
    const { default: Store } = require('electron-store');
    return new Store({ name: 'overtone-local-addons' });
});

module.exports = { createLocalAddonStore, isLocalAddonId, localAddons };
