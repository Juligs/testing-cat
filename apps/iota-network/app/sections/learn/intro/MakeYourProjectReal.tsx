import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, HorizontalTitle, Video } from 'react-ui-kit';
import {
    MAKE_YOUR_PROJECT_REAL_STATS_HORIZONTAL_TITLE,
    MAKE_YOUR_PROJECT_REAL_BUTTON_LINKS,
    MAKE_YOUR_PROJECT_REAL_FUNDED_TEXT,
} from './constants';
import { FetchGrantsSliderData, FetchGrantsStatsData } from '@repo/shared/sections';
import { Suspense } from 'react';
import { GrantsCarouselSkeleton } from '@repo/shared/components';
import Link from 'next/link';

export function MakeYourProjectReal({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full box-border relative overflow-hidden bg-iota-neutral-4"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <Video
                src="https://files.iota.org/media/iota-network/make_project_reality.mp4"
                poster="https://files.iota.org/media/iota-network/make_project_reality_poster.jpg"
                className="absolute top-0 left-0 w-full h-auto object-contain z-0"
            />

            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 xs:gap-20 sm:gap-30 w-full relative z-10">
                <div className="w-full flex flex-col gap-14 xs:gap-20 sm:gap-30">
                    <HorizontalTitle {...MAKE_YOUR_PROJECT_REAL_STATS_HORIZONTAL_TITLE}>
                        {MAKE_YOUR_PROJECT_REAL_BUTTON_LINKS.map((button, index) => (
                            <Link
                                href={button.link}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Link to ${button.text}`}
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
                            {MAKE_YOUR_PROJECT_REAL_FUNDED_TEXT}
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
