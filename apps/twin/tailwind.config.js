import { BASE_CONFIG } from 'react-ui-kit';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        '../../shared/components/**/*.{js,ts,jsx,tsx,mdx}',
        '../../shared/sections/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    presets: [BASE_CONFIG],
};
