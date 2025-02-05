import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { MultiknipHero } from '@sections';
import {
    MultiKnipContactUs,
    MultiKnipDigitalWallet,
    MultiKnipMoreToExplore,
    MultiKnipPartners,
    MultiKnipQuotes,
} from '@repo/shared/sections';
import {
    MULTIKNIP_METADATA_TITLE,
    MULTIKNIP_METADATA_DESCRIPTION_X,
    MULTIKNIP_KEYWORDS,
    MULTIKNIP_METADATA_DESCRIPTION,
    MULTIKNIP_IMAGE,
    MULTIKNIP_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: MULTIKNIP_METADATA_TITLE,
    description: MULTIKNIP_METADATA_DESCRIPTION,
    descriptionX: MULTIKNIP_METADATA_DESCRIPTION_X,
    keywords: MULTIKNIP_KEYWORDS,
    image: MULTIKNIP_IMAGE,
    url: MULTIKNIP_URL,
    path: '/learn/showcases/multiknip',
});

export default function Home() {
    return (
        <>
            <MultiknipHero id="hero" />
            <MultiKnipPartners id="partners" />
            <MultiKnipDigitalWallet id="digital-wallet" />
            <MultiKnipQuotes id="quotes" />
            <MultiKnipContactUs id="contact-us" />
            <MultiKnipMoreToExplore id="explore" />
        </>
    );
}
