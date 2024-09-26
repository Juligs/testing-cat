import clsx from 'clsx';

interface NavbarItemProps extends React.PropsWithChildren {
    /**
     * Whether the item is active.
     */
    active?: boolean;
    /**
     * Whether the item is inverted.
     */
    inverted?: boolean;
    /**
     * The click handler.
     */
    onClick?: () => void;
}

export function NavbarItem({ active, children, inverted, onClick }: NavbarItemProps) {
    return (
        <li className={clsx('group cursor-pointer', { active })} onClick={onClick}>
            <div className="py-4 px-3 md:py-8 md:px-4 text-label-md md:text-center">{children}</div>
            <span
                className={clsx(
                    'block h-[1px] opacity-0 transition-opacity group-hover:opacity-40 group-focus:opacity-40 group-active:opacity-100 group-[.active]:opacity-100',
                    inverted ? 'bg-darkest-inverted' : 'bg-darkest',
                )}
            />
        </li>
    );
}
