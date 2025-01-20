import { Navigation } from '@components';
import { ROUTES } from '@lib/constants';
import { Metadata } from 'next';
import { ContextProviders } from './providers';
import { getPageMetadata } from '@lib/utils';
import { FontLinks } from './components/fontLinks';
import './globals.css';

export const metadata: Metadata = getPageMetadata({});

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const navbarItems = ROUTES.filter((route) => !route.hideFromNavbar);
    return (
        <html lang="en">
            <body>
                <FontLinks />
                <ContextProviders>
                    <Navigation items={navbarItems} />
                    {children}
                </ContextProviders>
            </body>
        </html>
    );
}
