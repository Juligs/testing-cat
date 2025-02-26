import { Route } from '@repo/shared/interfaces';
import { Placeholder } from '@repo/icons';

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
                path: '/about/about-the-foundation',
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
                        path: '/about/about-the-foundation',
                    },
                ],
            },
            {
                children: FEATURED_CARDS,
            },
        ],
    },
];
