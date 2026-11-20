'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.loadReleaseNotes = void 0;
const electron_1 = require('electron');
const config_1 = require('../config');
const Logger_1 = require('../packages/logger/Logger');
const { RELEASE_NOTES_KEY_PREFIX } = require('../constants/i18nKeys.js');
const { stringToAST } = require('./i18n/stringToAST.js');
const commonLogger = new Logger_1.Logger('Common');
const russianFallbackNotes = {
    [`${RELEASE_NOTES_KEY_PREFIX}5.128.0`]: stringToAST(
        '<p>В Коллекции у «Моей волны» появилась своя страница. Сохранённые волны ищите во вкладке «Вам понравилось». Если у вас есть комнаты, они будут во вкладке «На двоих».</p>' +
            '<p>Доступ к странице зависит от аккаунта.</p>',
    ),
};
const loadReleaseNotes = async (language) => {
    const url = `${config_1.config.common.UPDATE_URL}release-notes/${language}.json`;
    const fallbackNotes = language === 'ru' ? russianFallbackNotes : undefined;
    try {
        const response = await electron_1.net.fetch(url, {
            cache: 'no-store',
            signal: AbortSignal.timeout(5000),
        });
        commonLogger.info(`Request to ${url} completed with status: `, response.status);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const notes = await response.json();
        if (!notes || typeof notes !== 'object' || Array.isArray(notes)) throw new TypeError('Expected a release notes dictionary');
        return fallbackNotes ? { ...fallbackNotes, ...notes } : notes;
    } catch (error) {
        commonLogger.error(`Release-notes loading failed with error: `, error);
        return fallbackNotes;
    }
};
exports.loadReleaseNotes = loadReleaseNotes;
