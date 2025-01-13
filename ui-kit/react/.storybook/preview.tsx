import { Decorator, ReactRenderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/lib/styles/storybook.css';
import '../src/lib/styles/index.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
        },
    },
};

export const tags = ['autodocs'];

export const decorators: Decorator[] = [
    withThemeByClassName<ReactRenderer>({
        themes: {
            network: 'network',
            labs: 'labs',
            foundation: 'foundation',
        },
        defaultTheme: 'labs',
    }),
];
