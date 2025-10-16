import { Route } from '@repo/shared/interfaces';
import { BlogPost, Daos, DataInsights, GoogleScholar, LinkedIn } from '@repo/icons';

export const FEATURED_CARDS: Route[] = [
    {
        title: 'IOTA',
        image: '/navbar_iota.png',
        path: 'https://www.iota.org/',
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
        title: 'Purpose',
        path: '/purpose',
        children: [
            {
                title: "Where we're headed",
                path: '/purpose/#where-we-are-headed',
            },
            {
                title: 'How we get there',
                path: '/purpose/#how-we-get-there',
            },
            {
                title: 'What guides us',
                path: '/purpose/#what-guides-us',
            },
        ],
    },
    {
        title: 'Regulatory',
        path: '/regulatory-affairs',
        children: [
            {
                title: 'Regulatory Affairs',
                path: '/regulatory-affairs',
            },
            {
                title: 'Memberships & Working Groups',
                path: '/regulatory-affairs/#memberships',
            },
            {
                title: 'Latest Regulatory Advocacy',
                path: '/regulatory-affairs/#latest',
            },
        ],
    },
    {
        title: 'Research',
        path: '/research',
        isExternal: true,
        children: [
            {
                title: 'Our Research',
                path: '/research/our-research',
            },
            {
                title: 'Research Collaborations',
                path: '/research/research-collaborations',
            },
            {
                title: 'Research Papers',
                path: '/research/research-papers',
            },
        ],
        navbarSections: [
            {
                title: 'Research',
                icon: <DataInsights />,
                children: [
                    {
                        title: 'Our Research',
                        description: 'At the forefront of DLT innovation',
                        path: '/research/our-research',
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'Research Collaborations',
                        description: 'Turning ideas into solutions',
                        path: '/research/research-collaborations',
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'Research Papers',
                        description: 'The science behind IOTA',
                        path: '/research/research-papers',
                    },
                ],
            },
            {
                children: FEATURED_CARDS,
            },
        ],
    },
    {
        title: 'News',
        path: '/news',
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
                title: 'News',
                icon: <BlogPost />,
                children: [
                    {
                        title: 'Blog',
                        description: 'Get the latest IOTA updates',
                        path: 'https://blog.iota.org/',
                        isExternal: true,
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'Brand Library',
                        description: 'Assets for events and publications',
                        path: '/news/brand-library',
                    },
                ],
            },

            {
                children: FEATURED_CARDS,
            },
        ],
    },
    {
        title: 'About',
        path: '/about',
        children: [
            {
                title: 'Team & Careers',
                path: '/about/team-and-careers',
            },
            {
                title: 'About the Foundation',
                path: '/about/iota-foundation',
            },
            {
                title: 'Partners',
                path: '/about/our-partners',
            },
        ],
        navbarSections: [
            {
                title: 'About',
                icon: <Daos />,
                children: [
                    {
                        title: 'Team & Careers',
                        description: 'The experts that propel IOTA',
                        path: '/about/team-and-careers',
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'About the Foundation',
                        description: 'From one to many',
                        path: '/about/iota-foundation',
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'Partners',
                        description: 'Our partners and investors ',
                        path: '/about/our-partners',
                    },
                ],
            },
            {
                children: FEATURED_CARDS,
            },
        ],
    },
];
export const SOCIAL_LINKS = [
    {
        icon: GoogleScholar,
        url: 'https://scholar.google.com/citations?hl=en&user=_ZIH81gAAAAJ&view_op=list_works&sortby=pubdate',
        isExternal: true,
        ariaLabel: 'Google Scholar',
    },
    {
        icon: LinkedIn,
        url: 'https://www.linkedin.com/company/iotafoundation/?originalSubdomain=de',
        isExternal: true,
        ariaLabel: 'LinkedIn',
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
