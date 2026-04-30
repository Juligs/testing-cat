'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SectionObserver as IntersectionObserver } from '@repo/shared/components';
import { DropdownMenu, NavbarItemsContainer, MobileNavbarItem, Navbar } from '../navbar-items';
import { Logo } from '@repo/shared/components/layout';
import { usePathname } from 'next/navigation';
import type { NavbarGroupItem } from '../layout.interfaces';
import clsx from 'clsx';
import { lockBodyScroll, unlockBodyScroll } from '@lib/utils/getViewportScrollbarWidth';
import { useDelayedUnmount } from '@repo/shared/hooks';

interface NavigationProps {
    items: NavbarGroupItem[];
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
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const isInverted = !isMobileNavOpen && activeSection.theme === 'inverted';

    const navRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const currentPath = usePathname();

    const { isMounted: isDropdownMounted, isClosing: isDropdownClosing } = useDelayedUnmount(
        openDropdown !== null,
        200,
    );

    const handleClose = () => {
        setIsMobileNavOpen(false);
        setOpenDropdown(null);
    };

    const handleSectionChange = useCallback((sectionId: string | null, theme: string | null) => {
        setActiveSection({ id: sectionId, theme });
    }, []);

    const handleOpenDropdown = (index: number | null) => {
        setOpenDropdown((prev) => (prev === index ? null : index));
    };

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen((prev) => {
            if (prev) setOpenDropdown(null);
            return !prev;
        });
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1080) {
                setIsMobileNavOpen(false);
                setOpenDropdown(null);
            }
        };

        const updateBodyOverflow = () => {
            const mustLock = isMobileNavOpen || openDropdown !== null;
            if (mustLock) lockBodyScroll();
            else unlockBodyScroll();
        };

        window.addEventListener('resize', handleResize);

        updateBodyOverflow();

        return () => {
            window.removeEventListener('resize', handleResize);
            unlockBodyScroll();
        };
    }, [isMobileNavOpen, openDropdown]);

    const openedDropdownMenu = openDropdown !== null ? items[openDropdown] : undefined;

    const lastDropdownRef = useRef<typeof openedDropdownMenu>(undefined);
    if (openedDropdownMenu) lastDropdownRef.current = openedDropdownMenu;
    const visibleDropdownMenu = isDropdownMounted ? lastDropdownRef.current : undefined;

    const itemsWithActive: NavbarGroupItem[] = items.map((item) => ({
        ...item,
        active: currentPath === item.path || currentPath.startsWith(item.path + '/'),
    }));

    const needsScrollbarCompensation = openDropdown !== null;

    return (
        <>
            {(isDropdownMounted || isMobileNavOpen) && (
                <div id="overlay-close" className="fixed inset-0 z-10" onClick={handleClose} />
            )}

            <div
                ref={navRef}
                className={clsx(
                    'fixed inset-x-0 top-0 z-50 max-h-screen flex flex-col',
                    needsScrollbarCompensation ? 'sm:pr-[15px]' : '',
                    isMobileNavOpen &&
                        'before:bg-white/80 before:content-[""] before:absolute before:inset-0 before:pointer-events-none before:backdrop-blur-[32px]',
                )}
            >
                <div className="relative">
                    <Navbar inverted={isInverted}>
                        <NavbarItemsContainer
                            items={itemsWithActive}
                            logo={
                                <Link
                                    href="/"
                                    onClick={() => handleClose()}
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
                                if (isMobileNavOpen) handleOpenDropdown(null);
                            }}
                            openDropdown={openDropdown}
                            handleClick={handleOpenDropdown}
                            handleLinkClick={handleClose}
                            inverted={isInverted}
                        />
                    </Navbar>

                    {isDropdownMounted && (
                        <div
                            className="max-sm:hidden absolute inset-x-0 container top-full"
                            onClick={handleClose}
                        >
                            <div
                                className={clsx(
                                    'mt-2 rounded-3xl bg-white/80 backdrop-blur-[32px] shadow-lg overflow-y-auto max-h-[calc(100vh-96px)]',
                                    isDropdownClosing
                                        ? 'animate-fade-out-up'
                                        : 'animate-fade-in-down',
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                {visibleDropdownMenu && (
                                    <DropdownMenu
                                        item={visibleDropdownMenu}
                                        isMobileNavOpen={isMobileNavOpen}
                                        onClose={() => handleClose()}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
                {isMobileNavOpen && (
                    <div
                        className="fixed inset-x-0 top-[60px] sm:top-[96px] z-50"
                        ref={dropdownRef}
                    >
                        <div className="relative isolate w-full">
                            <div className="absolute inset-0 -z-10 bg-white/80 backdrop-blur-[32px]" />
                            <div className="max-h-[calc(100dvh-70px)] sm:max-h-[calc(100dvh-96px)] overflow-y-auto overscroll-contain touch-pan-y [-webkit-overflow-scrolling:touch]">
                                <div className="container mx-auto w-full flex flex-col">
                                    {items.map((item, index) => (
                                        <MobileNavbarItem
                                            key={index}
                                            item={item}
                                            isOpen={openDropdown === index}
                                            onItemClick={() => handleOpenDropdown(index)}
                                            onClose={handleClose}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <IntersectionObserver onSectionChange={handleSectionChange} />
            </div>
        </>
    );
}
