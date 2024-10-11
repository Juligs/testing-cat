import { Footer, Navigation, CookieDisclaimer } from '@components';
import { ROUTES } from '@lib/constants';
import { getPageMetadata } from '@lib/utils';
import { Metadata } from 'next';
import { ContextProviders } from './providers';
import './globals.css';

export const metadata: Metadata = getPageMetadata({});

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const navbarItems = ROUTES.filter((route) => !route.hideFromNavbar);

    return (
        <html lang="en" className="labs">
            <body>
                <ContextProviders>
                    <Navigation items={navbarItems} />
                    {children}
                    <Footer />
                    <CookieDisclaimer />
                </ContextProviders>
            </body>
        </html>
    );
}
