import React from 'react';
import clsx from 'clsx';

interface NavbarItemProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLLIElement>> {
    active: boolean;
    inverted?: boolean;
}

export function NavbarItem({ active, children, inverted, className, ...rest }: NavbarItemProps) {
    return (
        <li
            className={clsx('group cursor-pointer', { 'active-class': active }, className)}
            {...rest}
        >
            <div className="py-4 px-3 xs:py-8 xs:px-4 text-label-md xs:text-center">{children}</div>
            <span
                className={clsx(
                    'block h-[1px] opacity-0 transition-opacity group-hover:opacity-40 group-focus:opacity-40 group-active:opacity-100 group-[.active]:opacity-100',
                    inverted ? 'bg-darkest-inverted' : 'bg-darkest',
                )}
            />
        </li>
    );
}
