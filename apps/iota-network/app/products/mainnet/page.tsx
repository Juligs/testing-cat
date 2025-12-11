import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroMainnet,
    Versatile,
    CombiningDAG,
    Immutable,
    MainnetMoreToExplore,
    IotaTechnologyStack,
} from '@sections';
import {
    MAINNET_METADATA_TITLE,
    MAINNET_METADATA_DESCRIPTION_X,
    MAINNET_KEYWORDS,
    MAINNET_METADATA_DESCRIPTION,
    MAINNET_IMAGE,
    MAINNET_URL,
} from '@lib/constants';
import { ShowcaseProject } from '@sections/learn/showcases/showcasesProjects.enums';
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
            <Versatile id="versatile" />
            <CombiningDAG id="combining-dag" />
            <Immutable id="immutable" />
            <IotaTechnologyStack
                showcases={[
                    ShowcaseProject.Virtue,
                    ShowcaseProject.PoolsFinance,
                    ShowcaseProject.Salus,
                    ShowcaseProject.Twin,
                ]}
            />
            <MainnetMoreToExplore id="more to explore" />
        </>
    );
}
