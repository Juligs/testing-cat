import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { DemiaHero } from '@sections';
import {
    DemiaContactUs,
    DemiaMoreToExplore,
    DemiaCarbonEmissions,
    DemiaPartners,
} from '@repo/shared/sections';
import {
    DEMIA_METADATA_TITLE,
    DEMIA_METADATA_DESCRIPTION_X,
    DEMIA_KEYWORDS,
    DEMIA_METADATA_DESCRIPTION,
    DEMIA_IMAGE,
    DEMIA_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: DEMIA_METADATA_TITLE,
    description: DEMIA_METADATA_DESCRIPTION,
    descriptionX: DEMIA_METADATA_DESCRIPTION_X,
    keywords: DEMIA_KEYWORDS,
    image: DEMIA_IMAGE,
    url: DEMIA_URL,
});

export default function Home() {
    return (
        <>
            <DemiaHero id="hero" />
            <DemiaPartners id="partners" />
            <DemiaCarbonEmissions id="emissions" />
            <DemiaContactUs id="contact-us" />
            <DemiaMoreToExplore id="explore" />
        </>
    );
}
