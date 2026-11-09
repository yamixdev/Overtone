'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.handleWindowLifecycleEvents = void 0;
const electron_1 = require('electron');
const state_js_1 = require('../state.js');
const toggleWindowVisibility_js_1 = require('../window/toggleWindowVisibility.js');
const loadURL_js_1 = require('../loadURL.js');
const deviceInfo_js_1 = require('../deviceInfo.js');
const platform_js_1 = require('../../types/platform.js');
const Logger_js_1 = require('../../packages/logger/Logger.js');
const events_js_1 = require('../../events.js');
const config_js_1 = require('../../config.js');
const store_js_1 = require('../store.js');
const tray_js_1 = require('../tray.js');
const { applyWindowZoom } = require('../window/windowZoom.js');
const lifecycleLogger = new Logger_js_1.Logger('WindowLifecycle');
const USER_ID_IFRAME_URL_REGEXP = /^https:\/\/yandex.\w{2,3}\/user-id/;
const NAVIGATION_ABORTED_ERROR_CODE = -3;
const CONNECTION_ERROR_CODES = [-15, -21];
const checkAndUpdateApplicationData = (window) => {
    const diff = Date.now() - state_js_1.state.lastWindowBlurredOrHiddenTime;
    if (diff >= config_js_1.config.common.REFRESH_EVENT_TRIGGER_TIME_MS) {
        (0, events_js_1.sendRefreshApplicationData)(window);
    }
};
const setBlurredTime = () => {
    state_js_1.state.lastWindowBlurredOrHiddenTime = Date.now();
};

