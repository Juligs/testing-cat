import { Route } from '@repo/shared/interfaces';
import {
    BalanceFinder,
    BlogPost,
    ClientLibraries,
    DecentralizedDataStorageAndSeamlessTransactions,
    Discord,
    Flexibility,
    GitHub,
    GoogleScholar,
    LinkedIn,
    Reddit,
    Telegram,
    XSocialIcon,
    Youtube,
    DecentralizedFinance,
} from '@repo/icons';

export const LEARN_FEATURED_CARDS: Route[] = [
    {
        title: 'IOTA Foundation',
        image: '/navbar_foundation.png',
        path: 'https://iota-foundation.org/',
        isExternal: true,
    },
    {
        title: "iotalabs Builder's Hub",
        image: '/navbar_iotalabs.png',
        path: 'https://iotalabs.io/',
        isExternal: true,
    },
];

export const ROUTES: Route[] = [
    {
        title: 'Learn',
        path: '/learn',
        children: [
            {
                title: 'Intro to IOTA',
                path: '/learn/intro',
            },
            {
                title: 'Move on IOTA',
                path: '/learn/move',
            },
            {
                title: 'Tokenomics',
                path: '/learn/tokenomics',
            },
            {
                title: 'Consensus',
                path: '/learn/consensus',
            },
            {
                title: 'Staking',
                path: '/learn/staking',
            },
            {
                title: 'Showcases',
                path: '/learn/showcases',
                children: [
                    {
                        title: 'Multiknip',
                        path: '/learn/showcases/multiknip',
                        hideFromFooter: true,
                    },
                    {
                        title: 'TWIN',
                        path: '/learn/showcases/twin',
                        hideFromFooter: true,
                    },
                    {
                        title: 'EBSI',
                        path: '/learn/showcases/ebsi',
                        hideFromFooter: true,
                    },
                    {
                        title: 'KYC',
                        path: '/learn/showcases/kyc',
                        hideFromFooter: true,
                    },
                    {
                        title: 'IPR Management',
                        path: '/learn/showcases/iprm',
                        hideFromFooter: true,
                    },
                    {
                        title: 'DPP',
                        path: '/learn/showcases/dpp',
                        hideFromFooter: true,
                    },
                ],
            },
            {
                title: 'Focus Areas',
                path: '/learn/focus-areas',
            },
        ],
        navbarSections: [
            {
                title: 'Learn IOTA',
                icon: <ClientLibraries />,
                children: [
                    {
                        title: 'Intro to IOTA',
                        description: 'Blockchain infrastructure bridging Web3 and the real world',
                        path: '/learn/intro',
                    },
                    {
                        title: 'Move',
                        description: 'Move forward with safe smart contract development',
                        path: '/learn/move',
                    },
                    {
                        title: 'Tokenomics',
                        description: "Explore what drives the platform's economic dynamics",
                        path: '/learn/tokenomics',
                    },
                    {
                        title: 'Consensus',
                        description: 'Enabling fast, scalable transaction processing across apps',
                        path: '/learn/consensus',
                    },
                    {
                        title: 'Staking',
                        description: 'Help secure the network while earning rewards',
                        path: '/learn/staking',
                    },
                ],
            },
            {
                title: 'Explore Use Cases',
                icon: <Flexibility />,
                children: [
                    {
                        title: 'Showcases',
                        description: 'Explore all IOTA Technology Showcases',
                        path: '/learn/showcases',
                    },
                    {
                        title: 'Real-World Applications',
                        description: 'Showcasing practical use cases',
                        path: '/learn/showcases/#rwa',
                    },
                    {
                        title: 'Lighthouse Projects',
                        description: 'Highlights of pilot projects and proofs of concept',
                        path: '/learn/showcases/#lighthouse-projects',
                    },
                ],
            },
            {
                title: 'Focus Areas',
                icon: <BalanceFinder />,
                children: [
                    {
                        title: 'All Areas',
                        description: 'Explorer our diverse focus areas',
                        path: '/learn/focus-areas',
                    },
                    {
                        title: 'Real World Asset Tokenization',
                        description: 'Merging traditional finance with Web3 for peak efficiency',
                        path: '/learn/focus-areas/#real-world-asset-tokenization',
                    },
                    {
                        title: 'Digital Identity',
                        description: 'A global trust layer for seamless verification',
                        path: '/learn/focus-areas/#digital-identity',
                    },
                    {
                        title: 'Trade & Supply Chains',
                        description: 'Seamless transfer of digital trade data across borders',
                        path: '/learn/focus-areas/#trade-and-supply-chains',
                    },
                    {
                        title: 'Decentralized Finance',
                        description: 'Empowering innovative DeFi products to build new economies',
                        path: '/learn/focus-areas/#decentralized-finance',
                    },
                    {
                        title: 'Circular Economy',
                        description: 'Sustainable innovation with circular economy solutions',
                        path: '/learn/focus-areas/#circular-economy',
                    },
                ],
            },
            // featured cards
            {
                children: LEARN_FEATURED_CARDS,
            },
        ],
    },
    {
        title: 'Build',
        path: 'https://docs.iota.org/',
        isExternal: true,
        children: [
            {
                title: 'Documentation',
                path: 'https://docs.iota.org/',
                isExternal: true,
            },
            {
                title: 'Business innovation Program',
                path: '/build/business-innovation-program',
            },
        ],
        navbarSections: [
            {
                title: 'Start building',
                icon: <DecentralizedDataStorageAndSeamlessTransactions />,
                children: [
                    {
                        title: 'Developer Documentation',
                        description: 'Comprehensive knowledge source',
                        path: 'https://docs.iota.org/',
                        isExternal: true,
                    },
                ],
            },
            {
                title: 'Grants',
                icon: <DecentralizedFinance />,
                children: [
                    {
                        title: 'IOTA Business Innovation Program',
                        description: 'Technical and financial support for real-world impact',
                        path: '/build/business-innovation-program',
                    },
                ],
            },
            {
                children: LEARN_FEATURED_CARDS,
            },
        ],
    },
    {
        title: 'Connect',
        path: ' https://blog.iota.org/',
        isExternal: true,
        children: [
            {
                title: 'Blog',
                path: 'https://blog.iota.org/',
                isExternal: true,
            },
        ],
        navbarSections: [
            {
                title: 'Latest',
                icon: <BlogPost />,
                children: [
                    {
                        title: 'Blog',
                        description: 'Updates on our tools and products',
                        path: 'https://blog.iota.org/',
                        isExternal: true,
                    },
                ],
            },
            {
                children: LEARN_FEATURED_CARDS,
            },
        ],
    },
];

