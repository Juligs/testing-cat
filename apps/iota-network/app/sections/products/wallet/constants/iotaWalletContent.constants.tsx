import { AssetManagement, ImportFromSeed, Staking } from '@repo/icons';
import { ButtonVariant, TitleTextSize } from 'react-ui-kit';

export const IOTA_WALLET_VERTICAL_TITLE_CONTENT = {
    title: 'IOTA Wallet',
    subtitle: 'Feature-rich. Easy to use.',
    body: 'The IOTA Wallet browser extension follows industry standards and puts security first - making crypto management intuitive and streamlined.',
    size: TitleTextSize.Small,
};

export const IOTA_WALLET_ICON_CONTENT = [
    {
        icon: <AssetManagement />,
        title: 'Asset Management',
        body: 'Easily allows you to use multiple profiles and accounts, offering flexibility in managing various assets or purposes for transactions.',
        link: 'https://docs.iota.org/about-iota/iota-wallet/how-to/multi-account',
    },
    {
        icon: <Staking />,
        title: 'Staking',
        body: 'Stake your IOTA tokens to earn rewards and help secure the network. Delegate your IOTAs to a validator, and get compensated for your support.',
        link: 'https://docs.iota.org/about-iota/iota-wallet/how-to/stake',
    },
    {
        icon: <ImportFromSeed />,
        title: 'Ledger Integration',
        body: 'Boost security by linking your Ledger device to the IOTA Wallet, keeping your private keys safe and giving you full control over your assets.',
        link: 'https://docs.iota.org/about-iota/iota-wallet/how-to/import/ledger',
    },
];

export const IOTA_WALLET_BUTTONS = [
    {
        text: 'Get the wallet',
        link: 'https://chromewebstore.google.com/detail/iota-wallet/iidjkmdceolghepehaaddojmnjnkkija',
        variant: ButtonVariant.Primary,
    },
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/about-iota/iota-wallet/getting-started',
        variant: ButtonVariant.Secondary,
    },
];
