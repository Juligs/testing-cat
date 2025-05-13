import { DataInsights } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';
import { Animation } from 'react-ui-kit/client';

export const WHAT_IS_SUPPORTED_HORIZONTAL_TITLE = {
    title: "What We're Looking For",
    subtitle: "Example use cases we're excited about",
    body: "These categories aren't exhaustive - any serious, real-world application that aims to solve tangible business, industry, or societal problems is welcome.",
    size: TitleTextSize.Medium,
};

export const WHAT_IS_SUPPORTED_IMAGE_CARD = [
    {
        title: 'Supply Chain Tracking',
        subtitle:
            'Tokenize assets for authenticity and traceability, ensuring compliance in global logistics.',
        image: '/build/business/our-decision/mainnet.png',
        animation: <Animation keepAspectRatio src="/shared/supply_chain_tracking.json" />,
    },
    {
        title: 'Digital Product Passports',
        subtitle:
            'Enable full transparency on product origin, composition, and sustainability throughout its lifecycle.',
        image: '/build/business/our-decision/proven_capabilities.png',
        animation: <Animation keepAspectRatio src="/shared/digital_passport.json" />,
    },
    {
        title: 'Identity and Access Management',
        subtitle:
            'Use decentralized identities for secure onboarding, credentialing, and access control.',
        image: '/build/business/our-decision/functional_representation.png',
        animation: <Animation keepAspectRatio src="/shared/identity.json" />,
    },
    {
        title: 'Data Integrity & Compliance',
        subtitle:
            'Solutions must create on-chain assets tied to real-world counterparts to emphasize tangible impact.',
        image: '/build/business/our-decision/functional_representation.png',
        animation: <Animation keepAspectRatio src="/shared/european_blockchain.json" />,
    },
    {
        title: 'Real-World Asset Tokenization',
        subtitle:
            'Bring physical assets like real estate or commodities on-chain for new business models.',
        image: '/build/business/our-decision/functional_representation.png',
        animation: <Animation keepAspectRatio src="/shared/raw_tokenization.json" />,
    },
];
export const WHAT_IS_SUPPORTED_ICON_CONTENT = {
    icon: <DataInsights />,
    title: 'Disclaimer',
    body: 'We support real-world solutions ready for commercial deployment on the public IOTA Mainnet. Our focus is on projects with tangible business applications - not speculative or high-risk DeFi, pure infrastructure, academic research, or solutions built on other networks (like private chains or the IOTA EVM). If your idea falls outside these guidelines, please explore the Iotalabs Grants Program.',
    filled: true,
};
