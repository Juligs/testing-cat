import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { DPPHero } from '@sections';
import { DPPContactUs, DPPMoreToExplore, DPPPartners, DPPLifecycles } from '@repo/shared/sections';

const METADATA_TITLE = 'Digital Product Passports';
const METADATA_DESCRIPTION = 'Secure, transparent product lifecycle data for a circular economy';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <DPPHero id="hero" />
            <DPPPartners id="partners" />
            <DPPLifecycles id="lifecycles" />
            <DPPContactUs id="contact-us" />
            <DPPMoreToExplore id="explore" />
        </>
    );
}
