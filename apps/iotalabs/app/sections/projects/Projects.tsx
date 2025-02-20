import { VerticalTitle, TitleTextSize } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ProjectsSkeleton } from '@sections/skeletons';
import { FetchProjectsData } from '@sections/subsections';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Suspense } from 'react';

export function Projects({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/projects/section2.svg">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle
                            title="Projects on IOTA"
                            subtitle="Explore our Ecosystem Directory to discover projects built on IOTA"
                            body="Discover the innovative projects in the IOTA ecosystem. From various industries and use cases, these projects leverage IOTA to bridge the real world with Web3, driving transformative solutions."
                            size={TitleTextSize.Medium}
                        ></VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <Suspense fallback={<ProjectsSkeleton />}>
                    <FetchProjectsData />
                </Suspense>
            </div>
        </section>
    );
}
