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
    OurCoreDomains,
    StreamliningInnovation,
    MakeYourProjectReal,
    IntroMoreToExplore,
} from '@sections';

const METADATA_TITLE = 'Learn';
const METADATA_DESCRIPTION = 'We Build Cutting-Edge Technology';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
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
            <OurCoreDomains id="our-core-domains" theme="inverted" />
            <StreamliningInnovation id="streamlining-innovation" />
            <MakeYourProjectReal id="make-your-project-real" theme="inverted" />
            <IntroMoreToExplore id="explore" />
        </>
    );
}
