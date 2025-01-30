import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { CorePageHero, CorePageSection1, CoreLastSection, ContactUsSection } from '@sections';
import {
    RealWorldAssetTokenizationSection,
    TradeAndSupplyChainsSection,
    DigitalIdentitySection,
    CircularEconomy,
    DecentralizedFinance,
} from '@repo/shared/sections';

const METADATA_TITLE = 'Core Domains';
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
            <CorePageSection1 id="section1" />
            <RealWorldAssetTokenizationSection id="real-world-asset-tokenization" />
            <TradeAndSupplyChainsSection id="trade-and-supply-chains" />
            <DigitalIdentitySection id="digital-identity" />
            <CircularEconomy id="circular-economy" />
            <DecentralizedFinance id="decentralized-finance" />
            <CoreLastSection id="lastSection" />
            <ContactUsSection id="contact" />
        </>
    );
}
