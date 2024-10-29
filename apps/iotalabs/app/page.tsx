import type { Metadata } from 'next';

import {
    Hero,
    FirstSection,
    SecondSection,
    ThirdSection,
    FifthSection,
    FourthSection,
    EighthSection,
    NinthSection,
    LastSection,
} from '@sections';
import { getPageMetadata } from '@lib/utils';
import { Suspense } from 'react';

const METADATA_TITLE = 'Power Up Your Builder Journey';
const METADATA_DESCRIPTION =
    'iotalabs propels the IOTA ecosystem through grants, growth initiatives, builder support, and strategic partnerships. Join us in shaping the future of IOTA—one breakthrough at a time.';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <Hero id="hero-inverted" />
            <FirstSection id="first-section" />
            <SecondSection id="second-section" />
            <ThirdSection id="third-section-inverted" />
            <FourthSection id="fourth-section" />
            <FifthSection id="fifth-section" />
            <Suspense fallback={<div className="container">Loading...</div>}>
                <EighthSection id="eighth-section" />
            </Suspense>
            <NinthSection id="ninth-section" />
            <LastSection id="last-section" />
        </>
    );
}
