import { Config } from 'tailwindcss';
import {
    CUSTOM_FONT_SIZES,
    SPACING,
    BORDER_RADIUS,
    SCREENS,
    addTailwindCustomTextClasses,
    SCREEN_PADDINGS,
    THEMED_CUSTOM_COLORS,
} from './constants';
import { IOTALABS_COLOR_PALETTE, transparencyColorPalette } from '../constants';

export const BASE_CONFIG: Partial<Config> = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx}'],
    plugins: [addTailwindCustomTextClasses],
    theme: {
        screens: SCREENS,
        fontSize: {
            ...CUSTOM_FONT_SIZES,
        },
        spacing: SPACING,
        borderRadius: BORDER_RADIUS,
        colors: {
            ...IOTALABS_COLOR_PALETTE,
            ...transparencyColorPalette,
            ...THEMED_CUSTOM_COLORS,
            transparent: 'transparent',
        },
        container: {
            screens: SCREENS,
            center: true,
            padding: SCREEN_PADDINGS,
        },
        extend: {
            fontFamily: {
                'alliance-no2': ['AllianceNo2', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
};
