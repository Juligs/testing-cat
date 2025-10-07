import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroIdentity,
    IdentityOverview,
    DigitalIdentity,
    HowItWorks,
    KeyCapabilities,
    WhyIota,
    Tooling,
    ZeroKnowledge,
    IdentityIotaTechnologyStack,
    IdentityContactUs,
    IdentityMoreToExplore,
} from '@sections';
import {
    IDENTITY_METADATA_TITLE,
    IDENTITY_METADATA_DESCRIPTION_X,
    IDENTITY_KEYWORDS,
    IDENTITY_METADATA_DESCRIPTION,
    IDENTITY_IMAGE,
    IDENTITY_URL,
} from '@lib/constants';
import { DppTrustFrameworkTeaser, PRODUCT_IDENTITY } from '@components/dpp-trust-framework-teaser';
export const metadata: Metadata = getPageMetadata({
    title: IDENTITY_METADATA_TITLE,
    description: IDENTITY_METADATA_DESCRIPTION,
    descriptionX: IDENTITY_METADATA_DESCRIPTION_X,
    keywords: IDENTITY_KEYWORDS,
    image: IDENTITY_IMAGE,
    url: IDENTITY_URL,
    path: '/products/identity',
});

export default function Home() {
    return (
        <>
            <HeroIdentity id="hero" navbarColorScheme="inverted" />
            <IdentityOverview id="overview" navbarColorScheme="inverted" />
            <DigitalIdentity id="digital-identity" />
            <HowItWorks id="how-it-works" />
            <KeyCapabilities id="key-capabilities" />
            <WhyIota id="why-iota" />
            <Tooling id="tooling" />
            <ZeroKnowledge id="zero-knowledge" />
            <IdentityIotaTechnologyStack id="iota-tecnholgy-stack" />
            <DppTrustFrameworkTeaser id="dpp-trust-framework" productName={PRODUCT_IDENTITY} />
            <IdentityContactUs id="contact-us" />
            <IdentityMoreToExplore id="more-to-explore" />
        </>
    );
}
