'use client';

import { CookieManagerProvider } from '@boxfish-studio/react-cookie-manager';
import { ThemeProvider } from 'react-ui-kit/client';
import { Theme } from 'react-ui-kit';

export function ContextProviders({ children }: React.PropsWithChildren): React.JSX.Element {
    return (
        <ThemeProvider initialTheme={Theme.Foundation}>
            <CookieManagerProvider>{children}</CookieManagerProvider>
        </ThemeProvider>
    );
}
