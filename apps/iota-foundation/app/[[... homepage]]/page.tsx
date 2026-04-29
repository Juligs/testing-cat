import {
    HOMEPAGE_IMAGE,
    HOMEPAGE_KEYWORDS,
    HOMEPAGE_METADATA_DESCRIPTION,
    HOMEPAGE_METADATA_DESCRIPTION_X,
    HOMEPAGE_METADATA_TITLE,
    HOMEPAGE_URL,
} from '@lib/constants';
import { getPageMetadata } from '@lib/utils';
import {
    DLTInnovation,
    ExploreIota,
    FoundationStats,
    Hero,
    OurFocusAreas,
    OurPartners,
    OurPurpose,
} from '@sections';

import { HomepageRedirect } from '@repo/shared/components';
import { ContactUs } from '@repo/shared/sections';
import type { Metadata } from 'next';
import { FetchBlogPostsSection } from '@repo/shared/utils/ghost-blog/FetchBlogPostData';

export const metadata: Metadata = getPageMetadata({
    title: HOMEPAGE_METADATA_TITLE,
    description: HOMEPAGE_METADATA_DESCRIPTION,
    descriptionX: HOMEPAGE_METADATA_DESCRIPTION_X,
    keywords: HOMEPAGE_KEYWORDS,
    image: HOMEPAGE_IMAGE,
    url: HOMEPAGE_URL,
    path: '/',
});

export default function Home() {
    return (
        <>
            <Hero id="hero" />
            <FoundationStats id="foundation-stat" />
            <OurPurpose id="our-purpose" />
            <OurFocusAreas id="our-focus-areas" />
            <OurPartners id="our-partners" />
            <ExploreIota id="explore-iota" />
            <DLTInnovation id="dlt" />
            <FetchBlogPostsSection
                source="network"
                contentTitle={{ subtitle: 'Official news, insights, and deep dives from IOTA' }}
                id="blog-post"
            />
            <ContactUs id="contact" />
            <HomepageRedirect />
        </>
    );
}
