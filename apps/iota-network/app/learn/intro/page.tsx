import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    LearnPageHero,
    PermissionlessWeb3,
    WhatIsIOTA,
    OurFeatures,
    ProvenInWild,
    BetterDLT,
    GreaterThanSumOfParts,
    OurFocusAreas,
    StreamliningInnovation,
    MakeYourProjectReal,
    IntroMoreToExplore,
} from '@sections';

import {
    INTRO_METADATA_TITLE,
    INTRO_METADATA_DESCRIPTION_X,
    INTRO_KEYWORDS,
    INTRO_METADATA_DESCRIPTION,
    INTRO_IMAGE,
    INTRO_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: INTRO_METADATA_TITLE,
    description: INTRO_METADATA_DESCRIPTION,
    descriptionX: INTRO_METADATA_DESCRIPTION_X,
    keywords: INTRO_KEYWORDS,
    image: INTRO_IMAGE,
    url: INTRO_URL,
    path: '/learn/intro',
});

export default function Home() {
    return (
        <>
            <LearnPageHero id="hero" theme="inverted" />
            <PermissionlessWeb3 id="permissionless-web3" />
            <WhatIsIOTA id="what-is-iota" />
            <OurFeatures id="our-features" />
            <ProvenInWild id="proven-in-wild" />
            <BetterDLT id="better-dlt" />
            <GreaterThanSumOfParts id="greater-than-sum-of-parts" />
            <OurFocusAreas id="our-focus-areas" theme="inverted" />
            <StreamliningInnovation id="streamlining-innovation" />
            <MakeYourProjectReal id="make-your-project-real" theme="inverted" />
            <IntroMoreToExplore id="explore" />
        </>
    );
}
