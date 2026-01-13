import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    BuildTools,
    HeroProductsuite,
    IntegrationStackProducts,
    ProductSuiteMoreToExplore,
    ServicesDapps,
    TrustFrameworkProducts,
} from '@sections';
import {
    PRODUCT_SUITE_METADATA_TITLE,
    PRODUCT_SUITE_METADATA_DESCRIPTION_X,
    PRODUCT_SUITE_KEYWORDS,
    PRODUCT_SUITE_METADATA_DESCRIPTION,
    PRODUCT_SUITE_IMAGE,
    PRODUCT_SUITE_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: PRODUCT_SUITE_METADATA_TITLE,
    description: PRODUCT_SUITE_METADATA_DESCRIPTION,
    descriptionX: PRODUCT_SUITE_METADATA_DESCRIPTION_X,
    keywords: PRODUCT_SUITE_KEYWORDS,
    image: PRODUCT_SUITE_IMAGE,
    url: PRODUCT_SUITE_URL,
    path: '/products/product-suite',
});

export default function Home() {
    return (
        <>
            <HeroProductsuite id="hero" navbarColorScheme="inverted" />
            <IntegrationStackProducts
                id="integration-stack-products"
                navbarColorScheme="inverted"
            />
            <TrustFrameworkProducts id="trust-framework-products" />
            <ServicesDapps id="services-&-dapps" />
            <BuildTools id="build-tools" />
            <ProductSuiteMoreToExplore id="more to explore" />
        </>
    );
}
