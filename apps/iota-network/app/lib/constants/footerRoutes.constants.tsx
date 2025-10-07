import { FooterRoute } from '../../components/layout/layout.interfaces';
export const FOOTER_ROUTES: FooterRoute[] = [
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
                title: 'Trust Framework',
                path: '/learn/trust-framework',
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
            },
            {
                title: 'Focus Areas',
                path: '/learn/focus-areas',
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
                title: 'Wallet',
                path: '/products/wallet',
            },
            {
                title: 'Tools',
                path: '/products/tooling',
            },
            {
                title: 'Notarization',
                path: '/products/notarization',
            },
        ],
    },

    {
        title: 'Connect',
        path: '/connect',
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
    },
];

export const LEGAL_ROUTES: FooterRoute[] = [
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
