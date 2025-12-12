import { Frame, IotaLogo } from '@repo/icons';

export const DECENTRALIZED_FINANCE_VERTICAL_TITLE_CONTENT = {
    title: 'Decentralized Finance',
    body: 'IOTA’s Move-based Layer 1 empowers builders with advanced DeFi tools, optional EVM integration, and sustainable tokenomics, driving a new era of innovative, community-led finance.',
};

export const DECENTRALIZED_FINANCE_ICON_CONTENT = [
    [
        {
            icon: <Frame />,
            body: 'Slow and costly cross-border payments',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Sub-second and low-few settlement across borders',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: 'Unequal access to capital markets excludes SMEs and individuals',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Lower entry-barriers via tokenization and fractional access',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: 'Limited transparency in asset-backed financing is',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Audit-friendly ledger with immutability by design',
            transparent: false,
        },
    ],
];
