import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { ShowcasesPageHero, ShowcasesMoreToExplore } from '@sections';
import { LighthouseProjects, TeamContactCTA, PartnersCarousel } from '@repo/shared/sections';
import {
    SHOWCASES_METADATA_TITLE,
    SHOWCASES_METADATA_DESCRIPTION_X,
    SHOWCASES_KEYWORDS,
    SHOWCASES_METADATA_DESCRIPTION,
    SHOWCASES_IMAGE,
    SHOWCASES_URL,
} from '@lib/constants';
import { Rwa } from '@sections/learn/showcases/Rwa';

export const metadata: Metadata = getPageMetadata({
    title: SHOWCASES_METADATA_TITLE,
    description: SHOWCASES_METADATA_DESCRIPTION,
    descriptionX: SHOWCASES_METADATA_DESCRIPTION_X,
    keywords: SHOWCASES_KEYWORDS,
    image: SHOWCASES_IMAGE,
    url: SHOWCASES_URL,
    path: '/learn/showcases',
});

export default function Home() {
    return (
        <>
            <ShowcasesPageHero id="hero" navbarColorScheme="inverted" />
            <PartnersCarousel id="partners" />
            <Rwa id="rwa" />
            <LighthouseProjects id="lighthouse-projects" showLink={false} small />
            <TeamContactCTA id="team-contact-CTA" small />
            <ShowcasesMoreToExplore id="explore" />
        </>
    );
}
