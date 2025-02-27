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
    title: OUR_RESEARCH_METADATA_TITLE,
    description: OUR_RESEARCH_METADATA_DESCRIPTION,
    descriptionX: OUR_RESEARCH_METADATA_DESCRIPTION_X,
    keywords: OUR_RESEARCH_KEYWORDS,
    image: OUR_RESEARCH_IMAGE,
    url: OUR_RESEARCH_URL,
    path: '/reasearch/our-reasearch',
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
