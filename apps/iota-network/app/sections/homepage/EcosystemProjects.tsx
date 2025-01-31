import { GrantsCarouselSkeleton } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { FetchGrantsSliderData } from '@repo/shared/sections';
import { Suspense } from 'react';
import { Actions, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';

export function EcosystemProjects({ id, theme }: BaseSectionProps) {
    return (
        <section className="bg-white" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <VerticalTitle title="Ecosystem Projects" size={TitleTextSize.Small} isCentered>
                    <a
                        href="https://iotalabs.io/projects"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Actions>
                            <TextLink text="See All Projects" showIcon />
                        </Actions>
                    </a>
                </VerticalTitle>
                <Suspense fallback={<GrantsCarouselSkeleton />}>
                    <FetchGrantsSliderData itemsToShow={3} />
                </Suspense>
            </div>
        </section>
    );
}
