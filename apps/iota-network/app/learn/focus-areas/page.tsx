import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';

import { CorePageHero, DrivingInnovationAdoption, FocusAreasMoreToExplore } from '@sections';
import {
    RealWorldAssetTokenization,
    TradeAndSupplyChains,
    DigitalIdentity,
    CircularEconomy,
    DecentralizedFinance,
    ContactUs,
} from '@repo/shared/sections';
import {
    FOCUS_AREAS_METADATA_TITLE,
    FOCUS_AREAS_METADATA_DESCRIPTION_X,
    FOCUS_AREAS_KEYWORDS,
    FOCUS_AREAS_METADATA_DESCRIPTION,
    FOCUS_AREAS_IMAGE,
    FOCUS_AREAS_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: FOCUS_AREAS_METADATA_TITLE,
    description: FOCUS_AREAS_METADATA_DESCRIPTION,
    descriptionX: FOCUS_AREAS_METADATA_DESCRIPTION_X,
    keywords: FOCUS_AREAS_KEYWORDS,
    image: FOCUS_AREAS_IMAGE,
    url: FOCUS_AREAS_URL,
    path: '/learn/focus-areas',
});

export default function Home() {
    return (
        <>
            <CorePageHero id="hero" navbarColorScheme="inverted" />
            <DrivingInnovationAdoption id="driving-innovation-adoption" />
            <RealWorldAssetTokenization id="real-world-asset-tokenization" />
            <TradeAndSupplyChains id="trade-and-supply-chains" />
            <DigitalIdentity id="digital-identity" />
            <CircularEconomy id="circular-economy" />
            <DecentralizedFinance id="decentralized-finance" />
            <FocusAreasMoreToExplore id="explore" />
            <ContactUs id="contact" />
        </>
    );
}
