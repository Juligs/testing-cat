import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    BusinessInnovationHero,
    BusinessInnovationOverview,
    ProjectFunding,
    ProjectOutcome,
    FirstParticipants,
    BusinessInnovationMoreToExplore,
    BuildWithPurpose,
    IntegrationFeedback,
} from '@sections';
import {
    BUSINESS_INNOVATION_PROGRAM_METADATA_TITLE,
    BUSINESS_INNOVATION_PROGRAM_METADATA_DESCRIPTION_X,
    BUSINESS_INNOVATION_PROGRAM_KEYWORDS,
    BUSINESS_INNOVATION_PROGRAM_METADATA_DESCRIPTION,
    BUSINESS_INNOVATION_PROGRAM_IMAGE,
    BUSINESS_INNOVATION_PROGRAM_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: BUSINESS_INNOVATION_PROGRAM_METADATA_TITLE,
    description: BUSINESS_INNOVATION_PROGRAM_METADATA_DESCRIPTION,
    descriptionX: BUSINESS_INNOVATION_PROGRAM_METADATA_DESCRIPTION_X,
    keywords: BUSINESS_INNOVATION_PROGRAM_KEYWORDS,
    image: BUSINESS_INNOVATION_PROGRAM_IMAGE,
    url: BUSINESS_INNOVATION_PROGRAM_URL,
    path: '/build/business-innovation-program',
});

export default function Home() {
    return (
        <>
            <BusinessInnovationHero id="hero" navbarColorScheme="inverted" />
            <BusinessInnovationOverview id="business-innovation-overview" />
            <ProjectFunding id="project-funding" />
            <FirstParticipants id="first-participants" />
            <ProjectOutcome id="project-outcome" />
            <IntegrationFeedback id="integration-feedback" />
            <BuildWithPurpose className="container w-full" id="build-with-purpose" />
            <BusinessInnovationMoreToExplore id="more-to-explore" />
        </>
    );
}
