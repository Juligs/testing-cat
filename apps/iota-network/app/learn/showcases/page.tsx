import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { ShowcasesPageHero, ShowcasesPageSection1, ShowcasesLastSection } from '@sections';
import { RwaSection, LighthouseProjects, TeamContactCTA } from '@repo/shared/sections';
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
            <ShowcasesPageSection1 id="section1" />
            <RwaSection id="rwa-section" />
            <LighthouseProjects id="lighthouse-projects" />
            <TeamContactCTA id="team-contact-CTA" />
            <ShowcasesLastSection id="last-section" />
        </>
    );
}
