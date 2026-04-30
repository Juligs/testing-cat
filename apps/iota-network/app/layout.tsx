import { Footer, CookieDisclaimer } from '@components';
import { Navigation } from './components/layout/navigation';
import { Metadata } from 'next';
import { ContextProviders } from './providers';
import { getPageMetadata } from '@lib/utils';
import { FontLinks } from '@repo/shared/components/font-links';
import { Theme } from 'react-ui-kit';
import './globals.css';
import { items } from './lib/constants/navbarRoutes.constants';
import { ScrollRevealProvider } from '@repo/shared/components';

export const metadata: Metadata = getPageMetadata({});
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
                    <Navigation items={items} />
                    {children}
                    <Footer />
                    <CookieDisclaimer />
                </ContextProviders>
                <ScrollRevealProvider />
            </body>
        </html>
    );
}
