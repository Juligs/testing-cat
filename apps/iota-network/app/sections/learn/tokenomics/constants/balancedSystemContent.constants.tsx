import {
    AssetTokenization,
    FeeBurning,
    IotaToken,
    ProofOfStake,
    SelfSponsorship,
} from '@repo/icons';

export const BALANCED_SYSTEM_VERTICAL_TITLE = {
    title: 'A Balanced System',
    subtitle: 'Creating a robust and fair ecosystem',
    body: "IOTA tokenomics are composed of key elements, each essential to the platform's functionality and integrity.",
};

export const BALANCED_SYSTEM_ICON_CONTENT = [
    {
        icon: <IotaToken />,
        title: 'IOTA Token',
        body: 'The native asset of the IOTA platform, facilitating various network operations and transactions.',
        link: 'https://docs.iota.org/about-iota/tokenomics/iota-token',
    },
    {
        icon: <FeeBurning />,
        title: 'Low Gas Fees',
        body: 'Transaction fees boost validator efficiency, prevents DoS, and aligns incentives. IOTA keeps fees low and predictable by charging for actual resource use, with dynamic computation and storage costs.',
        link: 'https://docs.iota.org/about-iota/tokenomics/gas-in-iota',
    },
    {
        icon: <ProofOfStake />,
        title: 'Staking Rewards',
        body: 'Delegated Proof-of-Stake rewards honest validators and stakers. Stake IOTA to earn compounding rewards while maintaining self-custody. Unstake anytime to reclaim your tokens and rewards.',
        link: 'https://docs.iota.org/about-iota/tokenomics/staking-unstaking',
    },
    {
        icon: <AssetTokenization />,
        title: 'Balanced Tokenomics',
        body: 'IOTA ensures a sustainable equilibrium by offsetting inflation with deflation. Validators earn fixed staking rewards per epoch, while transaction fees are burned.',
        link: 'https://docs.iota.org/about-iota/iota-architecture/iota-security#rewards-for-validators-and-stakers',
    },
    {
        icon: <SelfSponsorship />,
        title: 'Sponsored Transactions',
        body: "Developers and businesses use IOTA Gas Station to cover their users' fees, enabling seamless, feeless user experiences while supporting network sustainability.",
        link: 'https://docs.iota.org/operator/gas-station/',
    },
];
