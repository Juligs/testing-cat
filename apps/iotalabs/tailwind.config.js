import { BASE_CONFIG } from 'react-ui-kit';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    presets: [BASE_CONFIG],
    theme: {
        extend: {
            colors: {
                black: '#000',
                white: '#fff',
            },
        },
    },
    plugins: [],
};
