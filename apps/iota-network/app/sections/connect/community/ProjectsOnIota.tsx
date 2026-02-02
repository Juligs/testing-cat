import { BaseSectionProps } from '@repo/shared/interfaces';
import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { FetchProjectsFullData } from './subsections/FetchProjectsFullData';

export function ProjectsOnIota({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20  items-center justify-center">
                <div className="max-w-[700px]">
                    <VerticalTitle
                        title="Projects on IOTA"
                        subtitle="Explore our Community Directory to discover innovative projects building on IOTA"
                        size={TitleTextSize.Small}
                        isCentered
                    />
                </div>

                <FetchProjectsFullData />
            </div>
        </section>
    );
}
