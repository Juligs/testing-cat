import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { HeroProductsuite, ToolingCard, ProductSuiteMoreToExplore } from '@sections';
import { ContactUs } from '@repo/shared/sections';
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
            <ToolingCard id="tooling-card" navbarColorScheme="inverted" />
            <ProductSuiteMoreToExplore id="more to explore" />
            <ContactUs id="contact" />
        </>
    );
}
