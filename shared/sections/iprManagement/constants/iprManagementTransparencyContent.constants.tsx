import {
    DecentralizedDigitalIdentities,
    InterplanetaryFileSystem,
    IotaSmartContractChains,
    IprMarketplace,
    Nfts,
    SmartContractForMediaMpeg,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const IPR_MANAGEMENT_TRANSPARENCY_VERTICAL_TITLE_CONTENT = {
    title: 'Transparent and Fair Rights Payment',
    body: 'Managing intellectual property rights is difficult due to payment transparency and user experience issues that make it challenging for artists and rights holders to track and verify their earnings. Our prototype solution uses DLT and Smart Contracts for Media to simplify rights management with automated, transparent digital contracts.',
    size: TitleTextSize.Small,
};

export const IPR_MANAGEMENT_TRANSPARENCY_ICON_CONTENT = [
    {
        icon: <IotaSmartContractChains />,
        title: 'IOTA Smart Contract Chains',
        body: 'ensure that contracts are immutable and transparent, thus guaranteeing the integrity of agreements.',
    },
    {
        icon: <Nfts />,
        title: 'NFTs',
        body: 'represent intellectual property rights and contractual obligations, providing clear and traceable records.',
    },
    {
        icon: <InterplanetaryFileSystem />,
        title: 'InterPlanetary',
        body: 'facilitates decentralized storage of contract data, so all information is securely and transparently maintained.',
    },
    {
        icon: <DecentralizedDigitalIdentities />,
        title: 'Decentralized Digital Identities',
        body: "enable secure and verified interactions among participants, enhancing the system's overall trustworthiness.",
    },
    {
        icon: <SmartContractForMediaMpeg />,
        title: 'Smart Contract for Media MPEG-21',
        body: 'standard converts traditional legal documents into machine-readable smart contracts.',
    },
    {
        icon: <IprMarketplace />,
        title: 'IPR Marketplace',
        body: 'platform streamlines the negotiation and execution processes.',
    },
];
