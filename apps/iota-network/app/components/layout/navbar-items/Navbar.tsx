import clsx from 'clsx';

interface NavbarProps extends React.PropsWithChildren {
    inverted?: boolean;
    navRef?: React.RefObject<HTMLDivElement>;
}

export function Navbar({ inverted, children, navRef }: NavbarProps) {
    return (
        <nav
            className={clsx(
                'w-full backdrop-blur bg-transparent select-none',
                inverted ? 'text-darkest-inverted' : 'text-darkest',
            )}
            ref={navRef}
        >
            <div className="container flex flex-col sm:flex-row items-center justify-between w-full py-3 sm:py-0">
                {children}
            </div>
        </nav>
    );
}
