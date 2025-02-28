import { Route } from '@repo/shared/interfaces';
import { GoogleScholar, LinkedIn, Placeholder, XSocialIcon } from '@repo/icons';

export const FEATURED_CARDS: Route[] = [
    {
        title: 'IOTA Network',
        image: '/navbar_network.png',
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
        title: 'Our Work',
        path: '/our-work',
        children: [
            {
                title: 'Regulatory Affairs',
                path: '/our-work/regulatory-affairs',
            },
            {
                title: 'Focus Areas',
                path: '/our-work/focus-areas',
            },
            {
                title: 'Lighthouse Projects',
                path: '/our-work/showcases',
            },
        ],
        navbarSections: [
            {
                title: 'Our work',
                icon: <Placeholder />,
                children: [
                    {
                        title: 'Regulatory Affairs',
                        description: 'Bridging between Policymakers and Industry',
                        path: '/our-work/regulatory-affairs',
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'Focus Areas',
                        description: 'Focus Areas for Real-World use cases',
                        path: '/our-work/focus-areas',
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'Lighthouse Projects',
                        description: 'Real-World Applications of Our Technology',
                        path: '/our-work/showcases',
                    },
                ],
            },
            {
                children: FEATURED_CARDS,
            },
        ],
    },
    {
        title: 'Research',
        path: ' /research',
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
        ],
        navbarSections: [
            {
                title: 'Research',
                icon: <Placeholder />,
                children: [
                    {
                        title: 'Our Research',
                        description: 'At the Forefront of DLT Innovation',
                        path: '/research/our-research',
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'Research Collaborations',
                        description: 'Turning Ideas into Solutions',
                        path: '/research/research-collaborations',
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
        path: ' https://blog.iota.foundation',
        isExternal: true,
        children: [
            {
                title: 'Blog',
                path: 'https://blog.iota.foundation',
                isExternal: true,
            },
        ],
        navbarSections: [
            {
                title: 'News',
                icon: <Placeholder />,
                children: [
                    {
                        title: 'Blog',
                        description: 'Get the Latest IOTA Updates',
                        path: 'https://blog.iota.foundation',
                        isExternal: true,
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
        path: ' /about',
        children: [
            {
                title: 'Team & Careers',
                path: '/about/team-and-careers',
            },
            {
                title: 'About the Foundation',
                path: '/about/iota-foundation',
            },
        ],
        navbarSections: [
            {
                title: 'About',
                icon: <Placeholder />,
                children: [
                    {
                        title: 'Team & Careers',
                        description: 'A multifaceted team of experts help propel IOTA forward',
                        path: '/about/team-and-careers',
                    },
                ],
            },
            {
                children: [
                    {
                        title: 'About the Foundation',
                        description: 'Assets for Events and Publications',
                        path: '/about/iota-foundation',
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
        arialLabel: 'Google Scholar',
    },
    {
        icon: XSocialIcon,
        url: 'https://x.com/iotafdn',
        isExternal: true,
        arialLabel: 'X',
    },
    {
        icon: LinkedIn,
        url: 'https://www.linkedin.com/company/iotafoundation/?originalSubdomain=de',
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
