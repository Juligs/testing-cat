import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroConsensus,
    DynamicConsensus,
    SafetyAndEfficiency,
    DecentralizedConsensus,
    Resistant,
    ConsensusMoretoExplore,
} from '@sections';
import {
    CONSENSUS_METADATA_TITLE,
    CONSENSUS_METADATA_DESCRIPTION_X,
    CONSENSUS_KEYWORDS,
    CONSENSUS_METADATA_DESCRIPTION,
    CONSENSUS_IMAGE,
    CONSENSUS_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: CONSENSUS_METADATA_TITLE,
    description: CONSENSUS_METADATA_DESCRIPTION,
    descriptionX: CONSENSUS_METADATA_DESCRIPTION_X,
    keywords: CONSENSUS_KEYWORDS,
    image: CONSENSUS_IMAGE,
    url: CONSENSUS_URL,
    path: '/learn/consensus',
});

export default function Home() {
    return (
        <>
            <HeroConsensus id="hero" navbarColorScheme="inverted" />
            <DynamicConsensus id="dynamic-consensus" />
            <SafetyAndEfficiency id="safety-and-efficiency" />
            <DecentralizedConsensus id="decentralized-consensus" />
            <Resistant id="resistant" />
            <ConsensusMoretoExplore id="more-to-explore" />
        </>
    );
}
