import { Navigation, Footer } from '@components';
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
    return (
        <html lang="en">
            <body>
                <FontLinks />
                <ContextProviders>
                    <Navigation items={ROUTES} />
                    {children}
                    <Footer />
                </ContextProviders>
            </body>
        </html>
    );
}
