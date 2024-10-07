import { Footer, Navigation } from '@components';
import { ROUTES } from '@lib/constants';
import './globals.css';
import { getPageMetadata } from '@lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({});

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const navbarItems = ROUTES.filter((route) => !route.hideFromNavbar);

    return (
        <html lang="en" className="labs">
            <body>
                <Navigation items={navbarItems} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
