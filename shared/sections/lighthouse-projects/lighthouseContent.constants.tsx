import { Animation } from 'react-ui-kit/client';
export const LIGHTHOUSE_VERTICAL_TITLE_CONTENT = {
    title: 'Lighthouse Projects',
};

export const LIGHTHOUSE_IMAGE_CARD_CONTENT = [
    {
        title: 'European Blockchain Pre-Commercial Procurement',
        subtitle: 'IOTA solutions for a pan-European blockchain',
        animation: (
            <Animation keepAspectRatio src="/shared/lighthouse-projects/european_blockchain.json" />
        ),
        link: '/showcases/ebsi',
    },

    {
        title: 'Tokenized KYC',
        subtitle: 'Privacy-preserving on-chain authentication',
        animation: (
            <Animation keepAspectRatio src="/shared/lighthouse-projects/tokenized_kyc.json" />
        ),
        link: '/showcases/kyc',
    },
    {
        title: 'Intellectual Property Rights Management',
        subtitle: 'Automated and transparent rights contracts and payments',
        animation: <Animation keepAspectRatio src="/shared/lighthouse-projects/ipr.json" />,
        link: '/showcases/iprm',
    },
    {
        title: 'Digital Product Passports',
        subtitle: 'Secure, transparent product lifecycle data for a circular economy',
        animation: (
            <Animation keepAspectRatio src="/shared/lighthouse-projects/digital_passport.json" />
        ),
        link: '/showcases/dpp',
    },
];
