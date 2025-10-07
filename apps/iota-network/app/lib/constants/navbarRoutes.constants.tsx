import { MenuRowSection, NavbarGroupItem } from '@components/layout/layout.interfaces';
import {
    BalanceFinder,
    BlogPost,
    ClientLibraries,
    Daos,
    DeveloperFriendly,
    Flexibility,
    IotaChains,
    IotaClientCli,
    PilotProjects,
    ProtocolAgnosticDesign,
    TokenizationOfElectronicDocuments,
    VisitWebsite,
} from '@repo/icons';

const IOTA_ECOSYSTEM_ROW: MenuRowSection[] = [
    {
        title: 'IOTA ECOSYSTEM',
        icon: <VisitWebsite />,
    },
    {
        children: [
            {
                title: 'iotalabs',
                description: 'Builder’s Hub',
                href: 'https://iotalabs.io',
                image: '/iotalabs.svg',
                isExternal: true,
            },
        ],
    },
    {
        children: [
            {
                title: 'IOTA Foundation',
                description: 'The Vision Behind the Tech',
                href: 'https://iota-foundation.org/',
                image: '/foundation.svg',
                isExternal: true,
            },
        ],
    },
    {
        children: [
            {
                title: 'IOTA Names',
                description: 'Your On-Chain Name',
                href: 'https://testnet.iotanames.com/',
                image: '/iota_names.svg',
                isExternal: true,
            },
        ],
    },
];

const IOTA_ECOSYSTEM_SECTION = {
    title: 'IOTA ECOSYSTEM',
    icon: <VisitWebsite />,
    highlighted: true,
    children: [
        {
            title: 'iotalabs',
            description: 'Builder’s Hub',
            href: 'https://iotalabs.io',
            image: '/iotalabs.svg',
            isExternal: true,
        },
        {
            title: 'IOTA Foundation',
            description: 'The Vision Behind the Tech',
            href: 'https://iota-foundation.org/',
            image: '/foundation.svg',
            isExternal: true,
        },
        {
            title: 'IOTA Names',
            description: 'Your On-Chain Name',
            href: 'https://testnet.iotanames.com/',
            image: '/iota_names.svg',
            isExternal: true,
        },
    ],
};

