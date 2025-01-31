import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { ShowcasesPageHero, PartnersCarousel, ShowcasesMoreToExplore } from '@sections';
import { Rwa, LighthouseProjects, TeamContactCTA } from '@repo/shared/sections';
const METADATA_TITLE = 'Showcases';
const METADATA_DESCRIPTION = 'We Build Cutting-Edge Technology';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <ShowcasesPageHero id="hero" theme="inverted" />
            <PartnersCarousel id="partners" />
            <Rwa id="rwa" showLink={false} />
            <LighthouseProjects id="lighthouse-projects" showLink={false} />
            <TeamContactCTA id="team-contact-CTA" />
            <ShowcasesMoreToExplore id="explore" />
        </>
    );
}
