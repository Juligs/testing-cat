import { Animation } from 'react-ui-kit/client';

export const INTEGRATION_STACK_VERTICAL_TITLE_CONTENT = {
    title: 'A Stack to Power the World',
    subtitle: ['The IOTA Integration Stack', 'builds the foundations of a new digital economy'],
    body: 'High-performance networks like the Move-based IOTA protocol and the IOTA EVM L2 form the backbone of our permissionless infrastructure, bridging Web3 advancements with real-world applications.',
};

export const INTEGRATION_STACK_CTA_CARD_CONTENT = [
    {
        title: 'IOTA Mainnet',
        subtitle: 'Move-based Layer 1 with object-centric architecture',
        animation: <Animation src="/homepage/integration-stack/cta-animation/tangle.json" />,
        link: 'https://docs.iota.org/about-iota#layer-1',
    },
    {
        title: 'IOTA EVM',
        subtitle: 'High-performance Layer 2 EVM with seamless interoperability',
        animation: <Animation src="/homepage/integration-stack/cta-animation/evm.json" />,
        link: 'https://docs.iota.org/about-iota#evm',
    },
];

export const INTEGRATION_STACK_IMAGE_CARD_CONTENT = [
    {
        title: 'IOTA Identity',
        subtitle: 'Empowering secure, private, and decentralized digital interactions',
        animation: <Animation keepAspectRatio src="/shared/identity.json" />,
        link: 'https://docs.iota.org/iota-identity',
    },
    {
        title: 'IOTA Tokenization',
        subtitle: 'Effortlessly create and manage unique digital assets',
        animation: <Animation keepAspectRatio src="/shared/raw_tokenization.json" />,
        link: 'https://docs.iota.org/developer/advanced/asset-tokenization',
    },
    {
        title: 'IOTA Wallets',
        subtitle: 'Your secure gateway to the IOTA ecosystem',
        animation: (
            <Animation
                keepAspectRatio
                src="/homepage/integration-stack/image-card-animation/wallets.json"
            />
        ),
        link: 'https://docs.iota.org/about-iota/iota-wallet/getting-started',
    },
    {
        title: 'IOTA Tooling',
        subtitle: 'Get started with our comprehensive toolkit',
        animation: (
            <Animation
                keepAspectRatio
                src="/homepage/integration-stack/image-card-animation/evm_toolkit.json"
            />
        ),
        link: 'https://docs.iota.org/references',
    },
];
