import { createContext, useContext } from 'react';
import type { SettingsSchemaItem } from './components/settings/SettingsSection';

export type SettingsNavigationContextValue = {
    categoryId: string;
    categoryLabel: string;
    highlightedSettingId?: string;
    searchQuery: string;
};

export const SettingsNavigationContext = createContext<SettingsNavigationContextValue>({
    categoryId: '',
    categoryLabel: '',
    searchQuery: '',
});

export function useSettingsNavigation() {
    return useContext(SettingsNavigationContext);
}

export function normalizeSettingsSearch(value: string) {
    return value.trim().toLocaleLowerCase('ru-RU').replaceAll('ё', 'е');
}

export function matchesSettingsSearch(query: string, values: readonly (string | undefined)[]) {
    const normalizedQuery = normalizeSettingsSearch(query);

    if (!normalizedQuery) {
        return true;
    }

    return values.some((value) => normalizeSettingsSearch(value ?? '').includes(normalizedQuery));
}

export function getSettingsItemSearchText(item: SettingsSchemaItem): (string | undefined)[] {
    if (item.type === 'heading' || item.type === 'note') {
        return [item.id, item.text];
    }

    const text = [item.id, item.props.title, item.props.description];

    switch (item.type) {
        case 'disclosure':
            return text.concat(item.items.flatMap(getSettingsItemSearchText));
        case 'input':
            return [...text, item.props.placeholder];
        case 'path':
            return [...text, item.props.path];
        case 'select':
            return text.concat(item.props.options.flatMap((option) => [option.label, option.description]));
        default:
            return text;
    }
}

export function createModSettingsDeeplink(categoryId: string, settingId: string) {
    return `yandexmusic://mod-settings/${encodeURIComponent(categoryId)}/${encodeURIComponent(settingId)}`;
}
