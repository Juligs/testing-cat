const { resolve } = require('node:path');
const { toolingRules, appsOverrides, testOverrides, reactExtends } = require('./rules');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: reactExtends,
    plugins: ['only-warn', '@typescript-eslint/eslint-plugin'],
    globals: {
        React: true,
        JSX: true,
    },
    env: {
        node: true,
        es6: true,
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
    rules: toolingRules,
    ignorePatterns: ['node_modules/', 'dist/'],
    overrides: [
        {
            files: ['*.js?(x)', '*.ts?(x)'],
        },
        appsOverrides,
        testOverrides,
    ],
};
