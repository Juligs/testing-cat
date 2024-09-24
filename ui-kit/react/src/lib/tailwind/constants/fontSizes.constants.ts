import { ThemeConfig } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';
import { sanitizeTextClasses, type GroupedTextClasses } from '../helpers';

export type TailwindCustomFonts = ThemeConfig['fontSize'];

const TAILWIND_TEXT_CLASSES = {
    '.text-label-sm': {
        fontSize: '14px',
        lineHeight: '160%',
        letterSpacing: '-1%',
        fontWeight: 'medium',
    },
    '.text-label-md': {
        fontSize: '15px',
        lineHeight: '160%',
        letterSpacing: '-1%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '16px',
        },
    },
    '.text-label-lg': {
        fontSize: '16px',
        lineHeight: '160%',
        letterSpacing: '-1%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '18px',
        },
    },
    '.text-body-sm': {
        fontSize: '14px',
        lineHeight: '160%',
        letterSpacing: '-1%',
    },
    '.text-body-md': {
        fontSize: '15px',
        lineHeight: '160%',
        letterSpacing: '-1%',
        '@screen md': {
            fontSize: '16px',
        },
    },
    '.text-body-lg': {
        fontSize: '16px',
        lineHeight: '160%',
        letterSpacing: '-1%',
        '@screen md': {
            fontSize: '18px',
        },
    },
    '.text-title-sm': {
        fontSize: '20px',
        lineHeight: '140%',
        letterSpacing: '-1%',
        fontWeight: 'medium',
    },
    '.text-title-md': {
        fontSize: '22px',
        lineHeight: '140%',
        letterSpacing: '-1%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '24px',
        },
    },
    '.text-title-lg': {
        fontSize: '26px',
        lineHeight: '140%',
        letterSpacing: '-1%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '28px',
        },
    },
    '.text-headline-sm': {
        fontSize: '30px',
        lineHeight: '140%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '36px',
        },
    },
    '.text-headline-md': {
        fontSize: '40px',
        lineHeight: '140%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '48px',
        },
    },
    '.text-headline-lg': {
        fontSize: '48px',
        lineHeight: '140%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '60px',
        },
    },
    '.text-display-sm': {
        fontSize: '56px',
        lineHeight: '120%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '72px',
        },
    },
    '.text-display-md': {
        fontSize: '64px',
        lineHeight: '120%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '96px',
        },
    },
    '.text-display-lg': {
        fontSize: '80px',
        lineHeight: '120%',
        fontWeight: 'medium',
        '@screen md': {
            fontSize: '128px',
        },
    },
};

export const addTailwindCustomTextClasses = plugin(({ addComponents }) => {
    addComponents(TAILWIND_TEXT_CLASSES);
});

// Remove the 'text-' prefix from the keys to match the TailwindCSS font size keys
export const CUSTOM_FONT_SIZES: TailwindCustomFonts = Object.entries(
    addTailwindCustomTextClasses,
).reduce((acc, [className, properties]) => {
    const key = className.startsWith('text-') ? className.replace('text-', '') : className;
    return { ...acc, [key]: properties };
}, {});

export const SANITIZED_CUSTOM_TEXT_CLASSES: GroupedTextClasses =
    sanitizeTextClasses(TAILWIND_TEXT_CLASSES);
