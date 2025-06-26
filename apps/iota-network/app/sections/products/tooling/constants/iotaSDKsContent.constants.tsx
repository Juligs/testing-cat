import { IotaDappKit, IotaRustSdk, IotaTypescriptSdk } from '@repo/icons';

export const INTEGRATION_STACK_CTA_CARD_CONTENT = {
    title: 'Software Development Kits',
    subtitle:
        'Official IOTA SDKs in TypeScript and Rust – everything you need to start building, fast',
    link: 'https://docs.iota.org/references/#iota-software-development-kits',
    image: '/products/tooling/SDKs.png',
};

export const IOTA_SDKS_ICON_CONTENT = [
    {
        title: 'IOTA TypeScript SDK',
        body: 'A modular library for querying nodes, signing transactions, and connecting to IOTA or local networks.',
        icon: <IotaTypescriptSdk />,
        link: 'https://docs.iota.org/ts-sdk/typescript',
    },
    {
        title: 'IOTA Rust SDK',
        body: 'The Rust SDK provides Rust wrappers around the IOTA API.',
        icon: <IotaRustSdk />,
        link: 'https://docs.iota.org/references/rust-sdk',
    },
    {
        title: 'IOTA dApp Kit',
        body: 'A set of React components, hooks, and utilities for building dApps in the IOTA ecosystem.',
        icon: <IotaDappKit />,
        link: 'https://docs.iota.org/ts-sdk/dapp-kit/',
    },
];
