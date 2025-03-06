import { Animation } from 'react-ui-kit/client';
export const LIGHTHOUSE_VERTICAL_TITLE_CONTENT = {
    title: 'Lighthouse Projects',
};

export const LIGHTHOUSE_IMAGE_CARD_CONTENT = [
    {
        title: 'European Blockchain PCP',
        subtitle: 'IOTA solutions for a pan-European blockchain',
        animation: (
            <Animation keepAspectRatio src="/lighthouse-projects/european_blockchain.json" />
        ),
        link: '/showcases/ebsi',
        image: '/lighthouse-projects/european_blockchain.png',
    },

    {
        title: 'Tokenized KYC',
        subtitle: 'Privacy-preserving on-chain authentication',
        animation: <Animation keepAspectRatio src="/lighthouse-projects/tokenized_kyc.json" />,
        link: '/showcases/kyc',
        image: '/lighthouse-projects/tokenized_kyc.png',
    },
    {
        title: 'Intellectual Property Rights Management',
        subtitle: 'Automated and transparent rights contracts and payments',
        animation: <Animation keepAspectRatio src="/lighthouse-projects/ipr.json" />,
        link: '/showcases/iprm',
        image: '/lighthouse-projects/ipr.png',
    },
    {
        title: 'Digital Product Passports',
        subtitle: 'Secure, transparent product lifecycle data for a circular economy',
        animation: <Animation keepAspectRatio src="/lighthouse-projects/digital_passport.json" />,
        link: '/showcases/dpp',
        image: '/lighthouse-projects/digital_passport.png',
    },
];
