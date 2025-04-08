import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    BusinessInnovationHero,
    BusinessInnovationOverview,
    ProjectFunding,
    OurDecisionFramework,
    WhatIsSupported,
    HowToApply,
    JoinUsInBuildingCTA,
    BusinessInnovationMoreToExplore,
} from '@sections';
import { ContactUs } from '@repo/shared/sections';
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
            <OurDecisionFramework id="our-decision-framework" />
            <WhatIsSupported id="what-is-supported" />
            <HowToApply id="how-to-apply" />
            <JoinUsInBuildingCTA id="join-us-in-building" navbarColorScheme="inverted" />
            <ContactUs id="contact" />
            <BusinessInnovationMoreToExplore id="more-to-explore" />
        </>
    );
}
