import { Footer, CookieDisclaimer } from '@components';
import { Navigation } from './components/layout/navigation';
import { Metadata } from 'next';
import { ContextProviders } from './providers';
import { getPageMetadata } from '@lib/utils';
import { FontLinks } from './components/font-links';
import './globals.css';
import { items } from './lib/constants/navbarRoutes.constants';

export const metadata: Metadata = getPageMetadata({});

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <FontLinks />
                <ContextProviders>
                    <Navigation items={items} />
                    {children}
                    <Footer />
                    <CookieDisclaimer />
                </ContextProviders>
            </body>
        </html>
    );
}
