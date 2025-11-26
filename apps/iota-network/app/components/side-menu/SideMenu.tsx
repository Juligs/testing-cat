import Link from 'next/link';
import { TextLink } from 'react-ui-kit';

export interface MenuSection {
    title: string;
    links: (React.ComponentProps<typeof TextLink> & {
        isExternal?: boolean;
        href: string;
    })[];
}

interface SideMenuProps {
    sections: MenuSection[];
}

export function SideMenu({ sections }: SideMenuProps) {
    return (
        <div className="flex flex-col gap-10">
            {sections.map(({ title, links }) => (
                <div key={title} className="flex flex-col gap-2">
                    <p className="text-label-sm text-iota-neutral-50 !font-bold">{title}</p>
                    <div className="flex flex-col gap-2 max-w-[170px]">
                        {links.map((data, index) => (
                            <Link
                                href={data.href}
                                key={index}
                                target={data.isExternal ? '_blank' : '_self'}
                                rel={data.isExternal ? 'noopener noreferrer' : undefined}
                            >
                                <TextLink {...data} />
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
