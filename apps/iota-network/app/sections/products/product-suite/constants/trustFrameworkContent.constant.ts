import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';

type CtaTrustFrameworkProps = (React.ComponentProps<typeof SmallCtaCard> & {
    link: string;
    isExternal?: boolean;
})[];

export const CTA_MAINNET: CtaTrustFrameworkProps = [
    {
        title: 'IOTA Identity',
        subtitle: 'Empowering secure, private, and decentralized digital interactions',
        image: '/products/product-suite/identity.png',
        link: '/products/identity',
    },
    {
        title: 'IOTA Hierarchies',
        subtitle: 'Secure and verifiable trust delegation in digital ecosystems',
        image: '/products/product-suite/hierarchies.png',
        link: '/products/hierarchies',
    },
    {
        title: 'IOTA Notarization',
        subtitle: 'Verifiable and immutable on-chain records for any use case',
        image: '/products/product-suite/notarization.png',
        link: '/products/notarization',
    },
    {
        title: 'IOTA Tokenization',
        subtitle: 'Represent real-world assets as secure and customizable digital tokens',
        image: '/products/product-suite/tokenization.png',
        link: '/products/tokenization',
    },
    {
        title: 'IOTA Gas Station',
        subtitle: 'Simplify Web3 user experience and onboarding',
        image: '/products/product-suite/gas_station.png',
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
