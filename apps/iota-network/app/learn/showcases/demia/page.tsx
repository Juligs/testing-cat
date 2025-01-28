import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { DemiaHero } from '@sections';
import { DemiaLastSection, DemiaSection1, DemiaSection2 } from '@repo/shared/sections';

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
            <DemiaSection1 id="section1" />
            <DemiaSection2 id="section2" />
            <DemiaLastSection id="last-section" />
        </>
    );
}
