import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    CorePageHero,
    DrivingInnovationAdoption,
    FocusAreasMoreToExplore,
    ContactUs,
} from '@sections';
import {
    RealWorldAssetTokenization,
    TradeAndSupplyChains,
    DigitalIdentity,
    CircularEconomy,
    DecentralizedFinance,
} from '@repo/shared/sections';

const METADATA_TITLE = 'Focus Areas';
const METADATA_DESCRIPTION =
    'Explore our diverse focus areas leveraging DLT to address real business needs';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <CorePageHero id="hero" theme="inverted" />
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
