import {
    OVERVIEW_IMAGE,
    OVERVIEW_KEYWORDS,
    OVERVIEW_METADATA_DESCRIPTION,
    OVERVIEW_METADATA_DESCRIPTION_X,
    OVERVIEW_METADATA_TITLE,
    OVERVIEW_URL,
} from '@lib/constants';
import { getPageMetadata } from '@lib/utils';
import {
    CallForPapers,
    ComingUp,
    HeroOverview,
    NextGenDLT,
    KeyTopics,
    OverviewMoreToExplore,
    PastEvents,
} from '@sections';

import { FutureEvents } from '@sections/beyond-the-chain/overview/FutureEvents';
import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: OVERVIEW_METADATA_TITLE,
    description: OVERVIEW_METADATA_DESCRIPTION,
    descriptionX: OVERVIEW_METADATA_DESCRIPTION_X,
    keywords: OVERVIEW_KEYWORDS,
    image: OVERVIEW_IMAGE,
    url: OVERVIEW_URL,
    path: '/beyond-the-chain/overview',
});

export default function Home() {
    return (
        <>
            <HeroOverview id="hero" />
            <NextGenDLT id="next-gen-dlt" />
            <ComingUp id="coming-up" />
            <CallForPapers id="call-for-papers" />
            <KeyTopics id="key-topics" />
            <PastEvents id="past-events" />
            <FutureEvents id="future-events" />
            <OverviewMoreToExplore id="more-to-explore" />
        </>
    );
}
