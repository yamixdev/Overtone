const fs = require('node:fs');
const path = require('node:path');
const { app, shell } = require('electron');
const { config } = require('../../config.js');
const { Logger } = require('../../packages/logger/Logger.js');

const windowsAppId = 'ru.yandex.desktop.music.overtone';
const logger = new Logger('WindowsAppShortcut');

function registerWindowsAppShortcut() {
    const target = process.execPath;
    const name = `Яндекс Музыка (${config.modification.name})`;
    const programs = path.join(app.getPath('appData'), 'Microsoft', 'Windows', 'Start Menu', 'Programs');
    const shortcut = path.join(programs, `${name}.lnk`);

    try {
        fs.mkdirSync(programs, { recursive: true });
        const existing = fs.existsSync(shortcut) ? shell.readShortcutLink(shortcut) : null;
        const targetPath = target.toLowerCase();
        if (
            existing?.target.toLowerCase() === targetPath &&
            existing.appUserModelId === windowsAppId &&
            existing.icon?.toLowerCase() === targetPath &&
            existing.iconIndex === 0
        ) {
            return;
        }

        const written = shell.writeShortcutLink(shortcut, existing ? 'update' : 'create', {
            target,
            cwd: path.dirname(target),
            description: name,
            icon: target,
            iconIndex: 0,
            appUserModelId: windowsAppId,
        });
        if (!written) logger.warn('Could not register the Start menu shortcut');
    } catch (error) {
        logger.warn('Could not register the Start menu shortcut:', error.message);
    }
}

module.exports = { registerWindowsAppShortcut, windowsAppId };
