import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroCommunity,
    ProjectsOnIota,
    IotaGrants,
    IotaFoundation,
    CommunityMoreToExplore,
} from '@sections';
import {
    COMMUNITY_METADATA_TITLE,
    COMMUNITY_METADATA_DESCRIPTION_X,
    COMMUNITY_KEYWORDS,
    COMMUNITY_METADATA_DESCRIPTION,
    COMMUNITY_IMAGE,
    COMMUNITY_URL,
} from '@lib/constants';
import { HeroIotaLabs } from '@sections/connect/community/HeroIotalabs';
export const metadata: Metadata = getPageMetadata({
    title: COMMUNITY_METADATA_TITLE,
    description: COMMUNITY_METADATA_DESCRIPTION,
    descriptionX: COMMUNITY_METADATA_DESCRIPTION_X,
    keywords: COMMUNITY_KEYWORDS,
    image: COMMUNITY_IMAGE,
    url: COMMUNITY_URL,
    path: '/connect/our-community',
});

export default function Home() {
    return (
        <>
            <HeroCommunity id="hero" navbarColorScheme="inverted" />
            <ProjectsOnIota id="projects-on-iota" />
            <HeroIotaLabs id="iotalabs" navbarColorScheme="inverted" />
            <IotaGrants id="iota-grants" navbarColorScheme="inverted" />
            <IotaFoundation id="iota-foundation" />
            <CommunityMoreToExplore id="more-to-explore" />
        </>
    );
}
