import { BASE_CONFIG } from 'react-ui-kit';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        '../../shared/components/**/*.{js,ts,jsx,tsx,mdx}',
        '../../shared/sections/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    presets: [BASE_CONFIG],
    theme: {
        extend: {
            colors: {
                black: '#000',
                white: '#fff',
            },
            typography: (theme) => ({
                labs: {
                    css: {
                        '--tw-prose-body': 'var(--color-darkest)',
                        '--tw-prose-headings': 'var(--color-darkest)',
                        '--tw-prose-links': 'var(--color-darkest)',
                        '--tw-prose-counters': 'var(--color-medium)',
                        '--tw-prose-bullets': 'var(--color-medium)',
                        p: {
                            marginBottom: theme('spacing.2'),
                            marginTop: theme('spacing.2'),
                        },
                        ul: {
                            marginBottom: theme('spacing.2'),
                            marginTop: theme('spacing.2'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
