import { useState, type ReactNode } from 'react';
import styles from './SettingInput.module.scss';

type SettingInputProps = {
    description: string;
    disabled?: boolean;
    max?: number;
    maxLength?: number;
    min?: number;
    onChange: (value: string) => void;
    placeholder: string;
    title: string;
    titleAction?: ReactNode;
    type?: 'number' | 'text';
    value: string;
};

export function SettingInput({
    description,
    disabled = false,
    max,
    maxLength,
    min,
    onChange,
    placeholder,
    title,
    titleAction,
    type = 'number',
    value,
}: SettingInputProps) {
    const [draft, setDraft] = useState<string>();

    return (
        <div className={styles.row} data-disabled={disabled}>
            <span className={styles.text}>
                <span className={styles.titleLine}>
                    <span className={styles.title}>{title}</span>
                    {titleAction}
                </span>
                <span className={styles.description}>{description}</span>
            </span>
            <input
                className={styles.input}
                type={type}
                aria-label={title}
                disabled={disabled}
                inputMode={type === 'number' ? 'numeric' : undefined}
                min={min}
                max={max}
                step={type === 'number' ? 1 : undefined}
                maxLength={maxLength}
                value={type === 'text' ? (draft ?? value) : value}
                placeholder={placeholder}
                onChange={(event) => {
                    if (type === 'text') {
                        setDraft(event.currentTarget.value);
                    } else {
                        onChange(event.currentTarget.value);
                    }
                }}
                onBlur={
                    type === 'text'
                        ? () => {
                              if (draft !== undefined && draft !== value) {
                                  onChange(draft);
                              }

                              setDraft(undefined);
                          }
                        : undefined
                }
                onKeyDown={
                    type === 'text'
                        ? (event) => {
                              if (event.key === 'Enter') {
                                  event.currentTarget.blur();
                              }
                          }
                        : undefined
                }
            />
        </div>
    );
}
