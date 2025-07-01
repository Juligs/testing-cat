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
    NotarizationTechnologyStack,
    NotarizationContactUs,
    NotarizationMoreToExplore,
} from '@sections';
import {
    NOTARIZATION_METADATA_TITLE,
    NOTARIZATION_METADATA_DESCRIPTION_X,
    NOTARIZATION_KEYWORDS,
    NOTARIZATION_METADATA_DESCRIPTION,
    NOTARIZATION_IMAGE,
    NOTARIZATION_URL,
} from '@lib/constants';
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
            <NotarizationTechnologyStack id="notarization-technology-stack" />
            <NotarizationContactUs id="contact-us" />
            <NotarizationMoreToExplore id="more-to-explore" />
        </>
    );
}
