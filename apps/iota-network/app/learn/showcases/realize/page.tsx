import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroRealize,
    RealizeContactUs,
    RealizeMoreToExplore,
    RealizePartners,
    RealizeQuotes,
    RealizeTokenization,
} from '@sections';
import {
    REALIZE_METADATA_TITLE,
    REALIZE_METADATA_DESCRIPTION_X,
    REALIZE_KEYWORDS,
    REALIZE_METADATA_DESCRIPTION,
    REALIZE_IMAGE,
    REALIZE_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: REALIZE_METADATA_TITLE,
    description: REALIZE_METADATA_DESCRIPTION,
    descriptionX: REALIZE_METADATA_DESCRIPTION_X,
    keywords: REALIZE_KEYWORDS,
    image: REALIZE_IMAGE,
    url: REALIZE_URL,
    path: '/learn/showcases/realize',
});

export default function Home() {
    return (
        <>
            <HeroRealize id="hero" />
            <RealizePartners id="partners" />
            <RealizeTokenization id="realize-tokenization" />
            <RealizeQuotes id="realize-quotes" />
            <RealizeContactUs id="realize-contact-us" />
            <RealizeMoreToExplore id="explore" />
        </>
    );
}
