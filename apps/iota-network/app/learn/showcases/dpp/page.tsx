import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { DPPHero } from '@sections';
import { DPPContactUs, DPPMoreToExplore, DPPPartners, DPPLifecycles } from '@repo/shared/sections';
import {
    DPP_METADATA_TITLE,
    DPP_METADATA_DESCRIPTION_X,
    DPP_KEYWORDS,
    DPP_METADATA_DESCRIPTION,
    DPP_IMAGE,
    DPP_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: DPP_METADATA_TITLE,
    description: DPP_METADATA_DESCRIPTION,
    descriptionX: DPP_METADATA_DESCRIPTION_X,
    keywords: DPP_KEYWORDS,
    image: DPP_IMAGE,
    url: DPP_URL,
    path: '/learn/showcases/dpp',
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
