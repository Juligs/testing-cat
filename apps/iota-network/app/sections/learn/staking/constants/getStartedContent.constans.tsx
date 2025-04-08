import { TitleTextSize } from 'react-ui-kit';

export const GET_STARTED_VERTICAL_TITLE = {
    title: 'How to Get Started',
    subtitle: 'Our guides to staking on IOTA',
    size: TitleTextSize.ExtraSmall,
};

export const GET_STARTED_BLOG_POST_CARD_CONTENT = [
    {
        title: 'Staking and Unstaking',
        label: 'Tutorial',
        description:
            'IOTA uses a Delegated Proof of Stake system to secure and operate the network.',
        image: '/learn/staking/get-started/staking_unstaking.png',
        link: 'https://docs.iota.org/about-iota/tokenomics/staking-unstaking',
    },
    {
        title: 'Stake IOTA',
        label: 'Tutorial',
        description: 'Stake your IOTA tokens to earn rewards while helping secure the network.',
        image: '/learn/staking/get-started/stake_iota.png',
        link: 'https://docs.iota.org/about-iota/iota-wallet/how-to/stake',
    },
    {
        title: 'Use IOTA Wallet with a Ledger Device',
        label: 'Tutorial',
        description: 'How to use the IOTA Wallet with your Ledger device.',
        image: '/learn/staking/get-started/use_iota_wallet.png',
        link: 'https://docs.iota.org/about-iota/iota-wallet/how-to/integrate-ledger#stake-iota-using-iota-wallet',
    },
];
