import { CtaCard } from 'react-ui-kit';

export const MEMBERSHIP_CTA_CARD: React.ComponentProps<typeof CtaCard> = {
    title: 'Memberships & Working Groups',
    subtitle:
        'The IOTA Foundation is a member of several international working groups that empower the ecosystem, develop new business models, and advocate for the industry.',
    image: '/regulatory-affairs/memberships.png',
};

export const MEMBERSHIP_ICON_CONTENT = [
    {
        title: 'Blockchain Bundesverband',
        body: 'Based in the heart of the German blockchain community.',
        link: 'https://bundesblock.de/en/',
    },
    {
        title: 'INATBA',
        body: 'The International Association of Trusted Blockchain Applications is hosted by the European Commission.',
        link: 'https://inatba.org',
    },
    {
        title: 'GBBC ',
        body: 'Global Blockchain Business Council is the largest leading global industry association for the blockchain technology ecosystem.',
        link: 'https://www.gbbc.io',
    },
    {
        title: 'CryptoUK',
        body: "The UK's leading trade association for crypto and digital assets since 2017.",
        link: 'https://cryptouk.io/',
    },
];
