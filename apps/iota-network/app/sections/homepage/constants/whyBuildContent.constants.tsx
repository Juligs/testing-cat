import { ArrowTopRight } from '@repo/icons';
import { ButtonVariant } from 'react-ui-kit';

export const WHY_BUILD_VERTICAL_TITLE_CONTENT = {
    title: 'Why Build on IOTA?',
    subtitle: [
        'A trust layer for the world: Cutting-edge technology',
        ' with proven real-world adoption',
    ],
    body: 'IOTA offers unmatched decentralization, permissionless access, energy efficiency, rapid transactions, equitable tokenomics, and robust censorship resistance, ensuring reliability for your business needs.',
};

export const WHY_BUILD_BUTTONS = [
    {
        text: 'Get Started',
        link: 'https://docs.iota.org/developer/getting-started',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        inverted: false,
    },
    {
        text: 'Tokenomics',
        link: 'https://docs.iota.org/about-iota/tokenomics/',
        variant: ButtonVariant.Secondary,
        icon: <ArrowTopRight />,
        inverted: true,
    },
];

export const WHY_BUILD_IMAGE_CARD_CONTENT = [
    {
        title: 'Move-Based Mainnet and EVM',
        subtitle: 'Define rich and composable on-chain assets',
        image: '/homepage/why-build/image-card-images/move_base.png',
        link: 'https://docs.iota.org/about-iota',
    },
    {
        title: 'Advanced Identity Features',
        subtitle: 'Verification of tokenized asset authenticity',
        image: '/homepage/why-build/image-card-images/advance_identity.png',
        link: 'https://docs.iota.org/iota-identity',
    },
    {
        title: 'Web Wallet Extension',
        subtitle: 'Frictionless onboarding with the IOTA wallet ',
        image: '/homepage/why-build/image-card-images/web_wallet.png',
        link: 'https://docs.iota.org/about-iota/iota-wallet/getting-started',
    },
    {
        title: 'Parallel TX Processing',
        subtitle: 'Exceptional scalability, instant settlement',
        image: '/homepage/why-build/image-card-images/parallel_tx.png',
        link: 'https://docs.iota.org/about-iota#consensus-on-iota',
    },
];

export const WHY_BUILD_CTA_CARD_CONTENT = {
    title: 'A Versatile Ledger for the Future That Works Today',
    subtitle: 'A mainnet built for flexibility and interoperability',
    image: '/homepage/why-build/cta_card.png',
    inverted: true,
};

export const WHY_BUILD_TEXT_LINK = [
    {
        text: 'Get started with Move',
        link: 'https://docs.iota.org/developer/iota-101/move-overview/',
    },
    {
        text: 'Get started with EVM',
        link: 'https://evm.iota.org',
    },
];
