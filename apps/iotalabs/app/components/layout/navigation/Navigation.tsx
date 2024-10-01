'use client';

import { useState } from 'react';
import { Navbar, NavbarItem, NavbarItems } from 'react-ui-kit';
import { Logo } from '../logo';
import { Route } from '@lib/interfaces';
import { usePathname } from 'next/navigation';
import { SectionObserver as IntersectionObserver } from '@components';
import Link from 'next/link';

interface NavigationProps {
    items: Route[];
}

export function Navigation({ items }: NavigationProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const currentPath = usePathname();
    const isInverted = activeSection?.includes('inverted');

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar inverted={isInverted}>
                    <NavbarItems
                        isMobileNavOpen={isMobileNavOpen}
                        logo={
                            <Link href="/">
                                <Logo
                                    color={isInverted ? 'text-darkest-inverted' : 'text-darkest'}
                                />
                            </Link>
                        }
                        onMobileNavToggle={() => setIsMobileNavOpen((isOpen) => !isOpen)}
                    >
                        {items.map((item, index) => {
                            const isActive = item.path === currentPath;
                            return (
                                <NavbarItem key={index} active={isActive} inverted={isInverted}>
                                    <Link href={item.path}>{item.title}</Link>
                                </NavbarItem>
                            );
                        })}
                    </NavbarItems>
                </Navbar>
            </div>
            <IntersectionObserver onSectionChange={setActiveSection} />
        </>
    );
}
