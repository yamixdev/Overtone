import { useEffect, useState } from 'react';
import type {
    LocalAddon,
    LocalAddonRequest,
    LocalAddonSetting,
    LocalAddonSettingValue,
} from '../../../../shared/musicDesktop';
import { SettingsSection, type SettingsSchemaItem } from '../../components/settings/SettingsSection';
import { getSettingsItemSearchText, matchesSettingsSearch, useSettingsNavigation } from '../../settingsNavigation';

const getErrorMessage = (error: unknown) =>
    error instanceof Error
        ? error.message.replace(/^Error invoking remote method '[^']+': (?:Error: )?/, '')
        : 'Операция не удалась.';

function settingItem(
    id: string,
    setting: LocalAddonSetting,
    disabled: boolean,
    onChange: (value: LocalAddonSettingValue) => void,
): SettingsSchemaItem {
    const props = { title: setting.name, description: setting.description, disabled };

    switch (setting.type) {
        case 'button':
            return { id, type: 'toggle', props: { ...props, checked: setting.value, onChange } };
        case 'slider':
            return {
                id,
                type: 'slider',
                props: {
                    ...props,
                    min: setting.min,
                    max: setting.max,
                    step: setting.step,
                    value: setting.value,
                    onChange,
                },
            };
        case 'text':
            return {
                id,
                type: 'input',
                props: { ...props, type: 'text', value: setting.value, placeholder: '', maxLength: 1024, onChange },
            };

        case 'selector': {
            const options = setting.options.map(({ label }, index) => ({ label, value: String(index) }));

            return {
                id,
                type: 'select',
                props: {
                    ...props,
                    options,
                    value: String(setting.options.findIndex(({ value }) => value === setting.value)),
                    onChange: (index) => onChange(setting.options[Number(index)].value),
                },
            };
        }
    }
}

