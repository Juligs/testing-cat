import { Metadata } from 'next';
import { ContextProviders } from './providers';
import { getPageMetadata } from '@lib/utils';
import { FontLinks } from './components/font-links';
import './globals.css';
import { Navigation } from '@repo/shared/components';
import { ROUTES } from '@lib/constants';

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
                </ContextProviders>
            </body>
        </html>
    );
}
