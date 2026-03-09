import { SliderImageCardSkeleton } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { FetchProjectsSlider } from '@lib/utils';
import { Suspense } from 'react';
import { Actions, HorizontalTitle, TextLink, TitleTextSize } from 'react-ui-kit';
import Link from 'next/link';

export function EcosystemProjectsGetStarted({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="bg-white" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container pb-14 xs:pb-20 lg:pb-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <HorizontalTitle title="Ecosystem Projects" size={TitleTextSize.Small}>
                    <Link href="/connect/our-community" aria-label="See all projects">
                        <Actions>
                            <TextLink text="See All Projects" showIcon />
                        </Actions>
                    </Link>
                </HorizontalTitle>
                <Suspense fallback={<SliderImageCardSkeleton />}>
                    <FetchProjectsSlider />
                </Suspense>
            </div>
        </section>
    );
}
