import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { ShowcasesPageHero, ShowcasesMoreToExplore } from '@sections';
import { Rwa, LighthouseProjects, TeamContactCTA, PartnersCarousel } from '@repo/shared/sections';
import {
    SHOWCASES_METADATA_TITLE,
    SHOWCASES_METADATA_DESCRIPTION_X,
    SHOWCASES_KEYWORDS,
    SHOWCASES_METADATA_DESCRIPTION,
    SHOWCASES_IMAGE,
    SHOWCASES_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: SHOWCASES_METADATA_TITLE,
    description: SHOWCASES_METADATA_DESCRIPTION,
    descriptionX: SHOWCASES_METADATA_DESCRIPTION_X,
    keywords: SHOWCASES_KEYWORDS,
    image: SHOWCASES_IMAGE,
    url: SHOWCASES_URL,
    path: '/our-work/showcases',
});

export default function Home() {
    return (
        <>
            <ShowcasesPageHero id="hero" navbarColorScheme="inverted" />
            <PartnersCarousel id="partners" />
            <Rwa id="rwa" showLink={false} />
            <LighthouseProjects id="lighthouse-projects" showLink={false} animation={false} />
            <TeamContactCTA id="team-contact-CTA" />
            <ShowcasesMoreToExplore id="explore" />
        </>
    );
}
