export const FALLBACK_FONTS = [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
];

export const FONT_FAMILIES: Record<string, string[]> = {
    inter: ['Inter Variable', ...FALLBACK_FONTS],
    'alliance-no2': ['AllianceNo2', ...FALLBACK_FONTS],
    'red-hat-display': ['Red Hat Display Variable', ...FALLBACK_FONTS],
} as const;
