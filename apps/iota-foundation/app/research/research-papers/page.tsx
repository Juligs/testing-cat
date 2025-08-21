import { getPageMetadata } from '@lib/utils';
import {
    RESEARCH_PAPERS_METADATA_TITLE,
    RESEARCH_PAPERS_METADATA_DESCRIPTION_X,
    RESEARCH_PAPERS_KEYWORDS,
    RESEARCH_PAPERS_METADATA_DESCRIPTION,
    RESEARCH_PAPERS_IMAGE,
    RESEARCH_PAPERS_URL,
} from '@lib/constants';
import {
    GoogleScholar,
    HeroResearchPapers,
    ResearchPapersOverview,
    Papers,
    ResearchPapersMoreToExplore,
} from '@sections';

import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: RESEARCH_PAPERS_METADATA_TITLE,
    description: RESEARCH_PAPERS_METADATA_DESCRIPTION,
    descriptionX: RESEARCH_PAPERS_METADATA_DESCRIPTION_X,
    keywords: RESEARCH_PAPERS_KEYWORDS,
    image: RESEARCH_PAPERS_IMAGE,
    url: RESEARCH_PAPERS_URL,
    path: '/research/research-papers',
});

export default function Home() {
    return (
        <>
            <HeroResearchPapers id="hero" />
            <ResearchPapersOverview id="overview" />
            <GoogleScholar id="google-scholar" />
            <Papers id="papers" />
            <ResearchPapersMoreToExplore id="more-to-explore" />
        </>
    );
}
