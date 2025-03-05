import { getPageMetadata } from '@lib/utils';
import {
    TEAM_AND_CAREERS_METADATA_TITLE,
    TEAM_AND_CAREERS_METADATA_DESCRIPTION_X,
    TEAM_AND_CAREERS_KEYWORDS,
    TEAM_AND_CAREERS_METADATA_DESCRIPTION,
    TEAM_AND_CAREERS_IMAGE,
    TEAM_AND_CAREERS_URL,
} from '@lib/constants';
import {
    TeamAndCareersHero,
    TeamAndCareersOverview,
    BreakingBoundaries,
    Mission,
    Careers,
    OurDepartments,
    Testimonials,
    TeamAndCareersMoreToExplore,
} from '@sections';
import { ContactUs } from '@repo/shared/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: TEAM_AND_CAREERS_METADATA_TITLE,
    description: TEAM_AND_CAREERS_METADATA_DESCRIPTION,
    descriptionX: TEAM_AND_CAREERS_METADATA_DESCRIPTION_X,
    keywords: TEAM_AND_CAREERS_KEYWORDS,
    image: TEAM_AND_CAREERS_IMAGE,
    url: TEAM_AND_CAREERS_URL,
    path: '/about/team-and-careers',
});

export default function Home() {
    return (
        <>
            <TeamAndCareersHero id="hero" />
            <TeamAndCareersOverview id="overview" />
            <BreakingBoundaries id="bold-vision" />
            <Mission id="expanding-applications" />
            <Careers id="careers" />
            <OurDepartments id="our-departments" />
            <Testimonials id="testimonials" />
            <TeamAndCareersMoreToExplore id="explore" />
            <ContactUs id="contact-us" />
        </>
    );
}
