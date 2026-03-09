import { CtaCard } from 'react-ui-kit';

export const REAL_WORLD_CTA_CONTENT: (React.ComponentProps<typeof CtaCard> & { link: string })[] = [
    {
        image: '/learn/trust-framework/real-world/digital_identity.png',
        title: 'Digital Identity',
        subtitle: 'When trust is verified, everything else scales',
        link: '/learn/focus-areas#digital-identity',
    },
    {
        image: '/learn/trust-framework/real-world/trade_&_supply.png',
        title: 'Global Trade & Supply Chains',
        subtitle: 'When data flows freely, trade moves faster',
        link: '/learn/focus-areas#trade-and-supply-chains',
    },
    {
        image: '/build/get-started/staking/product_lifecycle.png',
        title: 'Product Lifecycle',
        subtitle: 'When every step is visible, sustainability becomes real',
        link: '/learn/focus-areas#product-lifecycle',
    },
    {
        image: '/build/get-started/staking/real_world_showcase.png',
        title: 'Real-World Asset Tokenization',
        subtitle: 'When assets go digital, new markets open',
        link: '/learn/focus-areas#real-world-asset-tokenization',
    },
    {
        image: '/build/get-started/staking/decentralized.png',
        title: 'Decentralized Finance',
        subtitle: 'When innovation meets trust, finance evolves',
        link: '/learn/focus-areas#decentralized-finance',
    },
];
