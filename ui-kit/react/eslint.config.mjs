import baseConfig from '@repo/eslint-config/index.js';
import storybook from 'eslint-plugin-storybook';

export default [
    { ignores: ['storybook-static/', '.turbo/', '.vercel/', 'dist/'] },
    ...baseConfig,
    ...storybook.configs['flat/recommended'],
];
