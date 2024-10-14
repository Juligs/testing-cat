import type { ThemeConfig } from 'tailwindcss/types/config';

const SPACING_MULTIPLIER_PIXELS = 4;

const pxToSpacingScale = (spacingPx: number, multiplier: number = SPACING_MULTIPLIER_PIXELS) => ({
    [spacingPx / multiplier]: `${spacingPx}px`,
});

const SPACING_VALUES_IN_PIXELS: number[] = [
    0, 2, 4, 6, 8, 10, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 120, 240, 320,
];

export const SPACING: ThemeConfig['spacing'] = SPACING_VALUES_IN_PIXELS.reduce((acc, spacingPx) => {
    return { ...acc, ...pxToSpacingScale(spacingPx) };
}, {});

export const BORDER_RADIUS = {
    none: '0px',
    sm: '2px',
    DEFAULT: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    '4xl': '32px',
    full: '400px',
} as const;
