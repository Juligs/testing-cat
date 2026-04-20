const { resolve } = require('node:path');
const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const onlyWarn = require('eslint-plugin-only-warn');
const turboPlugin = require('eslint-config-turbo/flat');
const globals = require('globals');
const prettierConfig = require('eslint-config-prettier');
const { toolingRules, appsRules, testRules } = require('./rules');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    {
        files: ['**/*.{js,jsx,mjs,cjs}'],
        plugins: {
            '@typescript-eslint': tseslint,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
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
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...toolingRules,
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
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
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
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
        files: ['*.test.*', '*.spec.*'],
        rules: testRules,
    },
    {
        ignores: ['node_modules/', 'dist/', '.yalc/', 'eslint.config.mjs', '.lintstagedrc.cjs'],
    },
];
