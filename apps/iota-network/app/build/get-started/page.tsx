import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';

import {
    GET_STARTED_METADATA_TITLE,
    GET_STARTED_METADATA_DESCRIPTION_X,
    GET_STARTED_KEYWORDS,
    GET_STARTED_METADATA_DESCRIPTION,
    GET_STARTED_IMAGE,
    GET_STARTED_URL,
} from '@lib/constants';
import {
    EcosystemProjectsGetStarted,
    ExploreStake,
    GetStartedOverview,
    HeroGetStarted,
    InfraProjectsSlider,
    IotaTechnologyStack,
    SeekingBoldGetStarted,
    ShowcaseProject,
    StakingGetStarted,
    ToolingGetStarted,
    TrustFrameworkGetStarted,
    RealWorldGetStarted,
    ExploreMoreGetStarted,
} from '@sections';
export const metadata: Metadata = getPageMetadata({
    title: GET_STARTED_METADATA_TITLE,
    description: GET_STARTED_METADATA_DESCRIPTION,
    descriptionX: GET_STARTED_METADATA_DESCRIPTION_X,
    keywords: GET_STARTED_KEYWORDS,
    image: GET_STARTED_IMAGE,
    url: GET_STARTED_URL,
    path: '/build/get-started',
});

export default function Home() {
    return (
        <>
            <HeroGetStarted id="hero" navbarColorScheme="inverted" />
            <GetStartedOverview id="get-started-using-iota" />
            <ExploreStake id="explore-stake" />
            <EcosystemProjectsGetStarted id="ecosystem-projects" />
            <ToolingGetStarted id="tooling-get-started" />
            <TrustFrameworkGetStarted id="trust-framework" />
            <InfraProjectsSlider id="infra-projects" />
            <SeekingBoldGetStarted id="seeking-bold" navbarColorScheme="inverted" />
            <StakingGetStarted id="staking-get-started" />
            <IotaTechnologyStack
                id="rwa"
                title="Real-World Adoption in Action"
                hasHorizontalTitle
                showcases={[
                    ShowcaseProject.PoolsFinance,
                    ShowcaseProject.Virtue,
                    ShowcaseProject.Twin,
                    ShowcaseProject.Salus,
                    ShowcaseProject.Impierce,
                    ShowcaseProject.Orobo,
                ]}
            />
            <RealWorldGetStarted id="real-world" />
            <ExploreMoreGetStarted id="explore-more" />
        </>
    );
}
