import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { DemiaHero } from '@sections';
import {
    DemiaContactUs,
    DemiaMoreToExplore,
    DemiaCarbonEmissions,
    DemiaPartners,
} from '@repo/shared/sections';

const METADATA_TITLE = 'Demia';
const METADATA_DESCRIPTION = 'Enabling trust in carbon markets';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
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
