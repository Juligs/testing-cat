export const localeCookieName = 'twin-locale';

function parseAcceptLanguage(header: string): string[] {
    return header
        .split(',')
        .map((part) => {
            const [lang, q] = part.trim().split(';q=');
            return { lang: lang.trim(), q: q ? parseFloat(q) : 1 };
        })
        .sort((a, b) => b.q - a.q)
        .map(({ lang }) => lang);
}

export function resolveLocale(
    acceptLanguage: string | null | undefined,
    localeCookie: string | null | undefined,
    availableLocales: string[],
    defaultLocale: string,
): string {
    if (localeCookie && availableLocales.includes(localeCookie)) {
        return localeCookie;
    }

    if (acceptLanguage) {
        for (const lang of parseAcceptLanguage(acceptLanguage)) {
            if (availableLocales.includes(lang)) {
                return lang;
            }
            const prefix = lang.split('-')[0].split('_')[0];
            const match = availableLocales.find((l) => l === prefix);

            if (match) {
                return match;
            }
        }
    }

    return defaultLocale;
}