export const items: NavbarGroupItem[] = [
    {
        title: 'Learn',
        path: '/learn',
        menuRows: [
            {
                sections: [
                    {
                        title: 'Learn IOTA',
                        icon: <ClientLibraries />,
                        children: [
                            {
                                title: 'Intro to IOTA',
                                href: '/learn/intro',
                            },
                            {
                                title: 'Move',
                                href: '/learn/move',
                            },
                            {
                                title: 'Trust Framework',
                                href: '/learn/trust-framework',
                            },
                            {
                                title: 'Tokenomics',
                                href: '/learn/tokenomics',
                            },
                            {
                                title: 'Consensus',
                                href: '/learn/consensus',
                            },
                            {
                                title: 'Staking',
                                href: '/learn/staking',
                            },
                        ],
                    },
                    {
                        title: 'Explore use cases',
                        icon: <Flexibility />,
                        children: [
                            {
                                title: 'Showcases',
                                href: '/learn/showcases',
                            },
                            {
                                title: 'Real-World Applications',
                                href: '/learn/showcases/#rwa',
                            },
                            {
                                title: 'Lighthouse Projects',
                                href: '/learn/showcases/#lighthouse-projects',
                            },
                        ],
                    },
                    {
                        title: 'Focus Areas',
                        icon: <BalanceFinder />,
                        children: [
                            {
                                title: 'All Areas',
                                href: '/learn/focus-areas',
                            },
                            {
                                title: 'Real World Asset Tokenization',
                                href: '/learn/focus-areas/#real-world-asset-tokenization',
                            },
                            {
                                title: 'Digital Identity',
                                href: '/learn/focus-areas/#digital-identity',
                            },
                            {
                                title: 'Trade & Supply Chains',
                                href: '/learn/focus-areas/#trade-and-supply-chains',
                            },
                            {
                                title: 'Decentralized Finance',
                                href: '/learn/focus-areas/#decentralized-finance',
                            },
                            {
                                title: 'Circular Economy',
                                href: '/learn/focus-areas/#circular-economy',
                            },
                        ],
                    },
                    { ...IOTA_ECOSYSTEM_SECTION },
                ],
            },
        ],
    },
    {
        title: 'Products',
        path: '/products',
        menuRows: [
            {
                sections: [
                    {
                        overline: 'Network Layer 1',
                        title: 'IOTA Mainnet',
                        cta: {
                            text: 'Explore IOTA Mainnet',
                            href: '/products/mainnet',
                        },
                    },
                    {
                        title: 'BUILD TOOLS',
                        icon: <IotaChains />,
                        children: [
                            {
                                title: 'IOTA API',
                                href: 'https://docs.iota.org/developer/references/iota-api',
                                isExternal: true,
                            },
                            {
                                title: 'IOTA SDKs',
                                href: 'https://docs.iota.org/developer/references/#iota-software-development-kits',
                                isExternal: true,
                            },
                            {
                                title: 'IOTA CLI',
                                href: 'https://docs.iota.org/developer/references/#iota-cli',
                                isExternal: true,
                            },
                            {
                                title: 'IOTA Custom Indexer',
                                href: 'https://docs.iota.org/developer/advanced/custom-indexer',
                                isExternal: true,
                            },
                            {
                                title: 'IOTA VSCode Ext',
                                href: 'https://marketplace.visualstudio.com/items?itemName=iotaledger.iota-move',
                                isExternal: true,
                            },
                        ],
                    },
                    {
                        title: 'Trust Framework',
                        icon: <ProtocolAgnosticDesign />,
                        children: [
                            {
                                title: 'IOTA Identity',
                                href: '/products/identity',
                            },
                            {
                                title: 'IOTA Tokenization',
                                href: '/products/tokenization',
                            },
                            {
                                title: 'IOTA Notarization',
                                href: '/products/notarization',
                            },
                            {
                                title: 'IOTA Hierarchies',
                                href: '/products/hierarchies',
                            },
                            {
                                title: 'IOTA Gas Station',
                                href: '/products/gas-station',
                            },
                        ],
                    },
                    {
                        title: 'SERVICES & DAPPS',
                        icon: <DeveloperFriendly />,
                        children: [
                            {
                                title: 'IOTA L1 Explorer',
                                href: 'https://explorer.iota.org/',
                                isExternal: true,
                            },
                            {
                                title: 'IOTA Dashboard dApp',
                                href: 'https://www.iota.org/products/wallet#iota-wallet-dashboard',
                                isExternal: true,
                            },
                            {
                                title: 'IOTA Browser Wallet',
                                href: 'https://www.iota.org/products/wallet#iota-wallet',
                                isExternal: true,
                            },
                            {
                                title: 'IOTA EVM Bridge',
                                href: 'https://evm-bridge.iota.org/',
                                isExternal: true,
                            },
                        ],
                    },
                    {
                        title: 'DEMOS',
                        icon: <DeveloperFriendly />,
                        children: [
                            {
                                title: 'Digital Product Passport',
                                href: 'https://dpp.demo.iota.org/',
                                isExternal: true,
                            },
                        ],
                    },
                ],
            },
            {
                sections: [
                    {
                        overline: 'Network Layer 2',
                        title: 'IOTA EVM',
                        cta: {
                            text: 'Explore IOTA EVM',
                            href: '/products/evm',
                        },
                    },
                    {
                        title: 'BUILD TOOLS',
                        icon: <IotaChains />,
                        children: [
                            {
                                title: 'IOTA ISC SDK',
                                href: 'https://docs.iota.org/developer/iota-evm/getting-started/compatibility',
                                isExternal: true,
                            },
                        ],
                    },
                    {
                        title: 'Frameworks',
                        icon: <ProtocolAgnosticDesign />,
                        children: [
                            {
                                title: 'IOTA Solo Testing Framework ',
                                href: 'https://docs.iota.org/developer/iota-evm/solo/getting-started',
                                isExternal: true,
                            },
                        ],
                    },
                    {
                        title: 'SERVICES & DAPPS',
                        icon: <DeveloperFriendly />,
                        children: [
                            {
                                title: 'IOTA L2 Explorer',
                                href: 'https://explorer.evm.iota.org/',
                                isExternal: true,
                            },
                            {
                                title: 'IOTA EVM Bridge',
                                href: 'https://evm-bridge.iota.org/',
                                isExternal: true,
                            },
                        ],
                    },
                ],
            },
            {
                isFooter: true,
                desktopSections: IOTA_ECOSYSTEM_ROW,
                mobileSections: [IOTA_ECOSYSTEM_SECTION],
            },
        ],
    },
    {
        title: 'Build',
        path: '/build',
        menuRows: [
            {
                sections: [
                    {
                        title: 'START BUILDING',
                        icon: <IotaClientCli />,
                        children: [
                            {
                                title: 'Developer Documentation',
                                href: 'https://docs.iota.org/',
                                isExternal: true,
                            },
                        ],
                    },
                    {
                        title: 'Grants',
                        icon: <PilotProjects />,
                        children: [
                            {
                                title: 'Project Funding',
                                href: '/build/grants',
                            },
                            {
                                title: 'IOTA Business Innovation Program',
                                href: '/build/business-innovation-program',
                            },
                        ],
                    },
                    {
                        title: 'LEARNING RESOURCES',
                        icon: <TokenizationOfElectronicDocuments />,
                        children: [
                            {
                                title: 'Tutorials',
                                href: 'https://docs.iota.org/developer/tutorials/sponsored-transactions/sponsored-txs',
                                isExternal: true,
                            },
                        ],
                    },
                    { ...IOTA_ECOSYSTEM_SECTION },
                ],
            },
        ],
    },
    {
        title: 'Connect',
        path: '/connect',
        menuRows: [
            {
                sections: [
                    {
                        title: 'COMMUNITY',
                        icon: <Daos />,
                        children: [
                            {
                                title: 'Our Community',
                                href: '/connect/our-community',
                            },
                            {
                                title: 'Build Together',
                                href: '/connect/building-together',
                            },
                        ],
                    },
                    {
                        title: 'LATEST',
                        icon: <BlogPost />,
                        children: [
                            {
                                title: 'Blog',
                                href: 'https://blog.iota.org/',
                                isExternal: true,
                            },
                            {
                                title: 'Events',
                                href: '/connect/events',
                            },
                        ],
                    },
                    { ...IOTA_ECOSYSTEM_SECTION },
                ],
            },
        ],
    },
];
