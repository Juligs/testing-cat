import { getPageMetadata } from '@lib/utils';
import { LighthouseProjects, RwaSection } from '@repo/shared/sections';
import { Hero, Section2, Section3, Section4, Section7, Section8, Section10 } from '@sections';
import type { Metadata } from 'next';

const METADATA_TITLE = 'We Bring the Real World to Web3';
const METADATA_DESCRIPTION =
    'IOTA builds public blockchain infrastructure to integrate Web3 with the real world.';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <Hero id="hero" theme="inverted" />
            <Section2 id="section-2" theme="inverted" />
            <Section3 id="section-3" />
            <Section4 id="section-4" />
            <RwaSection id="real-world-adoption" />
            <LighthouseProjects id="lighthouse-projects" />
            <Section7 id="section-7" />
            <Section8 id="section-8" theme="inverted" />
            <Section10 id="section-10" />
        </>
    );
}
