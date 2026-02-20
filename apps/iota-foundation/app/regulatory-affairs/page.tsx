import { getPageMetadata } from '@lib/utils';
import {
    REGULATORY_AFFAIRS_METADATA_TITLE,
    REGULATORY_AFFAIRS_METADATA_DESCRIPTION_X,
    REGULATORY_AFFAIRS_KEYWORDS,
    REGULATORY_AFFAIRS_METADATA_DESCRIPTION,
    REGULATORY_AFFAIRS_IMAGE,
    REGULATORY_AFFAIRS_URL,
} from '@lib/constants';
import {
    RegulatoryAffairsHero,
    RegulatoryHighlightedHeroText,
    RegulatoryCompliance,
    SustainabilityData,
    Membership,
    Latest,
    RegulatoryAffairsMoreToExplore,
    Consultation,
} from '@sections';

import type { Metadata } from 'next';
import { ContactUs } from '@repo/shared/sections';

export const metadata: Metadata = getPageMetadata({
    title: REGULATORY_AFFAIRS_METADATA_TITLE,
    description: REGULATORY_AFFAIRS_METADATA_DESCRIPTION,
    descriptionX: REGULATORY_AFFAIRS_METADATA_DESCRIPTION_X,
    keywords: REGULATORY_AFFAIRS_KEYWORDS,
    image: REGULATORY_AFFAIRS_IMAGE,
    url: REGULATORY_AFFAIRS_URL,
    path: '/our-work/regulatory-affairs',
});

export default function Home() {
    return (
        <>
            <RegulatoryAffairsHero id="hero" />
            <RegulatoryHighlightedHeroText id="highlighted-hero-text" />
            <RegulatoryCompliance id="regulatory-compliance" />
            <SustainabilityData id="sustainability" />
            <Consultation id="consultation" />
            <Latest id="latest" />
            <Membership id="memberships" />
            <RegulatoryAffairsMoreToExplore id="more-to-explore" />
            <ContactUs id="contact" />
        </>
    );
}
