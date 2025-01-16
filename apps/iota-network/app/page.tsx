import { getPageMetadata } from '@lib/utils';
import { LighthouseProjects } from '@repo/shared/components';
import { Hero, Section2, Section9 } from '@sections';
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
            <Hero id="hero" />
            <Section2 id="section-2" />
            <LighthouseProjects id="lighthouse-projects" />
            <Section9 id="section-9" />
        </>
    );
}
