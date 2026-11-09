'use strict';
const store = require('../store.js');

const INTERFACE_SCALE_KEY = 'modSettings.window.interfaceScale';
const FIT_INTERFACE_TO_WINDOW_KEY = 'modSettings.window.fitInterfaceToWindow';
const MIN_SCALE = 75;
const MAX_SCALE = 200;
const MIN_AUTO_SCALE = 85;
// Keep the desktop layout past the 1150px breakpoint and leave space above the player's 640px compact layout.
const DESKTOP_VIEWPORT_WIDTH = 1152;
const DESKTOP_VIEWPORT_HEIGHT = 720;

const normalizeScale = (value) => (Number.isFinite(value) ? Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.round(value))) : 100);
const getPreferredScale = () => normalizeScale(store.get(INTERFACE_SCALE_KEY));

const applyWindowZoom = (window) => {
    const preferredScale = getPreferredScale();
    let scale = preferredScale;
    if (store.get(FIT_INTERFACE_TO_WINDOW_KEY) !== false && !window.isMaximized() && !window.isFullScreen()) {
        const [width, height] = window.getContentSize();
        const fitScale = Math.floor(100 * Math.min(width / DESKTOP_VIEWPORT_WIDTH, height / DESKTOP_VIEWPORT_HEIGHT));
        scale = Math.min(preferredScale, Math.max(MIN_AUTO_SCALE, fitScale));
    }
    const zoom = scale / 100;
    if (Math.abs(window.webContents.zoomFactor - zoom) > 0.0001) window.webContents.zoomFactor = zoom;
    return zoom;
};

const setPreferredScale = (window, value) => {
    const scale = normalizeScale(value);
    if (store.get(INTERFACE_SCALE_KEY) !== scale) store.set(INTERFACE_SCALE_KEY, scale);
    applyWindowZoom(window);
    return scale;
};

module.exports = { INTERFACE_SCALE_KEY, FIT_INTERFACE_TO_WINDOW_KEY, applyWindowZoom, getPreferredScale, setPreferredScale };
