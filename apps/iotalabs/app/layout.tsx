import { LAYOUT_METADATA } from './lib/constants';
import { Footer, Navigation } from '@components';
import { ROUTES } from '@lib/constants';
import './globals.css';

export const metadata = LAYOUT_METADATA;

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
