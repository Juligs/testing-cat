import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { EbsiHero } from '@sections';
import {
    EbsiContactUs,
    EbsiMoreToExplore,
    EbsiPartners,
    EbsiScalable,
} from '@repo/shared/sections';

const METADATA_TITLE = 'European Blockchain Pre-Commercial Procurement';
const METADATA_DESCRIPTION = 'IOTA solutions for a pan-European blockchain';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <EbsiHero id="hero" />
            <EbsiPartners id="partners" />
            <EbsiScalable id="scalable" />
            <EbsiContactUs id="contact-us" />
            <EbsiMoreToExplore id="explore" />
        </>
    );
}
