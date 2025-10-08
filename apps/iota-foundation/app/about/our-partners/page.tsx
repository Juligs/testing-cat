import { getPageMetadata } from '@lib/utils';
import {
    OUR_PARTNERS_METADATA_TITLE,
    OUR_PARTNERS_METADATA_DESCRIPTION_X,
    OUR_PARTNERS_KEYWORDS,
    OUR_PARTNERS_METADATA_DESCRIPTION,
    OUR_PARTNERS_IMAGE,
    OUR_PARTNERS_URL,
} from '@lib/constants';
import {
    PartnersHero,
    PartnersOverview,
    OurPartnersCarousel,
    PartnerProjects,
    OurPartnersMoreToExplore,
    InterestedInPartnering,
    CollaborativeCommunity,
    OurInvestors,
} from '@sections';
import { Join, ContactUs } from '@repo/shared/sections';

import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: OUR_PARTNERS_METADATA_TITLE,
    description: OUR_PARTNERS_METADATA_DESCRIPTION,
    descriptionX: OUR_PARTNERS_METADATA_DESCRIPTION_X,
    keywords: OUR_PARTNERS_KEYWORDS,
    image: OUR_PARTNERS_IMAGE,
    url: OUR_PARTNERS_URL,
    path: '/about/iota-foundation',
});

export default function Home() {
    return (
        <>
            <PartnersHero id="hero" />
            <PartnersOverview id="overview" />
            <OurPartnersCarousel id="partners-carousel" />
            <PartnerProjects id="partner-projects" />
            <InterestedInPartnering id="interested-in-partnering" />
            <CollaborativeCommunity id="collaborative-community" />
            <Join id="join" />
            <OurInvestors id="our-investors" />
            <OurPartnersMoreToExplore id="more-to-explore" />
            <ContactUs id="contact-us" />
        </>
    );
}
