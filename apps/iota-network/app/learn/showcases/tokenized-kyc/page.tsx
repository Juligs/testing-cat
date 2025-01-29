import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { KYCHero } from '@sections';
import { KYCContactUs, KYCMoreToExplore, KYCPartners, KYCDeFi } from '@repo/shared/sections';

const METADATA_TITLE = 'Tokenized KYC';
const METADATA_DESCRIPTION = 'Privacy-preserving on-chain authentication';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
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
