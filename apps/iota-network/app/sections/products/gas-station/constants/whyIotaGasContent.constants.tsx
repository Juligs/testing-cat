import { Burnability, FeeBurning, KeyRotation } from '@repo/icons';

export const WHY_IOTA_VERTICAL_TITLE = {
    title: 'Why IOTA?',
    subtitle: 'Best-in-class technology and tooling',
    body: 'The IOTA Gas Station is built for scalability, efficiency, and security, ensuring smooth gas sponsorship. It manages a gas coin pool tied to a sponsor address, enabling multiple transactions to process concurrently.',
};

export const WHY_IOTA_ICON_CONTENT = [
    {
        icon: <Burnability />,
        title: 'Scalable Gas Coin Management',
        body: 'Maintains a large pool of gas coins to handle high-volume sponsored transactions at scale.',
        link: 'https://docs.iota.org/operator/gas-station/architecture/features#monitoring--analytics',
    },
    {
        icon: <FeeBurning />,
        title: 'API-Driven Sponsorship',
        body: 'Offers JSON-RPC interfaces for reserving and using gas coins, simplifying integration with dApps and services.',
        link: 'https://docs.iota.org/operator/gas-station/api-reference/',
    },
    {
        icon: <KeyRotation />,
        title: 'Flexible Security Options',
        body: 'Works with external Key Management Services (KMS) for secure transaction signing or supports in-memory private key storage for simpler setups.',
        link: 'https://docs.iota.org/operator/gas-station/architecture/features#access-controller',
    },
];
