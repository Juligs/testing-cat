import { getPageMetadata } from '@lib/utils';
import {
    HeroTrustFramework,
    TrustFrameworkOverview,
    AddressingBusiness,
    PoweredByIota,
    FiveProducts,
    HowItWorksFramework,
    WhyIotaTrustFramework,
    RealWorld,
    ExperienceIota,
    ContactUsTrustFramework,
    MoreToExploreTrustFramework,
} from '@sections';
import {
    TRUST_FRAMEWORK_METADATA_TITLE,
    TRUST_FRAMEWORK_METADATA_DESCRIPTION_X,
    TRUST_FRAMEWORK_KEYWORDS,
    TRUST_FRAMEWORK_METADATA_DESCRIPTION,
    TRUST_FRAMEWORK_IMAGE,
    TRUST_FRAMEWORK_URL,
} from '@lib/constants';

import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: TRUST_FRAMEWORK_METADATA_TITLE,
    description: TRUST_FRAMEWORK_METADATA_DESCRIPTION,
    descriptionX: TRUST_FRAMEWORK_METADATA_DESCRIPTION_X,
    keywords: TRUST_FRAMEWORK_KEYWORDS,
    image: TRUST_FRAMEWORK_IMAGE,
    url: TRUST_FRAMEWORK_URL,
    path: '/learn/trust-framework',
});

export default function Home() {
    return (
        <>
            <HeroTrustFramework id="hero" navbarColorScheme="inverted" />
            <TrustFrameworkOverview id="trust-framework-overview" />
            <FiveProducts id="five-products" />
            <PoweredByIota id="powered-iota" />
            <AddressingBusiness id="what-is-it" />
            <HowItWorksFramework id="how-it-works" />
            <WhyIotaTrustFramework id="why-iota" />
            <RealWorld id="key-capabilities" />
            <ExperienceIota id="experience-iota" />
            <ContactUsTrustFramework id="contact" />
            <MoreToExploreTrustFramework id="more-to-explore" />
        </>
    );
}
