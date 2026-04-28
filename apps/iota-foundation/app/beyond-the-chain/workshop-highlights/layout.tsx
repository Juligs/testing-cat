import {
    WORKSHOP_IMAGE,
    WORKSHOP_KEYWORDS,
    WORKSHOP_METADATA_DESCRIPTION,
    WORKSHOP_METADATA_DESCRIPTION_X,
    WORKSHOP_METADATA_TITLE,
    WORKSHOP_URL,
} from '@lib/constants';
import { getPageMetadata } from '@lib/utils';
import { HeroWorkshop, WorkshopMoreToExplore } from '@sections';

import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: WORKSHOP_METADATA_TITLE,
    description: WORKSHOP_METADATA_DESCRIPTION,
    descriptionX: WORKSHOP_METADATA_DESCRIPTION_X,
    keywords: WORKSHOP_KEYWORDS,
    image: WORKSHOP_IMAGE,
    url: WORKSHOP_URL,
    path: '/beyond-the-chain/workshop-highlights',
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeroWorkshop id="hero" />
            {children}
            <WorkshopMoreToExplore id="more-to-explore" />
        </>
    );
}
