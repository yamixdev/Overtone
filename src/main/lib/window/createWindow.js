'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.createWindow = void 0;
const node_path_1 = __importDefault(require('node:path'));
const electron_1 = require('electron');
const config_js_1 = require('../../config.js');
const platform_js_1 = require('../../types/platform.js');
const deviceInfo_js_1 = require('../deviceInfo.js');
const store_js_1 = require('../store.js');
const pulsesyncDevConfig_js_1 = require('../pulsesyncDevConfig.js');
const toggleWindowVisibility_js_1 = require('./toggleWindowVisibility.js');
const { applyWindowZoom, getPreferredScale } = require('./windowZoom.js');

const minBounds = {
    minWidth: 768,
    minHeight: 650,
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const restoredSize = (value, fallback) => (Number.isSafeInteger(value) && value > 0 ? value : fallback);

const createWindow = async () => {
    const withFrame = [platform_js_1.Platform.WINDOWS, platform_js_1.Platform.MACOS].includes(deviceInfo_js_1.devicePlatform);
    const settings = store_js_1.getModSettings()?.window;
    const dimensions = settings?.saveWindowDimensionsOnRestart !== false ? store_js_1.getWindowDimensions() : undefined;
    const position = settings?.saveWindowPositionOnRestart !== false ? store_js_1.getWindowPosition() : undefined;
    const hasPosition = Number.isInteger(position?.x) && Number.isInteger(position?.y);
    const display = hasPosition ? electron_1.screen.getDisplayNearestPoint(position) : electron_1.screen.getPrimaryDisplay();
    const { workArea } = display;
    const minWidth = Math.min(minBounds.minWidth, workArea.width);
    const minHeight = Math.min(minBounds.minHeight, workArea.height);
    const width = clamp(restoredSize(dimensions?.width, 1280), minWidth, workArea.width);
    const height = clamp(restoredSize(dimensions?.height, 800), minHeight, workArea.height);
    store_js_1.setWindowMonitor(display.id);

    const window = new electron_1.BrowserWindow({
        show: false,
        frame: withFrame,
        titleBarStyle: 'hidden',
        backgroundColor: '#FFF',
        trafficLightPosition: {
            x: 16,
            y: 10,
        },
        minWidth,
        minHeight,
        width,
        height,
        ...(hasPosition
            ? {
                  x: clamp(position.x, workArea.x, workArea.x + workArea.width - width),
                  y: clamp(position.y, workArea.y, workArea.y + workArea.height - height),
              }
            : { center: true }),
        webPreferences: {
            devTools: config_js_1.config.app.enableDevTools || store_js_1.getDevMode() || pulsesyncDevConfig_js_1.pulseSyncDevConfig.enabled,
            webSecurity: config_js_1.config.app.enableWebSecurity,
            sandbox: false,
            nodeIntegrationInWorker: false,
            nodeIntegration: false,
            contextIsolation: true,
            autoplayPolicy: 'no-user-gesture-required',
            preload: node_path_1.default.join(__dirname, '..', 'preload.js'),
            backgroundThrottling: false,
            zoomFactor: getPreferredScale() / 100,
        },
    });
    window.isMainWindow = true;
    window.once('ready-to-show', () => {
        const shouldShow = !(store_js_1.getModSettings()?.window?.minimizedStart ?? false);

        if ((dimensions?.maximized ?? false) && shouldShow) window.maximize();
        applyWindowZoom(window);
        (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(window, shouldShow);
    });
    return window;
};
exports.createWindow = createWindow;
