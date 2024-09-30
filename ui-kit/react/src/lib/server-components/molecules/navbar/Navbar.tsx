import clsx from 'clsx';

interface NavbarProps extends React.PropsWithChildren {
    /**
     * Whether the navbar colors are inverted.
     */
    inverted?: boolean;
}

export function Navbar({ inverted, children }: NavbarProps) {
    return (
        <nav
            className={clsx(
                'w-full backdrop-blur bg-transparent',
                inverted ? 'text-darkest-inverted' : 'text-darkest',
            )}
        >
            <div className="container flex flex-col md:flex-row items-center justify-between w-full py-3 md:py-0">
                {children}
            </div>
        </nav>
    );
}
