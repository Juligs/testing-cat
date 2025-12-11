import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroTooling,
    ToolingOverview,
    IotaSDKs,
    CLI,
    BridgeLibs,
    ToolingMoreToExplore,
    Libs,
    WalletsTooling,
    Explorers,
    IotaTechnologyStack,
    ShowcaseProject,
} from '@sections';
import {
    TOOLING_METADATA_TITLE,
    TOOLING_METADATA_DESCRIPTION_X,
    TOOLING_KEYWORDS,
    TOOLING_METADATA_DESCRIPTION,
    TOOLING_IMAGE,
    TOOLING_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: TOOLING_METADATA_TITLE,
    description: TOOLING_METADATA_DESCRIPTION,
    descriptionX: TOOLING_METADATA_DESCRIPTION_X,
    keywords: TOOLING_KEYWORDS,
    image: TOOLING_IMAGE,
    url: TOOLING_URL,
    path: '/products/tooling',
});

export default function Home() {
    return (
        <>
            <HeroTooling id="hero" navbarColorScheme="inverted" />
            <ToolingOverview id="overview" />
            <IotaSDKs id="iota-SDKs" />
            <CLI id="iota-CLIs" />
            <Libs id="iota-application-libraries" />
            <BridgeLibs id="iota-evm-bridge" />
            <Explorers id="explorers" />
            <WalletsTooling id="wallets" />
            <IotaTechnologyStack
                showcases={[
                    ShowcaseProject.Virtue,
                    ShowcaseProject.PoolsFinance,
                    ShowcaseProject.Salus,
                    ShowcaseProject.Orobo,
                ]}
            />
            <ToolingMoreToExplore id="more-to-explore" />
        </>
    );
}
