import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { TwinHero } from '@sections';
import {
    TwinMoreToExplore,
    TwinPaperless,
    TwinPartners,
    TwinContactUs,
} from '@repo/shared/sections';

const METADATA_TITLE = 'TWIN';
const METADATA_DESCRIPTION = 'Seamless transfer of digital trade data across borders';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <TwinHero id="hero" />
            <TwinPartners id="partners" />
            <TwinPaperless id="paperless" />
            <TwinContactUs id="contact-us" />
            <TwinMoreToExplore id="explore" />
        </>
    );
}
