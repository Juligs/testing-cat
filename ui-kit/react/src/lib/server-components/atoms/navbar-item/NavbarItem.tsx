import { clsx } from 'clsx';

interface NavbarItemProps extends React.PropsWithChildren {
    /**
     * Whether the item is active.
     */
    active: boolean;
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
            <div className="py-4 px-3 xs:py-8 xs:px-4 text-label-md xs:text-center">{children}</div>
            <span
                style={{
                    transition: 'transform 300ms cubic-bezier(0, 0, 0.2, 1)',
                    transformOrigin: 'left',
                }}
                className={clsx(
                    'block h-[1px] scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 group-[.active]:scale-x-100',
                    inverted ? 'bg-darkest-inverted' : 'bg-darkest',
                )}
            />
        </li>
    );
}
