import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroMainnet,
    Versatile,
    CombiningDAG,
    Immutable,
    IotaTechnologyStack,
    MainnetMoreToExplore,
} from '@sections';
import {
    MAINNET_METADATA_TITLE,
    MAINNET_METADATA_DESCRIPTION_X,
    MAINNET_KEYWORDS,
    MAINNET_METADATA_DESCRIPTION,
    MAINNET_IMAGE,
    MAINNET_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: MAINNET_METADATA_TITLE,
    description: MAINNET_METADATA_DESCRIPTION,
    descriptionX: MAINNET_METADATA_DESCRIPTION_X,
    keywords: MAINNET_KEYWORDS,
    image: MAINNET_IMAGE,
    url: MAINNET_URL,
    path: '/products/mainnet',
});

export default function Home() {
    return (
        <>
            <HeroMainnet id="hero" navbarColorScheme="inverted" />
            <Versatile id="versatile" navbarColorScheme="inverted" />
            <CombiningDAG id="combining-dag" />
            <Immutable id="immutable" />
            <IotaTechnologyStack id="iota-technology-stack" />
            <MainnetMoreToExplore id="more to explore" />
        </>
    );
}
