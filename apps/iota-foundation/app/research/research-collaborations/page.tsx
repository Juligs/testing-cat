import { getPageMetadata } from '@lib/utils';
import {
    RESEARCH_COLLABS_METADATA_TITLE,
    RESEARCH_COLLABS_METADATA_DESCRIPTION_X,
    RESEARCH_COLLABS_KEYWORDS,
    RESEARCH_COLLABS_METADATA_DESCRIPTION,
    RESEARCH_COLLABS_IMAGE,
    RESEARCH_COLLABS_URL,
} from '@lib/constants';
import {
    ResearchCollaborationsHero,
    ResearchPartners,
    ResearchCollaborationsOverview,
    ILab,
    ICircular3,
    UZH,
    UniversityOfOslo,
    CDL,
    ResearchCollaborationsMoreToExplore,
} from '@sections';

import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: RESEARCH_COLLABS_METADATA_TITLE,
    description: RESEARCH_COLLABS_METADATA_DESCRIPTION,
    descriptionX: RESEARCH_COLLABS_METADATA_DESCRIPTION_X,
    keywords: RESEARCH_COLLABS_KEYWORDS,
    image: RESEARCH_COLLABS_IMAGE,
    url: RESEARCH_COLLABS_URL,
    path: '/research/research-collaborations',
});

export default function Home() {
    return (
        <>
            <ResearchCollaborationsHero id="hero" />
            <ResearchPartners id="partners" />
            <ResearchCollaborationsOverview id="overview" />
            <ILab id="ilab" />
            <ICircular3 id="icircular3" />
            <UZH id="uzh" />
            <UniversityOfOslo id="university-of-oslo" />
            <CDL id="cdl" />
            <ResearchCollaborationsMoreToExplore id="explore" />
        </>
    );
}
