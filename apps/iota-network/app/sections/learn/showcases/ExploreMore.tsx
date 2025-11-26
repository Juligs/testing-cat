import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import { ShowcaseProject } from './showcasesProjects.enums';
import { SHOWCASES } from './constants/showcasesContent.constants';

interface ExploreMoreSectionProps extends BaseSectionProps {
    showcase: ShowcaseProject;
}

export function ExploreMoreShowcases({ id, navbarColorScheme, showcase }: ExploreMoreSectionProps) {
    const page = SHOWCASES[showcase];
    const data = page?.exploreMore;

    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-20 flex flex-col gap-12 w-full">
                <VerticalTitle
                    title="Explore more showcases"
                    size={TitleTextSize.ExtraSmall}
                    isCentered
                />

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {data.ctaExploreCard.map((card, i) => (
                        <Link
                            key={i}
                            href={card.link}
                            target={card.isExternal ? '_blank' : '_self'}
                            className="[&>div]:h-full"
                            rel={card.isExternal ? 'noopener noreferrer' : undefined}
                        >
                            <SmallCtaCard {...card} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
