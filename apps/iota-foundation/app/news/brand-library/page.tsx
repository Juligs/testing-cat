import { getPageMetadata } from '@lib/utils';
import {
    BRAND_LIBRARY_METADATA_TITLE,
    BRAND_LIBRARY_METADATA_DESCRIPTION_X,
    BRAND_LIBRARY_KEYWORDS,
    BRAND_LIBRARY_METADATA_DESCRIPTION,
    BRAND_LIBRARY_IMAGE,
    BRAND_LIBRARY_URL,
} from '@lib/constants';
import {
    BrandAssets,
    BrandLibraryMoreToExplore,
    BrandLibraryOverview,
    HeroBrandLibrary,
} from '@sections';

import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: BRAND_LIBRARY_METADATA_TITLE,
    description: BRAND_LIBRARY_METADATA_DESCRIPTION,
    descriptionX: BRAND_LIBRARY_METADATA_DESCRIPTION_X,
    keywords: BRAND_LIBRARY_KEYWORDS,
    image: BRAND_LIBRARY_IMAGE,
    url: BRAND_LIBRARY_URL,
    path: '/news/brand-library',
});

export default function Home() {
    return (
        <>
            <HeroBrandLibrary id="hero" />
            <BrandLibraryOverview id="overview" />
            <BrandAssets id="assets" />
            <BrandLibraryMoreToExplore id="more-to-explore" />
        </>
    );
}
