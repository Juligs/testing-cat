import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    SUSTAINABILITY_METADATA_TITLE,
    SUSTAINABILITY_METADATA_DESCRIPTION_X,
    SUSTAINABILITY_KEYWORDS,
    SUSTAINABILITY_METADATA_DESCRIPTION,
    SUSTAINABILITY_IMAGE,
    SUSTAINABILITY_URL,
} from '@lib/constants';
import {
    CCRI,
    CollectedDataPoints,
    ComparisonOfElectricity,
    EnergyEfficiency,
    GlossaryMica,
    HeroSustainabilityFoundation,
    HistoricalData,
    MoreToExploreSustainability,
    SustainabilityOverview,
} from '@sections';
import { ContactUs } from '@repo/shared/sections';
export const metadata: Metadata = getPageMetadata({
    title: SUSTAINABILITY_METADATA_TITLE,
    description: SUSTAINABILITY_METADATA_DESCRIPTION,
    descriptionX: SUSTAINABILITY_METADATA_DESCRIPTION_X,
    keywords: SUSTAINABILITY_KEYWORDS,
    image: SUSTAINABILITY_IMAGE,
    url: SUSTAINABILITY_URL,
    path: '/sustainability',
});

export default function Home() {
    return (
        <>
            <HeroSustainabilityFoundation id="hero" />
            <SustainabilityOverview id="sustainability-overview" />
            <EnergyEfficiency id="energy-efficiency" />
            <ComparisonOfElectricity id="comparison-of-electricity" />
            <HistoricalData id="historical-data" />
            <GlossaryMica id="glossary-mica" />
            <CCRI id="ccri" />
            <CollectedDataPoints id="collected-data-points" />
            <MoreToExploreSustainability id="more-to-explore" />
            <ContactUs id="contact-us" />
        </>
    );
}
