import { TitleTextSize } from 'react-ui-kit';

export const WALLETS_VERTICAL_TITLE = {
    title: 'Wallets',
    size: TitleTextSize.ExtraSmall,
};

export const WALLETS_LINKS = [
    {
        title: 'Learn More',
        link: 'https://docs.iota.org/about-iota/iota-wallet/getting-started',
    },
    {
        title: 'Visit Night Mobile Wallet',
        link: 'https://nightly.app',
        isExternal: true,
    },
];

export const WALLETS_IMAGE_CARD_CONTENT = [
    {
        title: 'Asset Management ',
        body: 'Safely and conveniently manage your portfolio by dividing your assets across multiple wallets.',
        image: '/learn/tokenomics/wallets/asset_management.png',
    },
    {
        title: 'Staking',
        body: 'Earn rewards by staking your IOTAs. No lock-ups mean you can start and stop staking at any time.',
        image: '/learn/tokenomics/wallets/staking.png',
    },
    {
        title: 'Ledger Integration',
        body: 'Enhanced security by integrating your Ledger device with the IOTA Wallet. ',
        image: '/learn/tokenomics/wallets/ledger.png',
    },
];
