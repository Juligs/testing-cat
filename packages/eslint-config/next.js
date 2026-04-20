const { resolve } = require('node:path');
const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const nextPlugin = require('@next/eslint-plugin-next');
const importPlugin = require('eslint-plugin-import');
const onlyWarn = require('eslint-plugin-only-warn');
const turboPlugin = require('eslint-config-turbo/flat');
const prettierConfig = require('eslint-config-prettier');
const globals = require('globals');
const { toolingRules, appsRules } = require('./rules');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx,mjs,cjs}'],
        plugins: {
            '@typescript-eslint': tseslint,
            '@next/next': nextPlugin,
            import: importPlugin,
            'only-warn': onlyWarn,
        },
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.node,
                ...globals.browser,
                React: 'readonly',
                JSX: 'readonly',
            },
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,
            ...toolingRules,
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint,
            '@next/next': nextPlugin,
            import: importPlugin,
            'only-warn': onlyWarn,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                projectService: true,
            },
            globals: {
                ...globals.node,
                ...globals.browser,
                React: 'readonly',
                JSX: 'readonly',
            },
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project,
                },
            },
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,
            ...toolingRules,
        },
    },
    prettierConfig,
    ...(turboPlugin.default || turboPlugin),
    {
        files: ['apps/**/*', 'ui-kit/**/*'],
        rules: appsRules,
    },
    {
        ignores: [
            'node_modules/',
            'dist/',
            '.next/',
            '.vercel/',
            '.yalc/',
            'eslint.config.mjs',
            '.lintstagedrc.cjs',
            'tailwind.config.js',
        ],
    },
];
