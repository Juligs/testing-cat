import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import { HighlightCard, ImageCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';

enum ProviderType {
    IOTA = 'IOTA Service',
    External = 'External Provider',
}

export const EXPLORE_CARD_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Explore, Stake, and Engage with IOTA',
    body: 'The IOTA token is your entry to participation on the IOTA network. Use it for gas fees and staking, or to engage with ecosystem projects.',
    size: TitleTextSize.Small,
};

export const EXPLORE_CARD_IMAGE_CARD_CONTENT: (React.ComponentProps<typeof ImageCard> & {
    link: string;
})[] = [
    {
        title: 'IOTA Token',
        subtitle:
            'Fuel every action on the IOTA network – from payments and staking to powering real-world apps',
        image: '/build/get-started/explore-stake/iota_token.png',
        link: '/learn/tokenomics',
    },
    {
        title: 'Ecosystem',
        subtitle:
            'Explore the projects shaping IOTA’s real-world economy. Discover, connect, and get started',
        image: '/build/get-started/explore-stake/ecosystem.png',
        link: '/connect/our-community',
    },
];
export const EXPLORE_CARD_CTA_CARD_CONTENT: (React.ComponentProps<typeof SmallCtaCard> & {
    link: string;
})[] = [
    {
        overline: ProviderType.IOTA,
        title: 'IOTA Wallet',
        subtitle: 'Feature-rich, easy to use wallet for managing, transferring and staking',
        image: '/build/get-started/wallet/iota_wallet.png',
        link: 'https://docs.iota.org/users/iota-wallet/getting-started',
    },
    {
        overline: ProviderType.IOTA,
        title: 'IOTA Wallet Dashboard',
        subtitle: 'Your hub for managing, transferring, staking, and migrating assets with ease',
        image: '/build/get-started/wallet/wallet_dashboard.png',
        link: 'https://docs.iota.org/users/iota-wallet-dashboard/getting-started',
    },
    {
        overline: ProviderType.External,
        title: 'Cosmostation',
        subtitle:
            'Explorer, wallet, and visualized multi-chain monitoring system, helping you to easily access and understand chains',
        image: '/build/get-started/wallet/cosmostation.png',
        link: 'https://www.cosmostation.io/products/application',
    },
    {
        overline: ProviderType.External,
        title: 'Nightly Wallet',
        subtitle:
            "A multichain wallet that's both a crypto mobile wallet and a crypto extension wallet",
        image: '/build/get-started/wallet/nightly_wallet.png',
        link: 'https://nightly.app/',
    },
    {
        overline: ProviderType.External,
        title: 'Ledger',
        subtitle: 'Link Ledger to the IOTA Wallet to keep your keys safe and control your assets',
        image: '/build/get-started/wallet/ledger.png',
        link: 'https://docs.iota.org/users/iota-wallet/how-to/import/ledger',
    },
    {
        overline: ProviderType.External,
        title: 'Keystone',
        subtitle:
            'Keeps your private keys offline, fully in your hands, and safe from online threats',
        image: '/build/get-started/wallet/keystone.png',
        link: 'https://guide.keyst.one/docs/iota',
    },
];
export const STAKING_CARD_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Staking on IOTA',
    subtitle: 'Secure and decentralize the network while earning rewards',
    size: TitleTextSize.Small,
};

export const EXPLORE_VALIDATORS_HIGHLIGHT_CARD_CONTENT: (React.ComponentProps<
    typeof HighlightCard
> & {
    link: string;
    isExternal?: boolean;
})[] = [
    {
        title: 'Strengthen the network while staking',
        body: 'Help secure the network while earning',
        backgroundImage: '/build/get-started/staking/staking.png',
        link: '/learn/staking',
    },
    {
        title: 'Liquid staking on IOTA',
        body: 'IOTA’s first liquid staking token offers an even more rewarding experience',
        backgroundImage: '/build/get-started/staking/swirl.png',
        link: 'https://swirlstake.com/',
        isExternal: true,
    },
];
export const EXPLORE_VALIDATORS_CTA_CARD_CONTENT: (React.ComponentProps<typeof SmallCtaCard> & {
    link: string;
})[] = [
    {
        overline: ProviderType.IOTA,
        title: 'IOTA Explorer',
        subtitle: 'Search by coin, NFT, package, object or transaction',
        image: '/build/get-started/staking/explorer.png',
        link: 'https://explorer.iota.org/',
    },
    {
        overline: ProviderType.External,
        title: 'IOTASCAN',
        subtitle: 'View validator performances and compare commission rates',
        image: '/build/get-started/staking/iota_scan.png',
        link: 'https://iotascan.com/mainnet/home',
    },
    {
        overline: ProviderType.External,
        title: 'Staking Rewards',
        subtitle: 'Secure and reliable crypto staking',
        image: '/build/get-started/staking/staking_rewards.png',
        link: 'https://www.stakingrewards.com/asset/iota',
    },
    {
        overline: ProviderType.External,
        title: 'IOTA APY Calculator',
        subtitle: 'Estimate potential staking rewards and compare validator options',
        image: '/build/get-started/staking/iota_apy.png',
        link: 'https://www.iotastaking.com/',
    },
];
