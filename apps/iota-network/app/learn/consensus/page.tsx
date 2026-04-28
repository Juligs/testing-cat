import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroConsensus,
    Mysticeti,
    DecentralizedConsensus,
    ConsensusMoretoExplore,
    ConsensusOverview,
    WhyStarfishMatters,
    Resilience,
    SecretStorage,
    Backed,
    ProofPoints,
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
            <ConsensusOverview id="overview" />
            <DecentralizedConsensus id="decentralized-consensus" />
            <WhyStarfishMatters id="why-starfish-matters" />
            <Mysticeti id="mysticeti" />
            <Resilience id="resilience" />
            <SecretStorage id="secret-storage" />
            <Backed id="backed" />
            <ProofPoints id="proof-points" />
            <ConsensusMoretoExplore id="more-to-explore" />
        </>
    );
}
