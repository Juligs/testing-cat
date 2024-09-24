import { Config } from 'tailwindcss';
import {
    CUSTOM_FONT_SIZES,
    SPACING,
    BORDER_RADIUS,
    addTailwindCustomTextClasses,
} from './constants';
import { IOTALABS_COLOR_PALETTE, transparencyColorPalette } from '../constants';

export const BASE_CONFIG: Partial<Config> = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx}'],
    darkMode: 'class',
    plugins: [addTailwindCustomTextClasses],
    theme: {
        fontSize: {
            ...CUSTOM_FONT_SIZES,
        },
        spacing: SPACING,
        borderRadius: BORDER_RADIUS,
        colors: {
            ...IOTALABS_COLOR_PALETTE,
            ...transparencyColorPalette,
        },
        extend: {
            fontFamily: {
                'alliance-no2': ['AllianceNo2', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
};
