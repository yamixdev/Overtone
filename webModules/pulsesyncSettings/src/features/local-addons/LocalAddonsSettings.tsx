import { useEffect, useState } from 'react';
import type { LocalAddon, LocalAddonRequest } from '../../../../shared/musicDesktop';
import { SettingsSection, type SettingsSchemaItem } from '../../components/settings/SettingsSection';

const getErrorMessage = (error: unknown) =>
    error instanceof Error
        ? error.message.replace(/^Error invoking remote method '[^']+': (?:Error: )?/, '')
        : 'Операция не удалась.';

export function LocalAddonsSettings() {
    const bridge = window.musicDesktop?.pulsesync.addons;
    const manageLocal = bridge?.manageLocal;
    const [addons, setAddons] = useState<LocalAddon[]>();
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string>();

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

    for (const { id, name, type, version, enabled, quarantined } of addons ?? []) {
        items.push({
            id,
            type: 'toggle',
            props: {
                title: name,
                description: [
                    type === 'theme' ? 'CSS-тема' : 'WebHost-аддон',
                    version,
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
        items.push({
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
