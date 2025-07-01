import { TitleTextSize } from 'react-ui-kit';

export const TECH_AND_TOOLING_HORIZONTAL_TITLE = {
    title: 'Tech & Tooling',
    subtitle: 'Everything you need to notarize, update, and verify',
    body: 'IOTA Notarization offers modular, plug-and-play tools for on-chain creation, management and validation of tamper-proof records, supporting both direct smart-contract calls and SDK integration for full architectural flexibility.',
    size: TitleTextSize.Small,
};

export const TECH_AND_TOOLING_IMAGE_CARD_CONTENT = [
    {
        title: 'Client Libraries',
        subtitle:
            'Rust and WASM SDKs to create, update, and verify notarizations on-chain. Ideal for backend integration or browser-based applications.',
        image: '/products/notarization/tech-and-tooling/client_libraries.png',
        link: 'https://docs.iota.org/developer/iota-notarization/getting-started/rust',
    },
    {
        title: 'Smart Contracts',
        subtitle:
            'Notarization modules built on MoveVM. Use smart contracts for automated, on-ledger notarization workflows and deeper protocol integration.',
        image: '/products/notarization/tech-and-tooling/smart_contracts.png',
        link: 'https://github.com/iotaledger/notarization/tree/main/notarization-move',
    },
    {
        title: 'Documentation and Examples',
        subtitle:
            'Detailed setup, examples, and best practices for notarizations on IOTA are available in the IOTA Docs and GitHub repositories.',
        image: '/products/notarization/tech-and-tooling/documentation_and_examples.png',
        link: 'https://docs.iota.org/developer/iota-notarization/',
    },
];
