import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export type AppLocale = string;

const MESSAGES_DIRECTORY = join(process.cwd(), 'messages');

export const defaultLocale: AppLocale = 'en';

export function getLocales(): AppLocale[] {
    const locales = readdirSync(MESSAGES_DIRECTORY)
        .filter((file) => file.endsWith('.json'))
        .map((file) => file.replace(/\.json$/, ''))
        .sort((left, right) => {
            if (left === defaultLocale) return -1;
            if (right === defaultLocale) return 1;
            return left.localeCompare(right);
        });

    return locales.includes(defaultLocale) ? locales : [defaultLocale, ...locales];
}

export function isValidLocale(value: string): value is AppLocale {
    return getLocales().includes(value);
}
