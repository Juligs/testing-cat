import clsx from 'clsx';
import Link from 'next/link';
import { VerticalTitle, Actions, TextLink, TitleTextSize } from 'react-ui-kit';
import { ShowcaseProject } from './showcasesProjects.enums';
import { SHOWCASES } from './constants/showcasesContent.constants';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import { BaseSectionProps } from '@repo/shared/interfaces';

type IotaTechnologyStackProps = BaseSectionProps & {
    title?: string;
    showcases: ShowcaseProject[];
    isTitleCentered?: boolean;
    showLearnMoreLink?: boolean;
    hasBackgroundColor?: boolean;
    showSeeAllLink?: boolean;
    isLarge?: boolean;
};

export function IotaTechnologyStack({
    title = 'IOTA Technology Stack in Action',
    showcases,
    isTitleCentered,
    showLearnMoreLink = true,
    hasBackgroundColor,
    showSeeAllLink,
    isLarge,
    id,
    navbarColorScheme,
}: IotaTechnologyStackProps) {
    const showcaseCards = showcases
        .filter((e) => e in SHOWCASES && SHOWCASES[e].card)
        .map((e) => ({
            ...SHOWCASES[e].card!,
            link: `/learn/showcases/${e}`,
        }));

    return (
        <section
            className={clsx('w-full', hasBackgroundColor && 'bg-iota-neutral-98')}
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div
                className={clsx(
                    'container flex flex-col',
                    isLarge
                        ? 'gap-12 xs:gap-20 py-14 xs:py-20 lg:py-30'
                        : 'gap-6 xs:gap-12 py-10 xs:py-16 lg:py-20',
                )}
            >
                <VerticalTitle
                    title={title}
                    size={TitleTextSize.ExtraSmall}
                    isCentered={isTitleCentered}
                >
                    {showLearnMoreLink && (
                        <Actions>
                            <Link href="/learn/showcases" aria-label="Go to the Showcases page">
                                <TextLink text="Learn more" showIcon />
                            </Link>
                        </Actions>
                    )}
                </VerticalTitle>

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-2">
                    {showcaseCards.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="[&>div]:h-full"
                            aria-label={`Go to ${item.title}`}
                        >
                            <SmallCtaCard
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                            />
                        </Link>
                    ))}
                </div>
                {showSeeAllLink && (
                    <div className="flex justify-center">
                        <Link href="/learn/showcases" aria-label="Go to the Showcases page">
                            <TextLink text="See all" showIcon />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
