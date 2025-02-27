import {
    AssetTokenization,
    BuiltWithPartners,
    DefiPlatforms,
    ProtocolAgnosticDesign,
    Security,
    W3ConformingDecentralizedIdentifiers,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const KEY_AREAS_VERTICAL_TITLE_CONTENT = {
    title: 'Exploring Key Focus Areas in DLT',
    body: 'We explore key topics to advance DLT, driving secure, efficient, and scalable decentralized systems. Our research addresses real-world challenges and aims to integrate digital technologies into daily life, promoting industry-wide growth and innovation.',
    size: TitleTextSize.Small,
};

export const KEY_AREAS_ICON_CONTENT = [
    {
        icon: <W3ConformingDecentralizedIdentifiers />,
        title: 'Networking',
        body: 'Exploring efficient peer discovery and robust congestion control to enhance network performance.',
    },
    {
        icon: <BuiltWithPartners />,
        title: 'Consensus',
        body: 'We research decentralized, low-latency, DAG-based consensus with randomized committee selection.',
    },
    {
        icon: <AssetTokenization />,
        title: 'Tokenomics',
        body: 'We focus on optimizing token economies through dynamic fee structures and cost mechanisms.',
    },
    {
        icon: <Security />,
        title: 'Security',
        body: 'Researching advanced randomness and rigorous model checking to ensure security.',
    },
    {
        icon: <DefiPlatforms />,
        title: 'Utility',
        body: 'Advancing functionality through research on smart contracts, zero-knowledge proofs, and reputation systems.',
    },
    {
        icon: <ProtocolAgnosticDesign />,
        title: 'Scalability',
        body: 'Exploring off-chain solutions and sharding to boost efficiency.',
    },
];
