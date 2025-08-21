'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Navbar } from 'react-ui-kit';
import { SectionObserver as IntersectionObserver } from '../../../components';
import { Route } from '../../../interfaces';
import { DropdownMenu, MobileNavbarItem, NavbarItemsContainer } from '../../navbar-items';
import { Logo } from '../logo';
import { usePathname } from 'next/navigation';

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

    const navRef = useRef<HTMLDivElement>(null);
    const currentPath = usePathname();

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
        setOpenDropdown((prev) => (prev === index ? null : index));
    };

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen((prev) => {
            if (prev) {
                setOpenDropdown(null);
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

        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsMobileNavOpen(false);
                setOpenDropdown(null);
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);
        updateBodyOverflow();

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMobileNavOpen, openDropdown]);

    const openedDropdownMenu = items.find((_, index) => openDropdown === index);

    const itemsWithActive = items.map((item) => ({
        ...item,
        active: currentPath === item.path || currentPath.startsWith(item.path + '/'),
    }));

    return (
        <>
            <div
                ref={navRef}
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
                        <NavbarItemsContainer
                            items={itemsWithActive}
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
                            openDropdown={openDropdown}
                            handleClick={handleClick}
                            handleLinkClick={handleLinkClick}
                            hasChildren
                            inverted={isInverted}
                        />
                    </Navbar>

                    {openedDropdownMenu && (
                        <div className="max-xs:hidden overflow-y-auto max-h-[calc(100vh-96px)]">
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
                                key={index}
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
