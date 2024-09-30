'use client';

import { useState } from 'react';
import { Footer, Navigation, SectionObserver as IntersectionObserver } from '@components';
import { ROUTES } from '@lib/constants';
import 'react-ui-kit/style.css';
import './globals.css';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const navbarItems = ROUTES.filter((route) => !route.hideFromNavbar);

    return (
        <html lang="en" className="labs">
            <body>
                <Navigation items={navbarItems} activeSection={activeSection} />
                <IntersectionObserver onSectionChange={setActiveSection} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
