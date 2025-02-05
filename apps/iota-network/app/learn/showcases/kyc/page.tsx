import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { KYCHero } from '@sections';
import { KYCContactUs, KYCMoreToExplore, KYCPartners, KYCDeFi } from '@repo/shared/sections';
import {
    KYC_METADATA_TITLE,
    KYC_METADATA_DESCRIPTION_X,
    KYC_KEYWORDS,
    KYC_METADATA_DESCRIPTION,
    KYC_IMAGE,
    KYC_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: KYC_METADATA_TITLE,
    description: KYC_METADATA_DESCRIPTION,
    descriptionX: KYC_METADATA_DESCRIPTION_X,
    keywords: KYC_KEYWORDS,
    image: KYC_IMAGE,
    url: KYC_URL,
});

export default function Home() {
    return (
        <>
            <KYCHero id="hero" />
            <KYCPartners id="partners" />
            <KYCDeFi id="defi" />
            <KYCContactUs id="contact-us" />
            <KYCMoreToExplore id="explore" />
        </>
    );
}
