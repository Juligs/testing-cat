import { SliderImageCardSkeleton } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { FetchProjectsSlider } from './subsections';
import { Suspense } from 'react';
import { Actions, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';

export function EcosystemProjects({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="bg-white" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <VerticalTitle title="Ecosystem Projects" size={TitleTextSize.Small} isCentered>
                    <a
                        href="https://iotalabs.io/projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="See all projects"
                    >
                        <Actions>
                            <TextLink text="See All Projects" showIcon />
                        </Actions>
                    </a>
                </VerticalTitle>
                <Suspense fallback={<SliderImageCardSkeleton />}>
                    <FetchProjectsSlider />
                </Suspense>
            </div>
        </section>
    );
}
