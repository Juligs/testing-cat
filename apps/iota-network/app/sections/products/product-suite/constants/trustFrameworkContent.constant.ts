import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';

type CtaTrustFrameworkProps = (React.ComponentProps<typeof SmallCtaCard> & {
    link: string;
    isExternal?: boolean;
})[];

export const CTA_MAINNET: CtaTrustFrameworkProps = [
    {
        title: 'IOTA Identity',
        subtitle: 'Empowering secure, private, and decentralized digital interactions',
        image: '/shared/identity.png',
        link: '/products/identity',
    },
    {
        title: 'IOTA Hierarchies',
        subtitle: 'Programmable and verifiable trust relationships',
        image: '/shared/hierarchies.png',
        link: '/products/hierarchies',
    },
    {
        title: 'IOTA Notarization',
        subtitle: 'Creating verifiable and immutable on-chain records ',
        image: '/shared/notarization.png',
        link: '/products/notarization',
    },
    {
        title: 'IOTA Tokenization',
        subtitle: 'Representing real-world assets onchain',
        image: '/shared/tokenization.png',
        link: '/products/tokenization',
    },
    {
        title: 'IOTA Gas Station',
        subtitle: 'Efficient liquidity infrastructure for DeFi',
        image: '/shared/gas_station.png',
        link: '/products/gas-station',
    },
];

export const CTA_EVM: CtaTrustFrameworkProps = [
    {
        title: 'IOTA Solo Testing Framework',
        subtitle: 'For validating smart contracts and inter-chain protocols before deployment',
        link: 'https://docs.iota.org/developer/iota-evm/solo/getting-started',
        isExternal: true,
        image: '/products/product-suite/testing.png',
    },
];
