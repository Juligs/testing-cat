import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroTokenization,
    TokenizationOverview,
    UnlockThePower,
    WhyTokenizedWithIOTA,
    Customization,
    NFTByDefault,
    CoinsAndsTokens,
    TokenizationMoreToExplore,
    IotaTechnologyStack,
    ShowcaseProject,
} from '@sections';
import {
    TOKENIZATION_METADATA_TITLE,
    TOKENIZATION_METADATA_DESCRIPTION_X,
    TOKENIZATION_KEYWORDS,
    TOKENIZATION_METADATA_DESCRIPTION,
    TOKENIZATION_IMAGE,
    TOKENIZATION_URL,
} from '@lib/constants';
import {
    DppTrustFrameworkTeaser,
    PRODUCT_TOKENIZATION,
} from '@components/dpp-trust-framework-teaser';
export const metadata: Metadata = getPageMetadata({
    title: TOKENIZATION_METADATA_TITLE,
    description: TOKENIZATION_METADATA_DESCRIPTION,
    descriptionX: TOKENIZATION_METADATA_DESCRIPTION_X,
    keywords: TOKENIZATION_KEYWORDS,
    image: TOKENIZATION_IMAGE,
    url: TOKENIZATION_URL,
    path: '/products/tokenization',
});

export default function Home() {
    return (
        <>
            <HeroTokenization id="hero" navbarColorScheme="inverted" />
            <TokenizationOverview id="overview" />
            <UnlockThePower id="unlock-the-power" />
            <WhyTokenizedWithIOTA id="why-tokenized-with-iota" />
            <Customization id="customization" />
            <NFTByDefault id="nft-by-default" />
            <CoinsAndsTokens id="coins-and-tokens" />
            <IotaTechnologyStack
                id="rwa"
                showcases={[
                    ShowcaseProject.Impierce,
                    ShowcaseProject.Orobo,
                    ShowcaseProject.ObjectID,
                    ShowcaseProject.TuringSpace,
                ]}
            />
            <DppTrustFrameworkTeaser id="dpp-trust-framework" productName={PRODUCT_TOKENIZATION} />
            <TokenizationMoreToExplore id="more-to-explore" />
        </>
    );
}