export const SOCIAL_LINKS = [
    {
        title: 'Builder',
        icon: Discord,
        url: 'https://builders-discord.iota.org/',
        isExternal: true,
        arialLabel: 'Builder Discord',
    },
    {
        title: 'Community',
        icon: Discord,
        url: 'https://discord.iota.org',
        isExternal: true,
        arialLabel: 'Community Discord',
    },
    {
        icon: Telegram,
        url: 'https://t.me/IOTA_Official_Community',
        isExternal: true,
        arialLabel: 'Telegram',
    },
    {
        icon: Reddit,
        url: 'https://www.reddit.com/r/Iota/',
        isExternal: true,
        arialLabel: 'Reddit',
    },
    {
        icon: GitHub,
        url: 'https://github.com/iotaledger',
        isExternal: true,
        arialLabel: 'GitHub',
    },
    {
        icon: GoogleScholar,
        url: 'https://scholar.google.com/citations?hl=en&user=_ZIH81gAAAAJ&view_op=list_works&sortby=pubdate',
        isExternal: true,
        arialLabel: 'Google Scholar',
    },
    {
        icon: Youtube,
        url: 'https://www.youtube.com/c/iotafoundation',
        isExternal: true,
        arialLabel: 'YouTube',
    },
    {
        icon: XSocialIcon,
        url: 'https://x.com/iota',
        isExternal: true,
        arialLabel: 'X',
    },
    {
        icon: LinkedIn,
        url: 'https://www.linkedin.com/company/iotafoundation/',
        isExternal: true,
        arialLabel: 'LinkedIn',
    },
];

export const LEGAL_ROUTES: Route[] = [
    {
        title: 'Impressum',
        path: '/impressum',
    },
    {
        title: 'Privacy Policy',
        path: '/privacy-policy',
    },
    {
        title: 'Cookie Policy',
        path: '/cookie-policy',
    },
    {
        title: 'Trademark Policy',
        path: '/trademark',
    },
    {
        title: 'Terms',
        path: '/terms-of-use',
    },
];

export const COMPANY_DATA = [
    {
        title: 'Registered Address',
        address: ['IOTA Foundation', 'Pappelallee 78/79', '10437 Berlin', 'Germany'],
    },
    {
        title: 'Company',
        address: [
            'ID/Company No.: 3416/1234/2',
            'EU public ID number in the EU Transparency Register:',
            '500027331119-04',
            'VAT ID: DE329624902',
        ],
    },
];
