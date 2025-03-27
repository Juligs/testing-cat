import { Close, MenuColapsed } from '@repo/icons';
import { Route } from '../../interfaces';
import { NavbarItem } from './NavbarItem';

interface NavbarItemsProps {
    isMobileNavOpen: boolean;
    onMobileNavToggle: () => void;
    logo: React.ReactNode;
    items: Route[];
    openDropdown: number | null;
    handleClick: (index: number | null) => void;
    handleLinkClick: (path: string | undefined) => void;
    hasChildren: boolean;
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
            <div className="flex flex-row w-full items-center justify-between z-[21]">
                {logo}
                <ul className="hidden xs:flex flex-row">
                    {items.map((item, index) => {
                        const hasChildren =
                            item.navbarSections &&
                            item.navbarSections.some((section) => section.children?.length > 0);

                        return (
                            <NavbarItem
                                key={index}
                                active={openDropdown === index || !!item.active}
                                inverted={inverted}
                                onClick={() => {
                                    if (hasChildren) {
                                        handleClick(index);
                                    } else {
                                        handleLinkClick(item.path);
                                    }
                                }}
                                hasChildren={hasChildren}
                                path={item.path ?? '#'}
                            >
                                {item.title}
                            </NavbarItem>
                        );
                    })}
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
