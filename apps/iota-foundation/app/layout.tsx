import { FontLinks } from '@repo/shared/components/font-links';
import { Metadata } from 'next';
import { ContextProviders } from './providers';
import { getPageMetadata } from '@lib/utils';
import './globals.css';
import { Navigation } from '@repo/shared/components';
import { ROUTES } from '@lib/constants';
import { Footer, CookieDisclaimer } from '@components';
import { Theme } from 'react-ui-kit';

export const metadata: Metadata = getPageMetadata({});
const APP_THEME = Theme.Foundation;

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={APP_THEME}>
            <FontLinks />
            <body>
                <ContextProviders initialTheme={APP_THEME}>
                    <Navigation items={ROUTES} />
                    {children}
                    <Footer />
                    <CookieDisclaimer />
                </ContextProviders>
            </body>
        </html>
    );
}
