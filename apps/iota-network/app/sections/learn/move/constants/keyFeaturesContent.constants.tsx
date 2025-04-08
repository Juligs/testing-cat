import {
    DynamicFields,
    IroncladSecurity,
    ObjectDataModel,
    ProgrammableTransactionBlocks,
} from '@repo/icons';
export const KEY_FEATURES_VERTICAL_TITLE_CONTENT = {
    title: ['Key Features', 'of Move on IOTA'],
    subtitle:
        'Turbo-charge smart contracts with enhanced data models, efficient transactions, and dynamic composability',
};

export const KEY_FEATURES_ICON_CONTENT = [
    {
        icon: <ObjectDataModel />,
        title: 'Object Data Model',
        body: 'Smart contracts can reflect real-world scenarios for asset management. Native features enable object types, ownership, transfers, and display, simplifying apps, wallets, and explorers.',
        link: 'https://docs.iota.org/developer/iota-101/objects/object-model',
    },
    {
        icon: <ProgrammableTransactionBlocks />,
        title: 'Programmable Transaction Blocks',
        body: 'An IOTA transaction can call up to 1024 Move functions for mass batching or using typed objects as inputs, enhancing gas efficiency and code simplicity.',
        link: 'https://docs.iota.org/developer/iota-101/transactions/ptb/programmable-transaction-blocks-overview',
    },
    {
        icon: <DynamicFields />,
        title: 'Dynamic Fields',
        body: 'Dynamic fields enable safe data composability, allowing you to add or remove object fields, link objects, and organize data through intuitive hierarchies.',
        link: 'https://docs.iota.org/developer/iota-101/objects/dynamic-fields/',
    },
    {
        icon: <IroncladSecurity />,
        title: 'Ironclad Security',
        body: 'Move eliminates five of the OWASP Top 10 vulnerabilities and mitigates three others. Wallet drainer attacks are impossible as assets are protected by the account?s private key. Smart contract packages are immutable, ensuring network security.',
        link: 'https://docs.iota.org/developer/iota-101/move-overview/package-upgrades/upgrade',
    },
];
