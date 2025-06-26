import { Route } from '@repo/shared/interfaces';
import {
    BalanceFinder,
    BlogPost,
    ClientLibraries,
    DecentralizedDataStorageAndSeamlessTransactions,
    Flexibility,
    IotaChains,
    DecentralizedFinance,
    DeveloperFriendly,
    ProtocolAgnosticDesign,
    Daos,
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
        path: '/build',
        isExternal: true,
        children: [
            {
                title: 'Documentation',
                path: 'https://docs.iota.org/',
                isExternal: true,
            },
            {
                title: 'Grants',
                path: '/build/grants',
            },
            {
                title: 'Business Innovation Program',
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
                        title: 'Project Funding',
                        description: 'Fund for innovative project ideas',
                        path: '/build/grants',
                    },
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
        title: 'Products',
        path: '/products',
        children: [
            {
                title: 'Product Suite',
                path: '/products/product-suite',
            },
            {
                title: 'Mainnet',
                path: '/products/mainnet',
            },
            {
                title: 'EVM',
                path: '/products/evm',
            },
            {
                title: 'Identity',
                path: '/products/identity',
            },
            {
                title: 'Tokenization',
                path: '/products/tokenization',
            },
            {
                title: 'Gas Station',
                path: '/products/gas-station',
            },
            {
                title: 'Tools',
                path: '/products/tooling',
            },
        ],
        navbarSections: [
            {
                title: 'Core Tech',
                icon: <IotaChains />,
                children: [
                    {
                        title: 'Product Suite',
                        description: 'Explore our complete Technology Stack',
                        path: '/products/product-suite',
                    },
                    {
                        title: 'IOTA Mainnet',
                        description: 'Move-based Layer 1 with object-centric architectures',
                        path: '/products/mainnet',
                    },
                    {
                        title: 'IOTA EVM',
                        description: 'High-performance Layer 2 EVM with seamless interoperability',
                        path: '/products/evm',
                    },
                ],
            },
            {
                title: 'Tooling',
                icon: <DeveloperFriendly />,
                children: [
                    {
                        title: 'Explorer',
                        description: 'Mainnet Explorer, EVM Explorer, Universal Resolver',
                        path: '/products/tooling/#explorers',
                    },
                    {
                        title: 'Libraries',
                        description: 'SDKs and core APIs',
                        path: '/products/tooling/#iota-application-libraries',
                    },
                    {
                        title: 'CLIs',
                        description: 'Interact directly with IOTA network',
                        path: '/products/tooling/#iota-CLIs',
                    },
                    {
                        title: 'Wallets',
                        description: 'Secure gateway to the ecosystem',
                        path: '/products/wallet',
                    },
                    {
                        title: 'IOTA EVM Bridge',
                        description: 'Sending assets and making withdrawals on Layer 2',
                        path: '/products/tooling/#iota-evm-bridge',
                    },
                ],
            },
            {
                title: 'Trust Framework',
                icon: <ProtocolAgnosticDesign />,
                children: [
                    {
                        title: 'IOTA Tokenization',
                        description: 'Effortlessly create and manage unique digital assets',
                        path: '/products/tokenization',
                    },
                    {
                        title: 'IOTA Identity',
                        description:
                            'Empowering secure, private, and decentralized digital interactions',
                        path: '/products/identity',
                    },
                    {
                        title: 'IOTA Gas Station',
                        description: 'Simplify Web3 user experience and onboarding',
                        path: '/products/gas-station',
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
        path: '/connect',
        isExternal: true,
        children: [
            {
                title: 'Our Community',
                path: '/connect/our-community',
                isExternal: false,
            },
            {
                title: 'Build Together',
                path: '/connect/building-together',
                isExternal: false,
            },
            {
                title: 'Blog',
                path: 'https://blog.iota.org/',
                isExternal: true,
            },
            {
                title: 'Events',
                path: '/connect/events',
                isExternal: false,
            },
        ],
        navbarSections: [
            {
                title: 'Community',
                icon: <Daos />,
                children: [
                    {
                        title: 'Our Community',
                        description: 'The latest from our ecosystem',
                        path: '/connect/our-community',
                        isExternal: false,
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'Build Together',
                        description: 'Join the conversation',
                        path: '/connect/building-together',
                        isExternal: false,
                    },
                ],
            },
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
                    {
                        title: 'Events',
                        description: 'Whats our plan for events?',
                        path: '/connect/events',
                        isExternal: false,
                    },
                ],
            },
            {
                children: LEARN_FEATURED_CARDS,
            },
        ],
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
