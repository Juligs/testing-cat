import { ImageCard } from 'react-ui-kit';

type ImageCardServicesProps = (React.ComponentProps<typeof ImageCard> & {
    link: string;
    isExternal?: boolean;
})[];

export const SERVICES_IMAGE_CARD_MAINNET: ImageCardServicesProps = [
    {
        title: 'IOTA Browser Wallet',
        body: 'Feature-rich, easy to use wallet for managing, transferring and staking',
        image: '/products/product-suite/iota_browser.png',
        link: '/products/wallet#iota-wallet',
        isExternal: false,
    },
    {
        title: 'IOTA Dashboard dApp',
        body: 'Managing, transferring, staking, vesting and migrating with ease',
        image: '/products/product-suite/iota_dashboard.png',
        link: '/products/wallet#iota-wallet-dashboard',
        isExternal: false,
    },
    {
        title: 'IOTA Explorer',
        body: 'IOTA Mainnet L1 Explorer developed and maintained by the IOTA Foundation',
        image: '/products/product-suite/iota_explorer.png',
        isExternal: true,
        link: 'https://explorer.iota.org/',
    },
    {
        title: 'IOTA EVM Bridge',
        body: 'Sending and wrapping assets and making withdrawals on EVM Layer 2',
        image: '/products/product-suite/evm.png',
        link: 'https://evm-bridge.iota.org/',
        isExternal: true,
    },
];

export const SERVICES_IMAGE_CARD_EVM = [
    {
        title: 'IOTA L2 Explorer',
        body: 'IOTA EVM L2 block explorer by Blockscout. Search transactions, verify smart contracts, analyze addresses, and network activity',
        image: '/products/product-suite/iota_explorer.png',
        isExternal: true,
        link: 'https://explorer.evm.iota.org/',
    },
    {
        title: 'IOTA EVM Bridge',
        body: 'Sending and wrapping assets and making withdrawals on EVM Layer 2',
        image: '/products/product-suite/evm.png',
        link: 'https://evm-bridge.iota.org/',
        isExternal: true,
    },
];
