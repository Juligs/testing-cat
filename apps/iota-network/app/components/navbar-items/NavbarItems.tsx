import { Close, Down, MenuColapsed } from '@repo/icons';
import clsx from 'clsx';
import { Route } from '@lib/interfaces';
import { NavbarItem } from '@components/navbar-items';
import Link from 'next/link';
import { ImageCard } from 'react-ui-kit';

interface NavbarItemsProps {
    isMobileNavOpen: boolean;
    onMobileNavToggle: () => void;
    logo: React.ReactNode;
    items: Route[];
    openDropdown: number | null;
    handleClick: (index: number | null) => void;
    handleLinkClick: (path: string | undefined) => void;
}

export function NavbarItems({
    logo,
    isMobileNavOpen,
    onMobileNavToggle,
    items,
    openDropdown,
    handleClick,
    handleLinkClick,
}: React.PropsWithChildren<NavbarItemsProps>) {
    return (
        <>
            <div className="flex flex-row w-full items-center justify-between z-[21]">
                {logo}
                <ul className="hidden xs:flex flex-row">
                    {items.map((item, index) => (
                        <NavbarItem
                            key={index}
                            active={openDropdown === index}
                            inverted={isMobileNavOpen}
                            onClick={() => handleClick(index)}
                        >
                            <span className="block text-label-lg cursor-pointer">{item.title}</span>
                        </NavbarItem>
                    ))}
                </ul>
                <button
                    type="button"
                    className="block xs:hidden w-6 h-6 [&_svg]:w-full [&_svg]:h-full"
                    onClick={onMobileNavToggle}
                >
                    {isMobileNavOpen ? <Close /> : <MenuColapsed />}
                </button>
            </div>
        </>
    );
}

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
    return (
        <div className="flex flex-col">
            <div
                className="flex flex-row w-full justify-between items-center py-4 cursor-pointer group text-darkest  hover:text-network-primary-40"
                onClick={onClick}
            >
                <span className="block text-label-lg cursor-pointer">{item.title}</span>
                <Down className={clsx(isOpen && 'rotate-180', 'transition-transform', 'w-6 h-6')} />
            </div>
            <div className={clsx(isOpen ? 'max-h-full' : 'max-h-0 overflow-hidden')}>
                {item.navbarSections?.map((section) => (
                    <div className="flex flex-col items-start" key={section.title}>
                        {(section.icon || section.title) && (
                            <div className="flex gap-3 items-center py-6 text-network-primary-0">
                                {section.icon && (
                                    <div className="[&_svg]:h-6 [&_svg]:w-6">{section.icon}</div>
                                )}
                                {section.title && <p className="text-label-lg">{section.title}</p>}
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
        </div>
    );
}

interface DropdownMenuProps {
    item: Route;
    isMobileNavOpen: boolean;
    handleLinkClick: (path: string | undefined) => void;
}

export function DropdownMenu({ item, isMobileNavOpen, handleLinkClick }: DropdownMenuProps) {
    return (
        <div
            className={`${
                isMobileNavOpen ? 'flex' : ' hidden xs:flex'
            } w-full z-40  max-h-screen overflow-y-auto`}
        >
            <div className="overflow-y-auto flex-1">
                <div className="pt-10 pb-14 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-start max-w-7xl mx-auto cursor-default xs:container">
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
            <ImageCard {...imageCardProps} />
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
                <p className="text-label-lg text-network-neutral-10 group-hover:text-network-primary-40 transition-colors">
                    {item.title}
                </p>
                {item.description && (
                    <p className="text-body-md text-network-neutral-30">{item.description}</p>
                )}
            </Link>
        </>
    );
}
