import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { EbsiHero, EbsiMoreToExplore } from '@sections';
import { EbsiContactUs, EbsiPartners, EbsiScalable } from '@repo/shared/sections';
import {
    EBSI_METADATA_TITLE,
    EBSI_METADATA_DESCRIPTION_X,
    EBSI_KEYWORDS,
    EBSI_METADATA_DESCRIPTION,
    EBSI_IMAGE,
    EBSI_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: EBSI_METADATA_TITLE,
    description: EBSI_METADATA_DESCRIPTION,
    descriptionX: EBSI_METADATA_DESCRIPTION_X,
    keywords: EBSI_KEYWORDS,
    image: EBSI_IMAGE,
    url: EBSI_URL,
    path: '/our-work/showcases/ebsi',
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
