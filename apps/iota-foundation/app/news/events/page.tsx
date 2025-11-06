import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroEventsFoundation,
    EventKit,
    HostingEvent,
    BTC,
    EventsFoundationMoreToExplore,
} from '@sections';
import { UpcomingEvents, EventTerms, EVENT_TERMS_FOUNDATION } from '@repo/shared/sections';
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
    path: '/news/events',
});

export default function Home() {
    return (
        <>
            <HeroEventsFoundation id="hero" />
            <UpcomingEvents id="upcoming-events" />
            <BTC id="beyond-the-chain" />
            <HostingEvent id="hosting-event" />
            <EventKit id="event-kit" />
            <EventTerms id="event-terms" {...EVENT_TERMS_FOUNDATION} />
            <EventsFoundationMoreToExplore id="more-to-explore" />
        </>
    );
}
