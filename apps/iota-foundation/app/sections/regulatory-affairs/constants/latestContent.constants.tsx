import { HorizontalTitle, ImageCard, TitleTextSize } from 'react-ui-kit';

export const LATEST_HORIZONTAL_TITLE: React.ComponentProps<typeof HorizontalTitle> = {
    title: 'Latest Regulatory Advocacy',
    body: 'A selection of our most recent work promoting DLT and blockchain interests in global regulatory matters',
    size: TitleTextSize.Medium,
};

export const LATEST_REGULATORY_CONTENT: (React.ComponentProps<typeof ImageCard> & {
    link: string;
})[] = [
    {
        title: 'Asia Redefines Digital Asset Regulation',
        body: 'How IOTA is responding to policy developments in Asia.',
        link: 'https://blog.iota.org/asia-redefines-digital-asset-regulation/',
    },
    {
        title: 'European Blockchain Sandbox: Lessons Learned',
        body: 'How our Tokenized KYC project helps shape identity standards.',
        link: 'https://blog.iota.org/european-blockchain-sandbox-lessons-learned/',
    },
    {
        title: 'Responding to A New Era of U.S. Digital Asset Policy',
        body: 'Feedback to the Senate Banking Committee and Commodity Futures Trading Commission.',
        link: 'https://blog.iota.org/us-crypto-regulation-2025/',
    },
    {
        title: 'UK’s Financial Conduct Authority Cryptoasset Proposals',
        body: 'Joint response with INATBA and Cardano Foundation',
        link: 'https://blog.iota.org/iota-response-fca-uk/',
    },
    {
        title: 'Global Standards, Local Challenges',
        body: "Responding to the Financial Stability Board's global regulatory framework on crypto-asset activities.",
        link: 'https://blog.iota.org/iota-response-fsb/',
    },
    {
        title: 'Smarter Rules for a Safer Web3',
        body: 'Our take on Australia’s AML reform.',
        link: 'https://blog.iota.org/austrac-aml-cft-consultation/',
    },
    {
        title: 'Our Response to FATF AML/CFT Standards Revisions',
        body: 'Supporting FATF’s proposals to enhance financial inclusion and robust compliance.',
        link: 'https://blog.iota.org/fatf-aml-cft-standards-response/',
    },
    {
        title: 'Our Response to IOSCO on Finfluencers Regulation',
        body: 'Calling for transparency, accountability, and investor protection in finfluencer regulations.',
        link: 'https://blog.iota.org/regulatory-proposals-finfluencers/',
    },
    {
        title: "Our Comments on Kenya's Virtual Asset Service Providers Bill",
        body: "Our proposals to align Kenya's VASP Bill with international best practices.",
        link: 'https://blog.iota.org/kenya-virtual-asset-law-proposals/',
    },
];
