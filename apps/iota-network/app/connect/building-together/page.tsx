import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroBuildingTogether,
    CollaborativeCommunity,
    Join,
    CryptoPlatforms,
    BuildingTogetherContactUs,
    ShapeTheFuture,
    BuildingTogetherMoreToExplore,
} from '@sections';
import {
    BUILDING_TOGETHER_METADATA_TITLE,
    BUILDING_TOGETHER_METADATA_DESCRIPTION_X,
    BUILDING_TOGETHER_KEYWORDS,
    BUILDING_TOGETHER_METADATA_DESCRIPTION,
    BUILDING_TOGETHER_IMAGE,
    BUILDING_TOGETHER_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: BUILDING_TOGETHER_METADATA_TITLE,
    description: BUILDING_TOGETHER_METADATA_DESCRIPTION,
    descriptionX: BUILDING_TOGETHER_METADATA_DESCRIPTION_X,
    keywords: BUILDING_TOGETHER_KEYWORDS,
    image: BUILDING_TOGETHER_IMAGE,
    url: BUILDING_TOGETHER_URL,
    path: '/connect/building-together',
});

export default function Home() {
    return (
        <>
            <HeroBuildingTogether id="hero" navbarColorScheme="inverted" />
            <CollaborativeCommunity id="collaborative-community" />
            <Join id="Join" />
            <CryptoPlatforms id="crypto-platforms" />
            <BuildingTogetherContactUs id="contact-us" />
            <ShapeTheFuture id="shape-the-future" />
            <BuildingTogetherMoreToExplore id="more to explore" />
        </>
    );
}
