'use client';

import { useState, useCallback, useEffect } from 'react';
import { Navbar } from 'react-ui-kit';
import { Logo } from '../logo';
import { Route } from '@lib/interfaces';
import Link from 'next/link';
import { SectionObserver as IntersectionObserver } from '@repo/shared/components';
import clsx from 'clsx';
import { DropdownMenu, MobileNavbarItem, NavbarItems } from '@components/navbar-items';

interface NavigationProps {
    items: Route[];
}

interface SectionInfo {
    id: string | null;
    theme: string | null;
}

export function Navigation({ items }: NavigationProps) {
    const [activeSection, setActiveSection] = useState<SectionInfo>({ id: null, theme: null });
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const isInverted =
        !(isMobileNavOpen || openDropdown !== null) && activeSection.theme === 'inverted';

    const handleLinkClick = (path: string | undefined) => {
        if (path) {
            setIsMobileNavOpen(false);
            setOpenDropdown(null);
        }
    };

    const handleSectionChange = useCallback((sectionId: string | null, theme: string | null) => {
        setActiveSection({ id: sectionId, theme: theme });
    }, []);

    const handleClick = (index: number | null) => {
        setOpenDropdown((prev) => {
            const newState = prev === index ? null : index;

            document.body.classList.toggle('overflow-hidden', newState !== null);

            return newState;
        });
    };

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen((prev) => {
            if (prev) {
                setOpenDropdown(null);
                document.body.classList.remove('overflow-hidden');
            }
            return !prev;
        });
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 712) {
                setIsMobileNavOpen(false);
                setOpenDropdown(null);
            }
        };

        const updateBodyOverflow = () => {
            if (isMobileNavOpen || openDropdown !== null) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }
        };

        window.addEventListener('resize', handleResize);

        updateBodyOverflow();

        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMobileNavOpen, openDropdown]);

    const openedDropdownMenu = items.find((_, index) => openDropdown === index);

    return (
        <>
            <div
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 backdrop-blur max-h-screen flex flex-col',
                    (isMobileNavOpen || openedDropdownMenu) && 'bg-transparency-white-80',
                )}
            >
                <div
                    className={clsx(
                        'max-xs:[&_>nav]:max-h-screen [&_>nav]:backdrop-blur-none',
                        isMobileNavOpen,
                    )}
                >
                    <Navbar inverted={isInverted}>
                        <NavbarItems
                            logo={
                                <Link
                                    href="/"
                                    onClick={() => handleLinkClick('/')}
                                    aria-label="Link to Home"
                                >
                                    <Logo
                                        color={
                                            isInverted ? 'text-darkest-inverted' : 'text-darkest'
                                        }
                                    />
                                </Link>
                            }
                            isMobileNavOpen={isMobileNavOpen}
                            onMobileNavToggle={() => {
                                handleMobileNavToggle();
                                if (isMobileNavOpen) {
                                    handleClick(null);
                                }
                            }}
                            items={items}
                            openDropdown={openDropdown}
                            handleClick={handleClick}
                            handleLinkClick={handleLinkClick}
                        />
                    </Navbar>

                    {openedDropdownMenu && (
                        <div className="max-xs:hidden">
                            <DropdownMenu
                                item={openedDropdownMenu}
                                isMobileNavOpen={isMobileNavOpen}
                                handleLinkClick={handleLinkClick}
                            />
                        </div>
                    )}
                </div>

                {isMobileNavOpen && (
                    <div className="container w-full flex flex-col overflow-y-auto max-h-[calc(100vh-60px)]">
                        {items.map((item, index) => (
                            <MobileNavbarItem
                                item={item}
                                key={item.path}
                                isOpen={openDropdown === index}
                                onClick={() => handleClick(index)}
                                handleLinkClick={handleLinkClick}
                            />
                        ))}
                    </div>
                )}
                <IntersectionObserver onSectionChange={handleSectionChange} />
            </div>
        </>
    );
}
