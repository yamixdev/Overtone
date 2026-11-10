'use strict';

const UPDATE_CHANNEL_KEY = 'modSettings.appAutoUpdates.channel';

function getUpdateChannel() {
    const { get } = require('./store.js');
    const { StoreKeys } = require('../types/store.js');
    const channel = get(UPDATE_CHANNEL_KEY);
    if (channel === 'yandex' || channel === 'off') return channel;
    if (channel === undefined && (get('modSettings.appAutoUpdates.enableAppAutoUpdate') === false || get(StoreKeys.AUTO_UPDATES) === false)) {
        return 'off';
    }
    if (process.platform !== 'win32' || process.arch !== 'x64') return 'off';
    if (channel === 'overtone-beta') return channel;
    if (channel === undefined && /-beta\.\d+$/.test(require('../config.js').config.modification.version)) return 'overtone-beta';
    return 'overtone';
}

module.exports = { getUpdateChannel };
