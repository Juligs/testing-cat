import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroWorkShop,
    WorkshopOverview,
    LearnBuildShip,
    Modules,
    WorkshopCta,
    CtaAreas,
    EventTeaser,
    WorkshopMoreToExplore,
} from '@sections';
import {
    WORKSHOP_SERIES_METADATA_TITLE,
    WORKSHOP_SERIES_METADATA_DESCRIPTION_X,
    WORKSHOP_SERIES_KEYWORDS,
    WORKSHOP_SERIES_METADATA_DESCRIPTION,
    WORKSHOP_SERIES_IMAGE,
    WORKSHOP_SERIES_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: WORKSHOP_SERIES_METADATA_TITLE,
    description: WORKSHOP_SERIES_METADATA_DESCRIPTION,
    descriptionX: WORKSHOP_SERIES_METADATA_DESCRIPTION_X,
    keywords: WORKSHOP_SERIES_KEYWORDS,
    image: WORKSHOP_SERIES_IMAGE,
    url: WORKSHOP_SERIES_URL,
    path: '/build/grants',
});

export default function Home() {
    return (
        <>
            <HeroWorkShop id="hero" navbarColorScheme="inverted" />
            <WorkshopOverview id="overview" />
            <LearnBuildShip id="learn-build-ship" />
            <Modules id="modules" navbarColorScheme="inverted" />
            <WorkshopCta id="workshop-cta" navbarColorScheme="inverted" />
            <EventTeaser id="event-teaser" />
            <CtaAreas id="cta-areas" navbarColorScheme="inverted" />
            <WorkshopMoreToExplore id="more-to-explore" />
        </>
    );
}
