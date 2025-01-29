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

const METADATA_TITLE = 'MultiKnip';
const METADATA_DESCRIPTION = 'Using digital tokens to drive purpose, value and change';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
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
