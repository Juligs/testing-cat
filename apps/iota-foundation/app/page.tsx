import { getPageMetadata } from '@lib/utils';
import {
    HOMEPAGE_METADATA_TITLE,
    HOMEPAGE_METADATA_DESCRIPTION_X,
    HOMEPAGE_KEYWORDS,
    HOMEPAGE_METADATA_DESCRIPTION,
    HOMEPAGE_IMAGE,
    HOMEPAGE_URL,
} from '@lib/constants';
import {
    Hero,
    FoundationStats,
    OurPurpose,
    OurFocusAreas,
    OurPartners,
    ExploreIota,
    DLTInnovation,
    FoundationBlog,
} from '@sections';

import { Rwa, LighthouseProjects, ContactUs } from '@repo/shared/sections';
import type { Metadata } from 'next';

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
            <FoundationStats id="foundation-stats" />
            <OurPurpose id="our-purpose" />
            <OurFocusAreas id="our-focus-areas" />
            <OurPartners id="our-partners" />
            <Rwa id="rwa" />
            <LighthouseProjects id="lighthouse-projects" animation={false} />
            <ExploreIota id="explore-iota" />
            <DLTInnovation id="dlt" />
            <FoundationBlog id="foundation-blog" />
            <ContactUs id="contact" />
        </>
    );
}
