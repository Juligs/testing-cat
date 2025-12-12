import { Frame, IotaLogo } from '@repo/icons';

export const REAL_WORLD_VERTICAL_TITLE_CONTENT = {
    title: 'Real-World Asset Tokenization',
    body: 'IOTA powers RWA tokenization, offering secure verification, efficient asset management, and near-instant cost-effective transactions. With flexible infrastructure, including a Move-based Mainnet and EVM, builders can choose the best fit for their needs, enabling seamless tokenization and automated compliance.',
};
export const REAL_WORLD_ICON_CONTENT = [
    [
        {
            icon: <Frame />,
            body: 'Ownership is trapped in centralized registries, locking retail investors out of private markets',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Fractional ownership of real assets enabled',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: 'Markets are dominated by institutions, widening inequality and creating barriers for retail investors',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'No access barriers to Investment opportunities',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: 'Settlements rely on intermediaries, which causes high fees and delayed transfers',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Near-instant 24/7 settlement',
            transparent: false,
        },
    ],
];
