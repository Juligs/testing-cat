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
                'container flex flex-row items-center justify-between w-full relative',
                inverted ? 'text-darkest-inverted' : 'text-darkest',
            )}
        >
            {children}
        </nav>
    );
}
