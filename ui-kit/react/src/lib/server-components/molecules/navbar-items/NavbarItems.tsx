import { Close, MenuColapsed } from '@repo/icons';
import clsx from 'clsx';

interface NavbarItemsProps {
    isMobileNavOpen: boolean;
    onMobileNavToggle: () => void;
    logo: React.ReactNode;
}

export function NavbarItems({
    children,
    logo,
    isMobileNavOpen,
    onMobileNavToggle,
}: React.PropsWithChildren<NavbarItemsProps>) {
    return (
        <>
            <div className="flex flex-row w-full items-center justify-between">
                {logo}

                <ul className="hidden md:flex flex-row">{children}</ul>

                <button
                    type="button"
                    className="block md:hidden w-6 h-6 [&_svg]:w-full [&_svg]:h-full"
                    onClick={onMobileNavToggle}
                >
                    {isMobileNavOpen ? <Close /> : <MenuColapsed />}
                </button>
            </div>

            <div
                className={clsx(
                    'md:hidden w-full transition-[max-height] overflow-y-hidden',
                    isMobileNavOpen ? 'max-h-screen' : 'max-h-0',
                )}
            >
                <ul className="flex flex-col py-6">{children}</ul>
            </div>
        </>
    );
}