const { authDiagnostics } = require('../authDiagnostics.js');
const {
    isApplicationHostname,
    oAuthHostnamePattern,
    passportYandexHostnamePattern,
    ssoPassportYandexHostnamePattern,
    ssoPassportYaHostnamePattern,
} = require('../desktopPolicy.js');
const toSafeLogUrl = (value) => {
    try {
        const parsedUrl = new URL(value);
        if (parsedUrl.host) {
            return `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}`;
        }
        return `${parsedUrl.protocol}${parsedUrl.pathname}`;
    } catch {
        return 'invalid-url';
    }
};
const classifyNavigationPage = (value) => {
    try {
        const { hostname } = new URL(value);
        if (isApplicationHostname(hostname)) {
            return 'application';
        }
        if (oAuthHostnamePattern.test(hostname)) {
            return 'oauth';
        }
        if (passportYandexHostnamePattern.test(hostname) || ssoPassportYandexHostnamePattern.test(hostname) || ssoPassportYaHostnamePattern.test(hostname)) {
            return 'passport';
        }
        return 'other';
    } catch {
        return 'unknown';
    }
};
const handleWindowLifecycleEvents = (window) => {
    let lastDimensions = store_js_1.getWindowDimensions();
    let lastPosition = store_js_1.getWindowPosition();
    let placementTimer;
    const saveWindowPlacement = () => {
        clearTimeout(placementTimer);
        if (window.isDestroyed()) return;
        const { x, y, width, height } = window.getNormalBounds();
        const maximized = window.isFullScreen() || window.isMinimized() ? (lastDimensions?.maximized ?? false) : window.isMaximized();
        if (lastDimensions?.width !== width || lastDimensions?.height !== height || lastDimensions?.maximized !== maximized) {
            store_js_1.setWindowDimensions(width, height, maximized);
            lastDimensions = { width, height, maximized };
        }
        if (lastPosition?.x !== x || lastPosition?.y !== y) {
            store_js_1.setWindowPosition(x, y);
            lastPosition = { x, y };
        }
    };
    const queueWindowPlacementSave = () => {
        clearTimeout(placementTimer);
        placementTimer = setTimeout(saveWindowPlacement, 150);
    };
    const updateWindowZoom = () => applyWindowZoom(window);

    electron_1.app.on('activate', () => {
        (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(window, true);
    });
    electron_1.app.on('before-quit', () => {
        state_js_1.state.willQuit = true;
    });
    electron_1.app.on('window-all-closed', () => {
        if ([platform_js_1.Platform.WINDOWS, platform_js_1.Platform.LINUX].includes(deviceInfo_js_1.devicePlatform)) {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('browser-window-blur', () => {
        setBlurredTime();
    });
    electron_1.app.on('browser-window-focus', () => {
        checkAndUpdateApplicationData(window);
    });
    window.on('show', () => {
        state_js_1.state.isMinimized = false;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on('hide', () => {
        setBlurredTime();
        state_js_1.state.isMinimized = true;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on('minimize', () => {
        setBlurredTime();
        state_js_1.state.isMinimized = true;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on('maximize', () => {
        checkAndUpdateApplicationData(window);
        saveWindowPlacement();
        updateWindowZoom();
        state_js_1.state.isMinimized = false;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on('unmaximize', () => {
        saveWindowPlacement();
        updateWindowZoom();
        state_js_1.state.isMinimized = false;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on('restore', () => {
        checkAndUpdateApplicationData(window);
        updateWindowZoom();
        state_js_1.state.isMinimized = false;
        (0, tray_js_1.updateTrayMenu)(window);
    });
    window.on('resize', () => {
        updateWindowZoom();
        queueWindowPlacementSave();
    });
    window.on('move', queueWindowPlacementSave);
    window.on('enter-full-screen', updateWindowZoom);
    window.on('leave-full-screen', updateWindowZoom);
    window.once('closed', () => clearTimeout(placementTimer));
    window.on('close', (event) => {
        saveWindowPlacement();
        if (deviceInfo_js_1.devicePlatform !== platform_js_1.Platform.MACOS) {
            return;
        }
        if (state_js_1.state.willQuit) {
            return;
        }
        event.preventDefault();
        if (window.isFullScreen()) {
            window.once('leave-full-screen', () => {
                (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(window, false);
            });
            window.setFullScreen(false);
        } else {
            (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(window, false);
        }
    });
    const webContents = window.webContents;
    webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedUrl) => {
        if (errorCode === NAVIGATION_ABORTED_ERROR_CODE) {
            return;
        }

        const message = `Failed to load ${toSafeLogUrl(validatedUrl)}: ${errorDescription} (${errorCode})`;
        lifecycleLogger.error(message);
        authDiagnostics.record({ stage: 'navigation-failed', page: classifyNavigationPage(validatedUrl), errorCode });
        if ((errorCode <= -100 || CONNECTION_ERROR_CODES.includes(errorCode)) && !USER_ID_IFRAME_URL_REGEXP.test(validatedUrl)) {
            (0, loadURL_js_1.loadUnavailableErrorPage)(window);
        }
    });
    webContents.on('before-input-event', (event, input) => {
        if (
            input.type === 'keyDown' &&
            input.key === 'F11' &&
            !input.alt &&
            !input.control &&
            !input.meta &&
            !input.shift &&
            !events_js_1.isRecordingGlobalShortcut() &&
            window.isFullScreenable()
        ) {
            event.preventDefault();
            if (!input.isAutoRepeat) window.setFullScreen(!window.isFullScreen());
            return;
        }
        if (input.control && input.shift && input.code === 'KeyI' && input.type === 'keyDown' && webContents.getLastWebPreferences().devTools !== false) {
            event.preventDefault();
            webContents.toggleDevTools();
        }
    });
    webContents.on('did-finish-load', () => {
        updateWindowZoom();
        webContents.insertCSS(`
                body {
                    .passp-page {
                        -webkit-app-region: drag;
                    }
                }
            `);
        webContents.insertCSS(
            `
                html[data-overtone-hide-branding] [class*="TitleBar_pulseText"] {
                    display: none !important;
                }
                html[data-pulsesync-titlebar-branding-guard="true"]:not([data-overtone-hide-branding]) [data-pulsesync-titlebar-branding="true"] {
                    display: inline !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    width: auto !important;
                    height: auto !important;
                    max-width: none !important;
                    min-width: 0 !important;
                    overflow: visible !important;
                    pointer-events: none !important;
                    position: relative !important;
                }
            `,
            { cssOrigin: 'user' },
        );
    });
};
exports.handleWindowLifecycleEvents = handleWindowLifecycleEvents;
