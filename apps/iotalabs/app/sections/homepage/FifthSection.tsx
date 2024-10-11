import { AnchorLink, VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';
import Link from 'next/link';

const EXTERNAL_LINKS = [
    {
        title: 'Developer Docs',
        href: '',
    },
    {
        title: 'Learning Resources',
        href: '',
    },
    {
        title: 'IOTA EVM',
        href: 'https://evm.iota.org/',
    },
];

export function FifthSection({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col xs:flex-row justify-between text-center gap-14 xs:items-baseline">
                <div className="sm:w-1/2 xl:w-2/5 shrink-0">
                    <VerticalTitle
                        size={VerticalTitleTextSize.Medium}
                        title="Getting Started With IOTA"
                        subtitle="Streamlining innovation for developers"
                    />
                </div>
                <div className="flex flex-col gap-4 xs:w-1/2 sm:w-1/3 xl:w-2/5">
                    {EXTERNAL_LINKS.map(({ title, href }) => (
                        <Link key={title} href={href} target="_blank" rel="noopener noreferrer">
                            <AnchorLink isExternal text={title} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
