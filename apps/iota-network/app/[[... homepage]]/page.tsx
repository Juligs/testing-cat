import { getPageMetadata } from '@lib/utils';
import { LighthouseProjects } from '@repo/shared/sections';
import { HomepageRedirect } from '@repo/shared/components';
import {
    Hero,
    NetworkStats,
    IotaManifesto,
    IntegrationStack,
    StakingOnIota,
    BuildingSolutions,
    EcosystemProjects,
    WhyBuild,
    BlogPosts,
    GettingStarted,
    JoinUsBuildingCTA,
    LearnBuildShipHomepage,
} from '@sections';
import {
    HOMEPAGE_METADATA_TITLE,
    HOMEPAGE_METADATA_DESCRIPTION_X,
    HOMEPAGE_KEYWORDS,
    HOMEPAGE_METADATA_DESCRIPTION,
    HOMEPAGE_IMAGE,
    HOMEPAGE_URL,
} from '@lib/constants';

import type { Metadata } from 'next';
import { IotaTechnologyStack } from '@sections/learn/showcases/IotaTechnologyStack';
import { ShowcaseProject } from '@sections/learn/showcases/showcasesProjects.enums';

export const metadata: Metadata = getPageMetadata({
    title: HOMEPAGE_METADATA_TITLE,
    description: HOMEPAGE_METADATA_DESCRIPTION,
    descriptionX: HOMEPAGE_METADATA_DESCRIPTION_X,
    keywords: HOMEPAGE_KEYWORDS,
    image: HOMEPAGE_IMAGE,
    url: HOMEPAGE_URL,
    path: '/',
});

export default function Home() {
    return (
        <>
            <Hero id="hero" navbarColorScheme="inverted" />
            <NetworkStats id="network-stats" />
            <IotaManifesto id="iota-manifesto" />
            <IntegrationStack id="integration-stack" />
            <StakingOnIota id="staking-on-iota" />
            <BuildingSolutions id="building-solutions" />
            <IotaTechnologyStack
                id="rwa"
                title="Real-World Adoption in Action"
                isTitleCentered
                hasBackgroundColor
                showSeeAllLink
                isLarge
                showLearnMoreLink={false}
                showcases={[
                    ShowcaseProject.PoolsFinance,
                    ShowcaseProject.Virtue,
                    ShowcaseProject.Twin,
                    ShowcaseProject.Salus,
                    ShowcaseProject.Orobo,
                    ShowcaseProject.Impierce,
                ]}
            />

            <LighthouseProjects id="lighthouse-projects" />
            <LearnBuildShipHomepage id="learn-build-ship" />
            <JoinUsBuildingCTA id="join-us-in-building" navbarColorScheme="inverted" />
            <EcosystemProjects id="ecosystem-projects" />
            <WhyBuild id="why-build" navbarColorScheme="inverted" />
            <BlogPosts id="blog-posts" />
            <GettingStarted id="getting-started" />
            <HomepageRedirect />
        </>
    );
}