export function LocalAddonsSettings() {
    const { highlightedSettingId, searchQuery } = useSettingsNavigation();
    const bridge = window.musicDesktop?.pulsesync.addons;
    const manageLocal = bridge?.manageLocal;
    const [addons, setAddons] = useState<LocalAddon[]>();
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string>();
    const [expandedAddon, setExpandedAddon] = useState<string>();
    const [expandedSettings, setExpandedSettings] = useState<string>();
    const linkedAddonId = addons?.find(({ id }) => highlightedSettingId?.startsWith(`${id}-`))?.id;

    useEffect(() => {
        if (!linkedAddonId) {
            return;
        }

        const frame = window.requestAnimationFrame(() => {
            setExpandedAddon(linkedAddonId);
            setExpandedSettings(
                highlightedSettingId?.startsWith(`${linkedAddonId}-setting-`) ? linkedAddonId : undefined,
            );
        });

        return () => window.cancelAnimationFrame(frame);
    }, [highlightedSettingId, linkedAddonId]);

    useEffect(() => {
        if (!bridge || !manageLocal || busy) {
            return;
        }

        let active = true;
        let revision = 0;
        const refresh = async () => {
            const current = ++revision;

            try {
                const items = await manageLocal({ action: 'list' });

                if (active && current === revision) {
                    setAddons(items);
                }
            } catch (failure) {
                if (active && current === revision) {
                    setError(getErrorMessage(failure));
                }
            }
        };

        const unsubscribe = bridge.onWebHostChange(refresh);

        void refresh();

        return () => {
            active = false;
            unsubscribe();
        };
    }, [bridge, busy, manageLocal]);

    const run = async (request: LocalAddonRequest) => {
        if (!manageLocal || busy) {
            return;
        }

        setError(undefined);
        setBusy(true);

        try {
            setAddons(await manageLocal(request));
        } catch (failure) {
            setError(getErrorMessage(failure));
        } finally {
            setBusy(false);
        }
    };

    const setSetting = async (id: string, key: string, value: LocalAddonSettingValue) => {
        if (!manageLocal || busy) {
            return;
        }

        setError(undefined);
        setAddons((items) =>
            items?.map((addon) =>
                addon.id === id
                    ? {
                          ...addon,
                          settings: addon.settings?.map((setting) =>
                              setting.id === key ? ({ ...setting, value } as LocalAddonSetting) : setting,
                          ),
                      }
                    : addon,
            ),
        );

        try {
            await manageLocal({ action: 'set-setting', id, key, value });
        } catch (failure) {
            setError(getErrorMessage(failure));

            const items = await manageLocal({ action: 'list' }).catch(() => undefined);

            if (items) {
                setAddons(items);
            }
        }
    };

    const items: SettingsSchemaItem[] = [
        {
            id: 'install-pext',
            type: 'action',
            props: {
                title: 'Установить из файла',
                description: 'Выберите пакет .pext. После установки его можно включить в списке ниже.',
                disabled: !manageLocal || busy,
                onClick: () => void run({ action: 'install' }),
            },
        },
        { id: 'installed-modifications', type: 'heading', text: 'Установленные модификации' },
    ];

    if (!addons?.length) {
        items.push({
            id: 'modifications-status',
            type: 'note',
            text: addons
                ? 'Здесь появятся пакеты, установленные с компьютера.'
                : error || !manageLocal
                  ? 'Список недоступен.'
                  : 'Загружаем список…',
        });
    }

    for (const { id, name, type, version, enabled, quarantined, allowedUrls, settings } of addons ?? []) {
        const addonItems: SettingsSchemaItem[] = [];
        const expanded = expandedAddon === id;

        items.push({
            id,
            type: 'disclosure',
            expanded,
            items: addonItems,
            onToggle: (open) => {
                setExpandedAddon(open ? id : undefined);
                setExpandedSettings(undefined);
            },
            props: {
                title: name,
                description: [
                    type === 'theme' ? 'CSS-тема' : 'WebHost-аддон',
                    version,
                    allowedUrls?.length ? 'Доступ к сети' : '',
                    quarantined ? 'Остановлен после ошибки загрузки' : '',
                ]
                    .filter(Boolean)
                    .join(' · '),
                checked: enabled && !quarantined,
                disabled: busy,
                onChange: (next) =>
                    void run(quarantined ? { action: 'retry', id } : { action: 'set-enabled', id, enabled: next }),
            },
        });

        if (allowedUrls?.length) {
            const hosts = [...new Set(allowedUrls.map((value) => new URL(value).host))];

            addonItems.push({
                id: `${id}-network`,
                type: 'note',
                text: `При включении аддон сможет обращаться к ${hosts.join(', ')}.`,
            });
        }

        if (settings?.length) {
            const fields = settings.map((setting) =>
                settingItem(
                    `${id}-setting-${setting.id}`,
                    setting,
                    busy,
                    (value) => void setSetting(id, setting.id, value),
                ),
            );
            const settingsVisible =
                expandedSettings === id ||
                fields.some(
                    (field) =>
                        field.id === highlightedSettingId ||
                        (Boolean(searchQuery.trim()) &&
                            matchesSettingsSearch(searchQuery, getSettingsItemSearchText(field))),
                );

            addonItems.push({
                id: `${id}-settings`,
                type: 'action',
                props: {
                    title: settingsVisible ? 'Скрыть настройки' : 'Настроить',
                    disabled: busy,
                    onClick: () => setExpandedSettings(settingsVisible ? undefined : id),
                },
            });

            if (settingsVisible) {
                addonItems.push(...fields);
            }
        }

        addonItems.push({
            id: `${id}-remove`,
            type: 'action',
            props: { title: `Удалить «${name}»`, disabled: busy, onClick: () => void run({ action: 'remove', id }) },
        });
    }

    return (
        <SettingsSection
            title="Модификации"
            items={items}
            error={manageLocal ? error : 'Установка модификаций доступна в приложении Overtone.'}
        />
    );
}
