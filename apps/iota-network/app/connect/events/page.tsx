import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroEvents,
    EventsOverview,
    BeyondTheChain,
    UpcomingEvents,
    Hosting,
    Resources,
    EventsMoreToExplore,
} from '@sections';
import { EventTerms } from '@repo/shared/sections';
import {
    EVENTS_METADATA_TITLE,
    EVENTS_METADATA_DESCRIPTION_X,
    EVENTS_KEYWORDS,
    EVENTS_METADATA_DESCRIPTION,
    EVENTS_IMAGE,
    EVENTS_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: EVENTS_METADATA_TITLE,
    description: EVENTS_METADATA_DESCRIPTION,
    descriptionX: EVENTS_METADATA_DESCRIPTION_X,
    keywords: EVENTS_KEYWORDS,
    image: EVENTS_IMAGE,
    url: EVENTS_URL,
    path: '/connect/events',
});

export default function Home() {
    return (
        <>
            <HeroEvents id="hero" navbarColorScheme="inverted" />
            <EventsOverview id="overview" />
            <BeyondTheChain id="beyond-the-chain" />
            <UpcomingEvents id="upcoming-events" />
            <Hosting id="hosting" navbarColorScheme="inverted" />
            <Resources id="resources" />
            <EventTerms id="event-terms" />
            <EventsMoreToExplore id="more-to-explore" />
        </>
    );
}
