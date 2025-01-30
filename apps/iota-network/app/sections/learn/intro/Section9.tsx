import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, HorizontalTitle, Video } from 'react-ui-kit';
import { GRANTS_STATS_HORIZONTAL_TITLE, GRANTS_BUTTON_LINKS, FOUNDED_TEXT } from './constants';
import { FetchGrantsSliderData, FetchGrantsStatsData } from '@repo/shared/sections';
import { Suspense } from 'react';
import { GrantsCarouselSkeleton } from '@repo/shared/components';
import Link from 'next/link';

export function Section9({ id, theme }: BaseSectionProps) {
    return (
        <section
            className="w-full box-border relative overflow-hidden bg-network-neutral-4"
            id={id}
            data-theme={theme}
        >
            <Video
                src="https://files.iota.org/media/iota-network/make_project_reality.mp4"
                poster="https://files.iota.org/media/iota-network/make_project_reality_poster.jpg"
                className="absolute top-0 left-0 w-full h-auto object-contain z-0"
            />

            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 xs:gap-20 sm:gap-30 w-full relative z-10">
                <div className="w-full flex flex-col gap-14 xs:gap-20 sm:gap-30">
                    <HorizontalTitle {...GRANTS_STATS_HORIZONTAL_TITLE}>
                        {GRANTS_BUTTON_LINKS.map((button, index) => (
                            <Link
                                href={button.link}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Actions>
                                    <Button {...button} />
                                </Actions>
                            </Link>
                        ))}
                    </HorizontalTitle>

                    <FetchGrantsStatsData inverted />
                    <div className="flex flex-col gap-8 xs:gap-12">
                        <p className="text-headline-sm text-darkest-inverted  font-semibold">
                            {FOUNDED_TEXT}
                        </p>
                        <Suspense fallback={<GrantsCarouselSkeleton />}>
                            <FetchGrantsSliderData itemsToShow={6} inverted />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}
