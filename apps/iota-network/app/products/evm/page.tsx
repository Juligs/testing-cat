import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroEVM,
    EVMOverview,
    Unlock,
    BridgingIota,
    EVMNewEra,
    SmartContracts,
    Connection,
    EVMBridge,
    EVMIotaTechnologyStack,
    Learning,
    EVMMoreToExplore,
} from '@sections';
import {
    EVM_METADATA_TITLE,
    EVM_METADATA_DESCRIPTION_X,
    EVM_KEYWORDS,
    EVM_METADATA_DESCRIPTION,
    EVM_IMAGE,
    EVM_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: EVM_METADATA_TITLE,
    description: EVM_METADATA_DESCRIPTION,
    descriptionX: EVM_METADATA_DESCRIPTION_X,
    keywords: EVM_KEYWORDS,
    image: EVM_IMAGE,
    url: EVM_URL,
    path: '/products/evm',
});

export default function Home() {
    return (
        <>
            <HeroEVM id="hero" navbarColorScheme="inverted" />
            <EVMOverview id="evm-overview" />
            <Unlock id="unlock" />
            <BridgingIota id="bridge-iota" />
            <EVMNewEra id="evm-new-era" />
            <SmartContracts id="smart-contracts" />
            <Connection id="connection" />
            <EVMBridge id="iota-evm" />
            <EVMIotaTechnologyStack id="evm-iota-technology-stack" />
            <Learning id="learning" />
            <EVMMoreToExplore id="more-to-explore" />
        </>
    );
}
