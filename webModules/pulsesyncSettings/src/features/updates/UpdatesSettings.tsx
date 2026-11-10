import { useState, type ComponentProps } from 'react';
import type { SettingsSchemaItem } from '../../components/settings/SettingsSection';
import { SchemaSettingsSection } from '../../schema/SchemaSettingsSection';
import { appUpdatesSchema } from '../../schema/sections/general';

const updateActions = [
    { id: 'check-client', title: 'Проверить обновления клиента', description: 'Проверяет выбранный канал обновлений.' },
    { id: 'check-components', title: 'Проверить компоненты', description: 'FFmpeg и установленный yt-dlp также проверяются при запуске.' },
    { id: 'clear-cache', title: 'Удалить скачанные обновления', description: 'Освобождает место, занятое установщиками Overtone.' },
] as const;

export function UpdatesSettings(props: Omit<ComponentProps<typeof SchemaSettingsSection>, 'schema' | 'extraItems'>) {
    const manage = window.musicDesktop?.pulsesync.updates?.manage;
    const [pending, setPending] = useState<(typeof updateActions)[number]['id']>();
    const [failed, setFailed] = useState(false);
    const items: SettingsSchemaItem[] = updateActions.map(({ id, title, description }) => ({
        id,
        type: 'action',
        props: {
            title,
            description: pending === id ? 'Подождите…' : description,
            disabled: !manage || pending !== undefined,
            onClick: async () => {
                if (!manage || pending) {
                    return;
                }

                setPending(id);
                setFailed(false);

                try {
                    await manage(id);
                } catch {
                    setFailed(true);
                } finally {
                    setPending(undefined);
                }
            },
        },
    }));

    if (failed) {
        items.push({ id: 'updates-error', type: 'note', text: 'Не удалось выполнить действие. Попробуйте ещё раз.' });
    }

    return <SchemaSettingsSection {...props} schema={appUpdatesSchema} extraItems={items} />;
}
