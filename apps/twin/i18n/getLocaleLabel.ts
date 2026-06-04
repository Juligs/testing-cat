const ENGLISH_LOCALE = 'en';

function normalizeLocaleCode(locale: string) {
    return locale.replace(/_/g, '-');
}

export function getLocaleLabel(
    targetLocale: string,
    labels: Record<string, string> | undefined,
): string {
    if (labels?.[targetLocale]) {
        return labels[targetLocale];
    }

    const normalizedLocale = normalizeLocaleCode(targetLocale);

    try {
        const displayNames = new Intl.DisplayNames([ENGLISH_LOCALE], {
            type: 'language',
        });
        return displayNames.of(normalizedLocale) ?? targetLocale;
    } catch {
        return targetLocale;
    }
}
