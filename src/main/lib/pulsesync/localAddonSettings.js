'use strict';

const isSettingValue = (value) => ['boolean', 'string'].includes(typeof value) || Number.isFinite(value);

function acceptsValue(setting, value) {
    switch (setting.type) {
        case 'button':
            return typeof value === 'boolean';
        case 'text':
            return typeof value === 'string' && value.length <= 1024;
        case 'slider':
            return Number.isFinite(value) && value >= setting.min && value <= setting.max;
        case 'selector':
            return setting.options.some((option) => option.value === value);
    }
}

function readLocalAddonSettings(schema) {
    if (!Array.isArray(schema?.sections)) return [];
    const settings = new Map();
    for (const section of schema.sections) {
        if (!Array.isArray(section?.items)) continue;
        for (const item of section.items) {
            const { id, name, type, description, defaultValue = item?.value } = item ?? {};
            if (
                typeof id !== 'string' ||
                !/^[a-zA-Z][a-zA-Z0-9_-]{0,63}$/.test(id) ||
                Object.hasOwn(Object.prototype, id) ||
                typeof name !== 'string' ||
                !name.trim() ||
                settings.has(id)
            )
                continue;
            const setting = { id, type, name: name.slice(0, 160), description: typeof description === 'string' ? description.slice(0, 1000) : '' };
            if (type === 'slider') {
                const { min, max, step = 1 } = item;
                if (!Number.isFinite(min) || !Number.isFinite(max) || min >= max || !Number.isFinite(step) || step <= 0) continue;
                Object.assign(setting, { min, max, step });
            } else if (type === 'selector') {
                if (!item.options || typeof item.options !== 'object') continue;
                setting.options = Object.values(item.options)
                    .slice(0, 64)
                    .filter((option) => isSettingValue(option?.value) && typeof option.name === 'string')
                    .map((option) => ({ label: option.name.slice(0, 160), value: option.value }));
            }
            if (acceptsValue(setting, defaultValue)) settings.set(id, { ...setting, value: defaultValue });
            if (settings.size === 64) return [...settings.values()];
        }
    }
    return [...settings.values()];
}

module.exports = { acceptsValue, readLocalAddonSettings };
