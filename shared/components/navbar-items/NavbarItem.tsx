import React from 'react';
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
    className,
    hasChildren,
    path,
    ...rest
}: NavbarItemProps) {
    return (
        <li className={clsx('group cursor-pointer', { 'active-class': active })} {...rest}>
            {hasChildren ? (
                <>
                    <div className="py-4 px-3 xs:py-8 xs:px-4 text-label-md xs:text-center">
                        {children}
                    </div>
                    <span
                        className={clsx(
                            'block h-[1px] opacity-0 transition-opacity group-hover:opacity-40 group-focus:opacity-40 group-active:opacity-100 group-[.active]:opacity-100',
                            inverted ? 'bg-darkest-inverted' : 'bg-darkest',
                        )}
                    />
                </>
            ) : (
                <>
                    <Link
                        href={path ?? '#'}
                        className="py-4 px-3 xs:py-8 xs:px-4 text-label-md xs:text-center block"
                    >
                        {children}
                    </Link>
                    <span
                        className={clsx(
                            'block h-[1px] opacity-0 transition-opacity group-hover:opacity-40 group-focus:opacity-40 group-active:opacity-100 group-[.active]:opacity-100',
                            inverted ? 'bg-darkest-inverted' : 'bg-darkest',
                        )}
                    />
                </>
            )}
        </li>
    );
}
