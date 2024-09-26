import { Close, MenuColapsed } from '@repo/icons';
import { useState } from 'react';
import clsx from 'clsx';

export function NavbarItemList({ children }: React.PropsWithChildren) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

    function handleAsideOpen() {
        setIsMobileNavOpen(!isMobileNavOpen);
    }

    return (
        <>
            <ul className="max-md:hidden flex flex-row">{children}</ul>

            <button
                type="button"
                className="hidden max-md:block w-6 h-6 [&_svg]:w-full [&_svg]:h-full"
                onClick={handleAsideOpen}
            >
                {isMobileNavOpen ? <Close /> : <MenuColapsed />}
            </button>

            <div
                className={clsx(
                    'w-full absolute top-full right-0 z-20 transition-[max-height] overflow-y-hidden',
                    isMobileNavOpen ? 'max-h-screen' : 'max-h-0',
                )}
            >
                <ul className="container flex flex-col py-6">{children}</ul>
            </div>
        </>
    );
}
