import Link from 'next/link';
import { MenuRoute } from '../layout.interfaces';
import clsx from 'clsx';
import Image from 'next/image';

interface NavItemProps {
    item: MenuRoute;
    onClose?: () => void;
}

export function NavItem({ item, onClose }: NavItemProps) {
    const external = item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <Link
            href={item.href}
            {...external}
            onClick={() => onClose?.()}
            aria-label={`Link to ${item.title}`}
            className={clsx('group flex flex-col items-start text-start', item.image && 'pb-2')}
        >
            <div className="flex flex-row items-center gap-4">
                {item.image && (
                    <Image
                        src={item.image}
                        width={40}
                        height={40}
                        className="aspect-square object-cover"
                        alt={item.title ?? 'Menu image'}
                    />
                )}
                <div className="flex flex-col">
                    {item.title && (
                        <p className="transition-colors text-label-md text-darkest group-hover:text-network-primary-40">
                            {item.title}
                        </p>
                    )}
                    {item.description && (
                        <p className="text-body-sm text-medium">{item.description}</p>
                    )}
                </div>
            </div>
        </Link>
    );
}
