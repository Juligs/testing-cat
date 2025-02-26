'use client';

import { Down } from '@repo/icons';
import clsx from 'clsx';
import Link from 'next/link';
import { ImageCard, ImageCardSize } from 'react-ui-kit';
import { Route } from '../../interfaces';

interface MobileNavbarItemProps {
    item: Route;
    isOpen?: boolean;
    handleLinkClick?: (path: string | undefined) => void;
    onClick?: () => void;
}

export function MobileNavbarItem({
    item,
    isOpen,
    onClick,
    handleLinkClick,
}: MobileNavbarItemProps) {
    const hasChildren =
        item.navbarSections && item.navbarSections.some((section) => section.children?.length > 0);

    return (
        <div className="flex flex-col">
            {hasChildren ? (
                <div
                    className="flex flex-row w-full justify-between items-center py-4 cursor-pointer group text-darkest hover:text-network-primary-40"
                    onClick={onClick}
                >
                    <span className="block text-label-lg cursor-pointer">{item.title}</span>
                    <Down
                        className={clsx(isOpen && 'rotate-180', 'transition-transform', 'w-6 h-6')}
                    />
                </div>
            ) : (
                <Link
                    href={item.path}
                    onClick={() => handleLinkClick?.(item.path)}
                    className="flex flex-row w-full justify-between items-center py-4 cursor-pointer group text-darkest hover:text-network-primary-40"
                >
                    <span className="block text-label-lg cursor-pointer">{item.title}</span>
                </Link>
            )}

            {hasChildren && (
                <div className={clsx(isOpen ? 'max-h-full' : 'max-h-0 overflow-hidden')}>
                    {item.navbarSections?.map((section) => (
                        <div className="flex flex-col items-start" key={section.title}>
                            {(section.icon || section.title) && (
                                <div className="flex gap-3 items-center py-6 text-network-primary-0">
                                    {section.icon && (
                                        <div className="[&_svg]:h-6 [&_svg]:w-6">
                                            {section.icon}
                                        </div>
                                    )}
                                    {section.title && (
                                        <p className="text-label-lg">{section.title}</p>
                                    )}
                                </div>
                            )}
                            {section.children.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex flex-col">
                                    <NavItem item={item} handleLinkClick={handleLinkClick} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

interface DropdownMenuProps {
    item: Route;
    isMobileNavOpen: boolean;
    handleLinkClick: (path: string | undefined) => void;
}

export function DropdownMenu({ item, isMobileNavOpen, handleLinkClick }: DropdownMenuProps) {
    function getSectionClasses(sectionIndex: number) {
        const GRID_COLUMNS = {
            default: 1,
            sm: 3,
            lg: 4,
        };
        const baseClasses = 'flex flex-col items-start';
        const isLastSection = sectionIndex === (item.navbarSections ?? [])?.length - 1;

        if (isLastSection && sectionIndex < GRID_COLUMNS.lg - 1) {
            // we cant use string concatenation here because of tailwindcss JIT
            const columnClasses = [
                'col-start-1',
                `${sectionIndex === GRID_COLUMNS.sm ? 'sm:col-start-1' : 'sm:col-start-3'}`,
                `lg:col-start-4`,
            ];
            return `${baseClasses} ${columnClasses.join(' ')}`;
        } else {
            return baseClasses;
        }
    }

    return (
        <div className={`${isMobileNavOpen ? 'flex' : 'hidden xs:flex'} w-full z-40 max-h-screen`}>
            <div className="flex-1">
                <div className="pt-10 pb-14 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-start max-w-7xl mx-auto cursor-default xs:container">
                    {item.navbarSections &&
                        item.navbarSections.map((section, sectionIndex) => (
                            <div
                                className={getSectionClasses(sectionIndex)}
                                key={`${sectionIndex}-${section.title}`}
                            >
                                {!section.children.some((child) => child.image) && (
                                    <div className="hidden sm:flex gap-3 items-center text-network-primary-0 h-[48px]">
                                        <div className="h-6 w-6 flex-shrink-0">
                                            {section.icon ? (
                                                <div className="[&_svg]:h-6 [&_svg]:w-6">
                                                    {section.icon}
                                                </div>
                                            ) : (
                                                <span className="invisible block h-6 w-6"></span>
                                            )}
                                        </div>

                                        <p className="text-label-lg flex-1">
                                            {section.title ? (
                                                section.title
                                            ) : (
                                                <span className="invisible">Placeholder</span>
                                            )}
                                        </p>
                                    </div>
                                )}

                                <div className="sm:hidden flex gap-3 items-center text-network-primary-0">
                                    {section.icon && (
                                        <div className="[&_svg]:h-6 [&_svg]:w-6">
                                            {section.icon}
                                        </div>
                                    )}
                                    {section.title && (
                                        <p className="text-label-lg">{section.title}</p>
                                    )}
                                </div>

                                {section.children.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex flex-col">
                                        <NavItem item={item} handleLinkClick={handleLinkClick} />
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

interface NavItemComponentProps {
    item: Route;
    handleLinkClick?: (path: string | undefined) => void;
}

function NavItem({ item, handleLinkClick }: NavItemComponentProps) {
    const { children, ...imageCardProps } = item;
    return item.image ? (
        <Link
            href={item.path}
            target={item.isExternal ? '_blank' : undefined}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            className="p-4 flex flex-col text-start items-start max-w-[328px]"
            onClick={() => handleLinkClick?.(item.path)}
            aria-label={`Link to ${item.title}`}
        >
            <ImageCard {...imageCardProps} size={ImageCardSize.Small} />
        </Link>
    ) : (
        <>
            <Link
                href={item.path}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="p-4 flex flex-col text-start items-start max-w-[328px] group"
                onClick={() => handleLinkClick?.(item.path)}
                aria-label={`Link to ${item.title}`}
            >
                <p className="text-label-lg text-iota-neutral-10 group-hover:text-network-primary-40 transition-colors">
                    {item.title}
                </p>
                {item.description && (
                    <p className="text-body-md text-iota-neutral-30">{item.description}</p>
                )}
            </Link>
        </>
    );
}
