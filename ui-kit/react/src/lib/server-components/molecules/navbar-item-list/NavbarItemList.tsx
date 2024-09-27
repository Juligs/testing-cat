import { Close, MenuColapsed } from '@repo/icons';
import clsx from 'clsx';

interface NavbarItemListProps {
    isMobileNavOpen: boolean;
    onMobileNavToggle: () => void;
}

export function NavbarItemList({
    children,
    isMobileNavOpen,
    onMobileNavToggle,
}: React.PropsWithChildren<NavbarItemListProps>) {
    return (
        <>
            <ul className="hidden md:flex flex-row">{children}</ul>

            <button
                type="button"
                className="block md:hidden w-6 h-6 [&_svg]:w-full [&_svg]:h-full"
                onClick={onMobileNavToggle}
            >
                {isMobileNavOpen ? <Close /> : <MenuColapsed />}
            </button>

            <div
                className={clsx(
                    'md:hidden w-full absolute top-full right-0 z-20 transition-[max-height] overflow-y-hidden',
                    isMobileNavOpen ? 'max-h-screen' : 'max-h-0',
                )}
            >
                <ul className="container flex flex-col py-6">{children}</ul>
            </div>
        </>
    );
}
