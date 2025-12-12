import { TitleTextSize } from 'react-ui-kit';

export const MODULES_HORIZONTAL_TITLE = {
    title: 'Hands-on modules',
    body: 'Start with the core fundamentals, then layer in trust and identity to move from prototypes to production‑ready dApps.',
    size: TitleTextSize.Small,
};

export const MODULES_HIGHLIGHT_CONTENT = [
    {
        overline: 'Core Workshop 04',
        title: 'Init and Deploy a Grants package',
        body: 'Publish, authorize, mint, and verify — implement a core Move function as part of a hands-on package publish on IOTA.',
        image: '/build/workshop-series/modules/init_and_deploy.png',
        link: 'https://docs.iota.org/developer/workshops/core/I-introduction-to-smart-contracts',
    },
    {
        overline: 'Core Workshop 04',
        title: 'Coordination with Shared Objects, Dynamic Fields & PTBs',
        body: 'Create a shared Registry, index student-to-grant IDs, and compose an atomic Programmable Transaction Block (PTB) that mints and indexes in one go.',
        image: '/build/workshop-series/modules/coordination.png',
        link: 'https://docs.iota.org/developer/workshops/core/II-shared-objects-dynamic-fields-ptbs',
    },
    {
        overline: 'Core Workshop 04',
        title: 'Capabilities, Type-State, Abilities & Tests',
        body: 'Harden ScholarFlow with multi‑role capabilities, lifecycle guards, ability audits, and Move unit tests. No SDK/event code here; that comes in Workshop IV.',
        image: '/build/workshop-series/modules/capabilities.png',
        link: 'https://docs.iota.org/developer/workshops/core/III-capabilities-state-tests',
    },
    {
        overline: 'Core Workshop 04',
        title: 'Wrapping it up - Dapp',
        body: 'Ship a minimal React dApp that connects a wallet, reads objects, and calls your Workshop contracts using the IOTA dApp Kit.',
        image: '/build/workshop-series/modules/wrapping.png',
        link: 'https://docs.iota.org/developer/workshops/core/IV-capstone-dapp-kit',
    },
    {
        overline: 'Trust Framework - IOTA Identity',
        title: 'IOTA Identity Workshop',
        body: 'Workshop on Validating a University Degree using IOTA Identity',
        image: '/build/workshop-series/modules/identity.png',
        link: 'https://docs.iota.org/developer/workshops/identity-workshop',
    },
    {
        overline: 'Trust Framework - IOTA Identity',
        title: 'Minting and Managing Tokens',
        body: 'Complete tutorial for building the Workshop Token and Badge dApp using Move smart contracts, Tests and IOTA dApp Kit frontend',
        image: '/build/workshop-series/modules/minting.png',
        link: 'https://docs.iota.org/developer/workshops/minting-and-managing-tokens',
    },
    {
        overline: 'Trust Framework - IOTA Identity',
        title: 'IOTA Notarization Workshop',
        body: 'HComplete tutorial for building on-chain notarization on IOTA',
        image: '/build/workshop-series/modules/notarization.png',
        link: 'https://docs.iota.org/developer/workshops/iota-notarization-truedoc',
    },
    {
        title: 'More coming soon',
        link: 'https://docs.iota.org/developer/workshops/',
    },
];
