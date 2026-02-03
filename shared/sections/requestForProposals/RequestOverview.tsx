import { VerticalTitle, TitleTextSize } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '../../components';
import { BaseSectionProps } from '../../interfaces';
import { FetchsProposalsSliderData } from './subsections';

export function RequestOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/proposals.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle
                            title="Request for Proposals"
                            subtitle="Powering DeFi with trusted providers"
                            body="Help push the IOTA Ecosystem even further by building tools and applications that the entire Ecosystem is benefiting from. Explore the Proposals and pick one up."
                            size={TitleTextSize.Medium}
                        />
                    </div>
                </TwoColumnsImageTemplate>
                <FetchsProposalsSliderData />
            </div>
        </section>
    );
}
