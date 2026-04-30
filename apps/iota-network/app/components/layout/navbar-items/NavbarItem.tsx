import clsx from 'clsx';
import Link from 'next/link';

interface NavbarItemProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLLIElement>> {
    active: boolean;
    inverted?: boolean;
    hasChildren?: boolean;
    path?: string;
}

export function NavbarItem({
    active,
    children,
    inverted,
    hasChildren,
    path,
    ...rest
}: NavbarItemProps) {
    return (
        <li className={clsx('group cursor-pointer', { active })} {...rest}>
            {hasChildren ? (
                <>
                    <div
                        className="relative py-4 px-3 xs:py-8 xs:px-4 text-label-md xs:text-center focus:outline-none"
                        tabIndex={0}
                    >
                        {children}
                        <span
                            className={clsx(
                                'pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 transition-[width] duration-300 ease-out group-hover:w-full group-[.active]:w-full',
                                inverted
                                    ? 'group-hover:bg-darkest-inverted group-focus-within:bg-medium-inverted group-focus-within:w-full'
                                    : 'group-hover:bg-darkest group-focus-within:bg-medium group-focus-within:w-full',
                            )}
                        />
                    </div>
                </>
            ) : (
                <>
                    <Link
                        href={path ?? '#'}
                        className="relative py-4 px-3 xs:py-8 xs:px-4 text-label-md xs:text-center block"
                    >
                        {children}
                        <span
                            className={clsx(
                                'pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 transition-[width] duration-300 ease-out group-hover:w-full group-[.active]:w-full',
                                inverted ? 'bg-darkest-inverted' : 'bg-darkest',
                            )}
                        />
                    </Link>
                </>
            )}
        </li>
    );
}
