import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    GrantsOverview,
    HeroGrants,
    ProjectFundingGrants,
    GrantsSupportedInitiatives,
    OurFundingGuidelines,
    GrantsHowToApply,
    GrantsMoreToExplore,
} from '@sections';
import { ContactUs } from '@repo/shared/sections';
import {
    GRANTS_METADATA_TITLE,
    GRANTS_METADATA_DESCRIPTION_X,
    GRANTS_KEYWORDS,
    GRANTS_METADATA_DESCRIPTION,
    GRANTS_IMAGE,
    GRANTS_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: GRANTS_METADATA_TITLE,
    description: GRANTS_METADATA_DESCRIPTION,
    descriptionX: GRANTS_METADATA_DESCRIPTION_X,
    keywords: GRANTS_KEYWORDS,
    image: GRANTS_IMAGE,
    url: GRANTS_URL,
    path: '/build/grants',
});

export default function Home() {
    return (
        <>
            <HeroGrants id="hero" navbarColorScheme="inverted" />
            <GrantsOverview id="overview" />
            <ProjectFundingGrants id="project-funding" />
            <GrantsSupportedInitiatives id="supported-initiatives" />
            <OurFundingGuidelines id="our-funding-guidelines" />
            <GrantsHowToApply id="how-to-apply" />
            <ContactUs id="contact-us" />
            <GrantsMoreToExplore id="more to explore" />
        </>
    );
}
