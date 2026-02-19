import { Config } from 'tailwindcss';
import {
    CUSTOM_FONT_SIZES,
    SPACING,
    BORDER_RADIUS,
    SCREENS,
    addTailwindCustomTextClasses,
    SCREEN_PADDINGS,
    THEMED_CUSTOM_COLORS,
    FONT_FAMILIES,
    themeVariants,
} from './constants';
import { addNotPlaceholderShown } from './plugins';
import {
    IOTALABS_COLOR_PALETTE,
    NETWORK_COLOR_PALETTE,
    FOUNDATION_COLOR_PALETTE,
} from '../constants';
import { transparencyColorPalette } from '../../storybook/utils/transparencyColorPalette';

export const BASE_CONFIG: Partial<Config> = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx}'],
    plugins: [addTailwindCustomTextClasses, addNotPlaceholderShown, themeVariants],
    theme: {
        screens: SCREENS,
        fontSize: {
            ...CUSTOM_FONT_SIZES,
        },
        spacing: SPACING,
        borderRadius: BORDER_RADIUS,
        colors: {
            ...IOTALABS_COLOR_PALETTE,
            ...NETWORK_COLOR_PALETTE,
            ...FOUNDATION_COLOR_PALETTE,
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
            fontFamily: FONT_FAMILIES,
        },
    },
};
