import { Route } from '@lib/interfaces';
import { Placeholder } from '@repo/icons';

export const LEARN_FEATURED_CARDS: Route[] = [
    {
        title: 'IOTA Foundation',
        image: '/navbar-foundation.png',
        path: '/foundation',
        isExternal: true,
    },
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
        path: '/learn',
        children: [
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
                ],
            },
            {
                title: 'Core Domains',
                path: '/learn/core-domains',
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
                        path: '/learn',
                    },
                ],
            },
            {
                title: 'Explore Use Cases',
                icon: <Placeholder />,
                children: [
                    {
                        title: 'Real-World Applications',
                        description: 'Showcasing practical use cases',
                        path: '/learn/showcases#rwa-section',
                    },
                    {
                        title: 'Lighthouse Projects',
                        description: 'Highlights of pilot projects and Proofs of Concept',
                        path: '/learn/showcases#lighthouse-projects',
                    },
                ],
            },
            {
                title: 'Core Domains',
                icon: <Placeholder />,
                children: [
                    {
                        title: 'Real World Asset Tokenization',
                        description: 'Merging traditional finance with Web3 for peak efficiency',
                        path: '/learn/core-domains#real-world-asset-tokenization',
                    },
                    {
                        title: 'Digital Identity',
                        description: 'A global trust layer between everyone and everything',
                        path: '/learn/core-domains/#digital-identity',
                    },
                    {
                        title: 'Trade & Supply Chains',
                        description: 'Seamless transfer of digital trade data across borders',
                        path: '/learn/core-domains/#trade-and-supply-chains',
                    },
                    {
                        title: 'Decentralized Finance',
                        description: 'Unlock innovative DeFi opportunities with IOTA EVM',
                        path: '/learn/core-domains/#decentralized-finance',
                    },
                    {
                        title: 'Circular Economy',
                        description: 'Sustainable innovation with circular economy solutions',
                        path: '/learn/core-domains/#circular-economy',
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
