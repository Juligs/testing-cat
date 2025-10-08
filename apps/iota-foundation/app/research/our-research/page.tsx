import { getPageMetadata } from '@lib/utils';
import {
    OUR_RESEARCH_METADATA_TITLE,
    OUR_RESEARCH_METADATA_DESCRIPTION_X,
    OUR_RESEARCH_KEYWORDS,
    OUR_RESEARCH_METADATA_DESCRIPTION,
    OUR_RESEARCH_IMAGE,
    OUR_RESEARCH_URL,
} from '@lib/constants';
import {
    OurResearchHero,
    DLTResearch,
    OurResearchOverview,
    KeyAreas,
    DLTLeader,
    OurResearchMoreToExplore,
} from '@sections';
import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: OUR_RESEARCH_METADATA_TITLE,
    description: OUR_RESEARCH_METADATA_DESCRIPTION,
    descriptionX: OUR_RESEARCH_METADATA_DESCRIPTION_X,
    keywords: OUR_RESEARCH_KEYWORDS,
    image: OUR_RESEARCH_IMAGE,
    url: OUR_RESEARCH_URL,
    path: '/research/our-research',
});

export default function Home() {
    return (
        <>
            <OurResearchHero id="hero" />
            <DLTResearch id="dlt-research" />
            <OurResearchOverview id="overview" />
            <KeyAreas id="key-areas" />
            <DLTLeader id="dlt-leader" />
            <OurResearchMoreToExplore id="explore" />
        </>
    );
}
