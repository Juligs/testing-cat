import { BlogPost } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const LATEST_HORIZONTAL_TITLE = {
    title: 'Latest Regulatory Advocacy ',
    body: 'A selection of our most recent work promoting DLT and blockchain interests in global regulatory matters',
    size: TitleTextSize.Medium,
};

export const LATEST_REGULATORY_CONTENT = [
    {
        title: 'UK’s Financial Conduct Authority Cryptoasset Proposals',
        body: 'Joint response with INATBA and Cardano Foundation',
        icon: <BlogPost />,
        link: 'https://blog.iota.org/iota-response-fca-uk/',
    },
    {
        title: 'Global Standards, Local Challenges',
        body: 'Response to the Financial Stability Board’s review of its global regulatory framework on crypto-asset activities.',
        icon: <BlogPost />,
        link: 'https://blog.iota.org/iota-response-fsb/',
    },
    {
        title: 'Smarter Rules for a Safer Web3',
        body: 'IOTA’s take on Australia’s AML reform',
        icon: <BlogPost />,
        link: 'https://blog.iota.org/austrac-aml-cft-consultation/',
    },
    {
        title: 'Our Response to FATF AML/CFT Standards Revisions',
        body: "We support FATF's proposed changes to enhance financial inclusion while maintaining robust compliance.",
        icon: <BlogPost />,
        link: 'https://blog.iota.org/fatf-aml-cft-standards-response/',
    },
    {
        title: "Our Comments on Kenya's Virtual Asset Service Providers Bill",
        body: "We proposes key refinements to Kenya's VASP Bill to align with international best practices.",
        icon: <BlogPost />,
        link: 'https://blog.iota.org/kenya-virtual-asset-law-proposals/',
    },
    {
        title: 'Our Response to IOSCO on Finfluencers Regulation',
        body: 'We call for clearer finfluencer regulations, focusing on transparency, accountability, and investor protection.',
        icon: <BlogPost />,
        link: 'https://blog.iota.org/regulatory-proposals-finfluencers/',
    },
];
