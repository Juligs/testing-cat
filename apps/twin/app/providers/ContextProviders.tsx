'use client';

import { CookieManagerProvider } from '@boxfish-studio/react-cookie-manager';
import { ThemeProvider } from 'react-ui-kit/client';
import type { Theme } from 'react-ui-kit';

interface ContextProvidersProps extends React.PropsWithChildren {
    initialTheme: Theme;
}

export function ContextProviders({
    children,
    initialTheme,
}: ContextProvidersProps): React.JSX.Element {
    return (
        <ThemeProvider initialTheme={initialTheme}>
            <CookieManagerProvider>{children}</CookieManagerProvider>
        </ThemeProvider>
    );
}
