import { SliderImageCardSkeleton } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { FetchProjectsSlider } from '@lib/utils';
import { PROJECTS_ON_IOTA_VERTICAL_TITLE, PROJECTS_ON_IOTA_CTA_CARD } from './constants';
import { Suspense } from 'react';
import { Actions, Button, CtaCard, TextLink, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function ProjectsOnIota({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="bg-white" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <div className="w-full max-w-[600px] mx-auto flex flex-col items-center text-center">
                    <VerticalTitle {...PROJECTS_ON_IOTA_VERTICAL_TITLE}>
                        <Actions>
                            <Link
                                href={PROJECTS_ON_IOTA_VERTICAL_TITLE.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="See all projects"
                            >
                                <Button text="View more" icon={<ArrowTopRight />} />
                            </Link>
                        </Actions>
                    </VerticalTitle>
                </div>

                <Suspense fallback={<SliderImageCardSkeleton />}>
                    <FetchProjectsSlider />
                </Suspense>

                <CtaCard {...PROJECTS_ON_IOTA_CTA_CARD}>
                    <Actions>
                        <Link
                            href={PROJECTS_ON_IOTA_CTA_CARD.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TextLink text="Register now" showIcon inverted />
                        </Link>
                    </Actions>
                </CtaCard>
            </div>
        </section>
    );
}
