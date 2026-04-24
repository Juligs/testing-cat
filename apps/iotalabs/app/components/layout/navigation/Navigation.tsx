'use client';

import { useState, useCallback } from 'react';
import { Navbar, NavbarItem, NavbarItems } from 'react-ui-kit';
import { Logo } from '../logo';
import { Route } from '@lib/interfaces';
import { usePathname } from 'next/navigation';
import { SectionObserver as IntersectionObserver } from '@repo/shared/components';
import Link from 'next/link';

interface NavigationProps {
    items: Route[];
}

interface SectionInfo {
    id: string | null;
    theme: string | null;
}

export function Navigation({ items }: NavigationProps) {
    const [activeSection, setActiveSection] = useState<SectionInfo>({
        id: 'hero',
        theme: 'inverted',
    });
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const currentPath = usePathname();

    const isInverted = activeSection.theme === 'inverted';

    const handleLinkClick = (path: string | undefined) => {
        if (path) {
            setIsMobileNavOpen(false);
        }
    };

    const handleSectionChange = useCallback((sectionId: string | null, theme: string | null) => {
        setActiveSection({ id: sectionId, theme: theme });
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar inverted={isInverted}>
                    <NavbarItems
                        isMobileNavOpen={isMobileNavOpen}
                        logo={
                            <Link href="/" onClick={() => handleLinkClick('/')}>
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
                                <Link
                                    key={index}
                                    href={item.path}
                                    target={item.isExternal ? '_blank' : undefined}
                                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                                    onClick={() => handleLinkClick(item.path)}
                                >
                                    <NavbarItem active={isActive} inverted={isInverted}>
                                        {item.title}
                                    </NavbarItem>
                                </Link>
                            );
                        })}
                    </NavbarItems>
                </Navbar>
            </div>
            <IntersectionObserver onSectionChange={handleSectionChange} />
        </>
    );
}
