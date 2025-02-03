import { Route } from '@lib/interfaces';
import {
    Discord,
    GitHub,
    GoogleScholar,
    LinkedIn,
    Placeholder,
    Reddit,
    Telegram,
    XSocialIcon,
    Youtube,
} from '@repo/icons';

export const LEARN_FEATURED_CARDS: Route[] = [
    // {
    //     title: 'IOTA Foundation',
    //     image: '/navbar-foundation.png',
    //     path: '/foundation',
    //     isExternal: true,
    // },
    {
        title: 'iotalabs',
        image: '/navbar-iotalabs.png',
        path: 'https://iotalabs.io/',
        isExternal: true,
    },
];

export const ROUTES: Route[] = [
    {
        title: 'Learn',
        path: '/learn/intro',
        children: [
            {
                title: 'Learn IOTA',
                path: '/learn/intro',
            },
            {
                title: 'Showcases',
                path: '/learn/showcases',
                children: [
                    {
                        title: 'Demia',
                        path: '/learn/showcases/demia',
                        hideFromFooter: true,
                    },
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
                        path: '/learn/showcases/tokenized-kyc',
                        hideFromFooter: true,
                    },
                    {
                        title: 'IPR Management',
                        path: '/learn/showcases/ipr-management',
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
                icon: <Placeholder />,
                children: [
                    {
                        title: 'Intro to IOTA',
                        description: 'Blockchain infrastructure bridging Web3 and the real world',
                        path: '/learn/intro',
                    },
                ],
            },
            {
                title: 'Explore Use Cases',
                icon: <Placeholder />,
                children: [
                    {
                        title: 'Showcases',
                        description: 'Explorer all IOTA Technology Showcases',
                        path: '/learn/showcases',
                    },
                    {
                        title: 'Real-World Applications',
                        description: 'Showcasing practical use cases',
                        path: '/learn/showcases/#rwa',
                    },
                    {
                        title: 'Lighthouse Projects',
                        description: 'Highlights of pilot projects and Proofs of Concept',
                        path: '/learn/showcases/#lighthouse-projects',
                    },
                ],
            },
            {
                title: 'Focus Areas',
                icon: <Placeholder />,
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
                        description: 'A global trust layer between everyone and everything',
                        path: '/learn/focus-areas/#digital-identity',
                    },
                    {
                        title: 'Trade & Supply Chains',
                        description: 'Seamless transfer of digital trade data across borders',
                        path: '/learn/focus-areas/#trade-and-supply-chains',
                    },
                    {
                        title: 'Decentralized Finance',
                        description: 'Unlock innovative DeFi opportunities with IOTA EVM',
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
];

export const SOCIAL_LINKS = [
    {
        title: 'Builder',
        icon: Discord,
        url: 'https://builders-discord.iota.org/',
        isExternal: true,
    },
    {
        title: 'Community',
        icon: Discord,
        url: 'https://discord.iota.org',
        isExternal: true,
    },
    {
        icon: Telegram,
        url: 'https://t.me/IOTA_Official_Community',
        isExternal: true,
    },
    {
        icon: Reddit,
        url: 'https://www.reddit.com/r/Iota/',
        isExternal: true,
    },
    {
        icon: GitHub,
        url: 'https://github.com/iotaledger',
        isExternal: true,
    },
    {
        icon: GoogleScholar,
        url: 'https://scholar.google.com/citations?user=_ZIH81gAAAAJ&hl=en',
        isExternal: true,
        hideFromFooter: true,
    },
    {
        icon: Youtube,
        url: 'https://www.youtube.com/c/iotafoundation',
        isExternal: true,
    },
    {
        icon: XSocialIcon,
        url: 'https://x.com/iotalabs_',
        isExternal: true,
    },
    {
        icon: LinkedIn,
        url: 'https://www.linkedin.com/company/iotafoundation/',
        isExternal: true,
    },
];

export const LEGAL_ROUTES: Route[] = [
    {
        title: 'Privacy Policy',
        path: '/privacy-policy',
    },
    {
        title: 'Impressum',
        path: '/privacy-policy',
    },
    {
        title: 'Trademark Policy',
        path: '/privacy-policy',
    },
    {
        title: 'Terms of Use',
        path: '/privacy-policy',
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
    {
        title: 'Board of Directors',
        address: ['Dominik Schiener,', 'Jan Misselwitz,', 'Luca Moser', 'Anja Raden'],
    },
];
