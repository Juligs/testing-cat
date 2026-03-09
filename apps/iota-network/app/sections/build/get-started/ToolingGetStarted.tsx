import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { HighlightCard, VerticalTitle } from 'react-ui-kit';
import {
    PRODUCTS_CTA_CONTENT,
    TOOLING_HIGHLIGHT_CONTENT,
    TOOLING_TITLE_CONTENT,
} from './constants';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';

export function ToolingGetStarted({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 lg:gap-30 ">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    <VerticalTitle {...TOOLING_TITLE_CONTENT} />
                    {TOOLING_HIGHLIGHT_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            target={data.isExternal ? '_blank' : '_blank'}
                            rel={data.isExternal ? 'noopener noreferrer' : ''}
                            className="[&>div]:h-full"
                            aria-label={`Link to ${data.title}`}
                        >
                            <HighlightCard {...data} />
                        </Link>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                    {PRODUCTS_CTA_CONTENT.map((data, index) => (
                        <Link
                            className="[&>div]:h-full"
                            href={data.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Link to ${data.title}`}
                        >
                            <SmallCtaCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
