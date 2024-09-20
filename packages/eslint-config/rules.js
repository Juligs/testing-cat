const extendsConfig = [
    'eslint:recommended',
    'prettier',
    'turbo',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
];

const reactExtends = [...extendsConfig, 'plugin:react/recommended'];

const toolingRules = {
    'no-case-declarations': 'off',
    'no-implicit-coercion': [2, { number: true, string: true, boolean: false }],
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/ban-types': [
        'error',
        {
            types: {
                Buffer: 'Buffer usage increases bundle size and is not consistently implemented on web.',
            },
            extendDefaults: true,
        },
    ],
    'no-restricted-globals': [
        'error',
        {
            name: 'Buffer',
            message:
                'Buffer usage increases bundle size and is not consistently implemented on web.',
        },
    ],
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            vars: 'all',
            args: 'none',
            ignoreRestSiblings: true,
        },
    ],
};

const appsOverrides = {
    files: ['apps/**/*', 'ui-kit/**/*'],
    rules: {
        'import/no-duplicates': ['error'],
        'import/no-anonymous-default-export': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                disallowTypeAnnotations: true,
                fixStyle: 'inline-type-imports',
            },
        ],
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/parameter-properties': 'error',
        'react/jsx-key': ['error', {}],

        'react/boolean-prop-naming': 'off',
        'react/jsx-boolean-value': ['error', 'never'],

        // Always use function declarations for components
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'function-declaration',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/prefer-stateless-function': 'error',
        'react/jsx-pascal-case': ['error', { allowAllCaps: true, allowNamespace: true }],

        // Always self-close when applicable
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/void-dom-elements-no-children': 'error',

        // Use alternatives instead of danger
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',

        // Accessibility requirements
        'react/button-has-type': 'error',
        'react/no-invalid-html-attribute': 'error',

        // Security requirements
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': 'error',

        // Enforce consistent JSX spacing and syntax
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-tag-spacing': 'off',

        // Avoid interpolation as much as possible
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

        // Always use shorthand fragments when applicable
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
        'react/jsx-handler-names': [
            'error',
            {
                eventHandlerPropPrefix: 'on',
            },
        ],

        // Avoid bad or problematic patterns
        'react/jsx-uses-vars': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-children-prop': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-namespace': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-class-component-methods': 'error',
        'react/no-will-update-set-state': 'error',
        'react/require-optimization': 'off',
        'react/style-prop-object': 'error',
        'react/no-unstable-nested-components': 'error',
        'arrow-body-style': ['error', 'as-needed'],
    },
};

const testOverrides = {
    files: ['*.test.*', '*.spec.*'],
    rules: {
        // Tests can violate extension rules:
        '@typescript-eslint/consistent-type-imports': ['off'],
        'import/consistent-type-specifier-style': ['off'],
        // Reset to defaults to allow `Buffer` usage in tests (given they run in Node and do not impact bundle):
        'no-restricted-globals': ['off'],
        '@typescript-eslint/ban-types': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    },
};

module.exports = {
    extendsConfig,
    reactExtends,
    toolingRules,
    appsOverrides,
    testOverrides,
};
