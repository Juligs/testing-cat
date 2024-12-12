import type { Metadata } from 'next';

import {
    Hero,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    // Section6,
    // Section8,
    Section7,
    Section9,
    Section11,
} from '@sections';
import { getPageMetadata } from '@lib/utils';
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
            <Section1 id="section-1" />
            <Section2 id="section-2" />
            <Section3 id="section-3-inverted" />
            <Section4 id="section-4" />
            <Section5 id="section-5" />
            {/* <Section6 id="section-6" /> */}
            <Section7 id="section-7-inverted" />
            {/* <Section8 id="section-8" /> */}
            <Section9 id="section-9" />
            <Section11 id="section-11" />
        </>
    );
}
