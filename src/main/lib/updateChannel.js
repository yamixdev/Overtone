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
    return process.platform === 'win32' && process.arch === 'x64' ? 'overtone' : 'off';
}

module.exports = { getUpdateChannel };
