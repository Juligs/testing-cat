import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroGasStation,
    GasStationOverview,
    SolvingFee,
    KeyCapabilitiesGasStation,
    FlexibleUseCases,
    WhyIotaGas,
    GasContactUs,
    IotaTechnologyStack,
    ShowcaseProject,
} from '@sections';
import {
    GAS_STATION_METADATA_TITLE,
    GAS_STATION_METADATA_DESCRIPTION_X,
    GAS_STATION_KEYWORDS,
    GAS_STATION_METADATA_DESCRIPTION,
    GAS_STATION_IMAGE,
    GAS_STATION_URL,
} from '@lib/constants';
import { HowItWorksGas } from '@sections/products/gas-station/HowItWorksGas';
import { GasMoreToExplore } from '@sections/products/gas-station/GasMoreToExplore';
import {
    DppTrustFrameworkTeaser,
    PRODUCT_GAS_STATION,
} from '@components/dpp-trust-framework-teaser';
export const metadata: Metadata = getPageMetadata({
    title: GAS_STATION_METADATA_TITLE,
    description: GAS_STATION_METADATA_DESCRIPTION,
    descriptionX: GAS_STATION_METADATA_DESCRIPTION_X,
    keywords: GAS_STATION_KEYWORDS,
    image: GAS_STATION_IMAGE,
    url: GAS_STATION_URL,
    path: '/products/wallet',
});

export default function Home() {
    return (
        <>
            <HeroGasStation id="hero" navbarColorScheme="inverted" />
            <GasStationOverview id="overview" />
            <SolvingFee id="SolvingFee" />
            <HowItWorksGas id="how-it-works" />
            <KeyCapabilitiesGasStation id="key-capabilities" />
            <FlexibleUseCases id="flexible-use-cases" />
            <WhyIotaGas id="tech-and-tooling" />
            <IotaTechnologyStack
                showcases={[
                    ShowcaseProject.Impierce,
                    ShowcaseProject.Orobo,
                    ShowcaseProject.ObjectID,
                    ShowcaseProject.Salus,
                ]}
            />
            <DppTrustFrameworkTeaser id="dpp-trust-framework" productName={PRODUCT_GAS_STATION} />
            <GasContactUs id="contact-us" />
            <GasMoreToExplore id="more to explore" />
        </>
    );
}
