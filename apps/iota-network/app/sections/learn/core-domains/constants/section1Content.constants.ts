import { scrollToSection } from '@repo/shared/utils';
export const SECTION1_ANCHORLINKS = [
    {
        text: 'Digital identity',
        onClick: () => scrollToSection('#digital-identity'),
    },
    {
        text: 'Trade & Supply Chains',
        onClick: () => scrollToSection('#trade-and-supply-chains'),
    },
    {
        text: 'Circular Economy',
        onClick: () => scrollToSection('#circular-economy'),
    },
    {
        text: 'Decentralized Finance',
        onClick: () => scrollToSection('#decentralized-finance'),
    },
    {
        text: 'Asset Tokenization',
        onClick: () => scrollToSection('#real-world-asset-tokenization'),
    },
];
