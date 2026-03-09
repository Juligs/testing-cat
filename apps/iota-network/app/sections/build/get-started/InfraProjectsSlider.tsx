import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle, TitleTextSize } from 'react-ui-kit';
import { FetchInfraProjectsSlider } from './subsections/fetchInfraProjectsSlider';

export function InfraProjectsSlider({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 lg:gap-30">
                <HorizontalTitle
                    title="IOTA Infrastructure"
                    subtitle="Seamlessly integrate with top-tier infrastructure providers to deploy, monitor, and scale your IOTA-powered applications"
                    size={TitleTextSize.Small}
                />
                <FetchInfraProjectsSlider />
            </div>
        </section>
    );
}
