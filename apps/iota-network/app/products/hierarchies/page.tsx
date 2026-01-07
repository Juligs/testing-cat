import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';

import {
    HeroTrustHierarchies,
    TrustHierarchiesOverview,
    Decentralization,
    HowItWorksTrustHierarchies,
    KeyCapabilitiesTrustHierarchies,
    IndustryApplications,
    WhyIotaTrustHierarchies,
    TechAndToolingTrustHierarchies,
    TrustHierarchiesContactUs,
    TrustHierarchiesMoreToExplore,
    IotaTechnologyStack,
    ShowcaseProject,
} from '@sections';
import {
    TRUST_HIERACHIES_METADATA_TITLE,
    TRUST_HIERACHIES_METADATA_DESCRIPTION_X,
    TRUST_HIERACHIES_KEYWORDS,
    TRUST_HIERACHIES_METADATA_DESCRIPTION,
    TRUST_HIERACHIES_IMAGE,
    TRUST_HIERACHIES_URL,
} from '@lib/constants';
import {
    DppTrustFrameworkTeaser,
    PRODUCT_HIERARCHIES,
} from '@components/dpp-trust-framework-teaser';
export const metadata: Metadata = getPageMetadata({
    title: TRUST_HIERACHIES_METADATA_TITLE,
    description: TRUST_HIERACHIES_METADATA_DESCRIPTION,
    descriptionX: TRUST_HIERACHIES_METADATA_DESCRIPTION_X,
    keywords: TRUST_HIERACHIES_KEYWORDS,
    image: TRUST_HIERACHIES_IMAGE,
    url: TRUST_HIERACHIES_URL,
    path: '/products/hierarchies',
});

export default function Home() {
    return (
        <>
            <HeroTrustHierarchies id="hero" navbarColorScheme="inverted" />
            <TrustHierarchiesOverview id="overview" navbarColorScheme="inverted" />
            <Decentralization id="decentralization" />
            <HowItWorksTrustHierarchies id="how-it-works" />
            <KeyCapabilitiesTrustHierarchies id="key-capabilities" />
            <IndustryApplications id="industry-applications" />
            <WhyIotaTrustHierarchies id="why-iota" />
            <TechAndToolingTrustHierarchies id="tech-and-tooling" />
            <IotaTechnologyStack
                id="rwa"
                showcases={[
                    ShowcaseProject.Impierce,
                    ShowcaseProject.Orobo,
                    ShowcaseProject.ObjectID,
                    ShowcaseProject.TuringSpace,
                ]}
            />
            <DppTrustFrameworkTeaser id="dpp-trust-framework" productName={PRODUCT_HIERARCHIES} />
            <TrustHierarchiesContactUs id="contact-us" />
            <TrustHierarchiesMoreToExplore id="more-to-explore" />
        </>
    );
}
