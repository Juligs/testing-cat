import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';

import {
    NotarizationOverview,
    HeroNotarization,
    ArchievingData,
    HowItWorksNotarization,
    NotarizationWorkflow,
    ChooseTheRightLevel,
    RealWorldUseCases,
    WhyIotaNotarization,
    TechAndTooling,
    NotarizationContactUs,
    NotarizationMoreToExplore,
    IotaTechnologyStack,
    ShowcaseProject,
} from '@sections';
import {
    NOTARIZATION_METADATA_TITLE,
    NOTARIZATION_METADATA_DESCRIPTION_X,
    NOTARIZATION_KEYWORDS,
    NOTARIZATION_METADATA_DESCRIPTION,
    NOTARIZATION_IMAGE,
    NOTARIZATION_URL,
} from '@lib/constants';
import {
    DppTrustFrameworkTeaser,
    PRODUCT_NOTARIZATION,
} from '@components/dpp-trust-framework-teaser';
export const metadata: Metadata = getPageMetadata({
    title: NOTARIZATION_METADATA_TITLE,
    description: NOTARIZATION_METADATA_DESCRIPTION,
    descriptionX: NOTARIZATION_METADATA_DESCRIPTION_X,
    keywords: NOTARIZATION_KEYWORDS,
    image: NOTARIZATION_IMAGE,
    url: NOTARIZATION_URL,
    path: '/products/notarization',
});

export default function Home() {
    return (
        <>
            <HeroNotarization id="hero" navbarColorScheme="inverted" />
            <NotarizationOverview id="overview" />
            <ArchievingData id="archieving_darta" />
            <HowItWorksNotarization id="how-it-works" />
            <NotarizationWorkflow id="Notarization-workflow" />
            <ChooseTheRightLevel id="choose-the-right-level" />
            <RealWorldUseCases id="real-world-use-cases" />
            <WhyIotaNotarization id="why-iota-notarization" />
            <TechAndTooling id="tech-and-tooling" />
            <IotaTechnologyStack
                showcases={[
                    ShowcaseProject.Impierce,
                    ShowcaseProject.Orobo,
                    ShowcaseProject.ObjectID,
                    ShowcaseProject.TuringSpace,
                ]}
            />
            <DppTrustFrameworkTeaser id="dpp-trust-framework" productName={PRODUCT_NOTARIZATION} />
            <NotarizationContactUs id="contact-us" />
            <NotarizationMoreToExplore id="more-to-explore" />
        </>
    );
}
