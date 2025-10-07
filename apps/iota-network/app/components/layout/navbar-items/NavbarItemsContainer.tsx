import React from 'react';
import { Close, MenuColapsed } from '@repo/icons';

import type { NavbarGroupItem } from '../layout.interfaces';
import { NavbarItem } from './NavbarItem';

interface NavbarItemsProps {
    isMobileNavOpen: boolean;
    onMobileNavToggle: () => void;
    logo: React.ReactNode;
    items: NavbarGroupItem[];
    openDropdown: number | null;
    handleClick: (index: number | null) => void;
    handleLinkClick: (path: string | undefined) => void;
    inverted: boolean;
}

export function NavbarItemsContainer({
    logo,
    isMobileNavOpen,
    onMobileNavToggle,
    items,
    openDropdown,
    handleClick,
    handleLinkClick,
    inverted,
}: React.PropsWithChildren<NavbarItemsProps>) {
    return (
        <>
            <div className="flex w-full flex-row items-center justify-between z-[21]">
                {logo}

                <ul className="hidden sm:flex flex-row">
                    {items.map((item, index) => {
                        const hasChildren = item.menuRows.length > 0;
                        const href = item.path ?? '#';

                        return (
                            <NavbarItem
                                key={index}
                                active={openDropdown === index || !!item.active}
                                inverted={inverted}
                                onClick={() => {
                                    if (hasChildren) {
                                        handleClick(index);
                                    } else {
                                        handleLinkClick(href);
                                    }
                                }}
                                hasChildren={hasChildren}
                                path={href}
                            >
                                {item.title}
                            </NavbarItem>
                        );
                    })}
                </ul>

                <button
                    type="button"
                    className="block sm:hidden w-6 h-6 [&_svg]:w-full [&_svg]:h-full"
                    onClick={onMobileNavToggle}
                    aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMobileNavOpen ? <Close /> : <MenuColapsed />}
                </button>
            </div>
        </>
    );
}
