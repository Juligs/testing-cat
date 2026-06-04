import { FontLinks } from '@repo/shared/components/font-links';
import { Metadata } from 'next';
import { Theme } from 'react-ui-kit';
import { ContextProviders } from './providers';
import './globals.css';
import { getPageMetadata } from '@lib/utils';
import { TWIN_METADATA } from '@lib/constants';
import { CookieDisclaimer } from '@components';

export const metadata: Metadata = getPageMetadata(TWIN_METADATA);
const APP_THEME = Theme.Network;

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={APP_THEME}>
            <FontLinks />
            <body>
                <ContextProviders initialTheme={APP_THEME}>
                    {children}
                    <CookieDisclaimer />
                </ContextProviders>
            </body>
        </html>
    );
}
