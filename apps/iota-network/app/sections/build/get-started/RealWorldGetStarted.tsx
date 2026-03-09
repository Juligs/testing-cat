import { BaseSectionProps } from '@repo/shared/interfaces';
import { CtaCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { REAL_WORLD_CTA_CONTENT } from './constants';
import Link from 'next/link';

export function RealWorldGetStarted({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-12 w-full">
                <div className="w-full">
                    <VerticalTitle
                        title="Find where innovation meets real-world demand."
                        size={TitleTextSize.ExtraSmall}
                    />
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
                    {REAL_WORLD_CTA_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            aria-label={`Link to ${data.title}`}
                            className="[&>div]:h-full"
                        >
                            <CtaCard {...data} small alignStart />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
