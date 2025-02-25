import { getPageMetadata } from '@lib/utils';
import {
    PURPOSE_METADATA_TITLE,
    PURPOSE_METADATA_DESCRIPTION_X,
    PURPOSE_KEYWORDS,
    PURPOSE_METADATA_DESCRIPTION,
    PURPOSE_IMAGE,
    PURPOSE_URL,
} from '@lib/constants';
import {
    PurposePageHero,
    PurposeOverview,
    WhereWeAreHeaded,
    HowWeGetThere,
    WhatGuidesUs,
    PurposeMoreToExplore,
} from '@sections';

import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: PURPOSE_METADATA_TITLE,
    description: PURPOSE_METADATA_DESCRIPTION,
    descriptionX: PURPOSE_METADATA_DESCRIPTION_X,
    keywords: PURPOSE_KEYWORDS,
    image: PURPOSE_IMAGE,
    url: PURPOSE_URL,
    path: '/purpose',
});

export default function Home() {
    return (
        <>
            <PurposePageHero id="hero" />
            <PurposeOverview id="overview" />
            <WhereWeAreHeaded id="where-we-are-headed" />
            <HowWeGetThere id="how-we-get-there" />
            <WhatGuidesUs id="what-guides-us" />
            <PurposeMoreToExplore id="more-to-explore" />
        </>
    );
}
