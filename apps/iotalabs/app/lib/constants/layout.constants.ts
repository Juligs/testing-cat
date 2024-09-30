import { Discord, Github, GoogleScholar, Linkedin, Twitter, Youtube } from '@components';
import { PageMetadata, Route } from '@lib/interfaces';

export const ROUTES: (Route & { metadata?: PageMetadata })[] = [
    {
        title: 'Homepage',
        path: '/',
        metadata: {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        hideFromNavbar: true,
    },
    {
        title: 'IOTA Grants',
        path: '/grants',
        metadata: {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    },
    {
        title: 'Blog',
        path: '',
        isExternal: true,
    },
];

export const LEGAL_ROUTES: (Route & { metadata?: PageMetadata })[] = [
    {
        title: 'Privacy Policy',
        path: '/privacy-policy',
        metadata: {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    },
    {
        title: 'Cookie Policy',
        path: '/cookie-policy',
        metadata: {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    },
    {
        title: 'Terms of Use',
        path: '/terms-of-use',
        isExternal: true,
    },
];

export const SOCIAL_LINKS = [
    {
        title: 'Github',
        icon: Github,
        url: '',
    },
    {
        title: 'Google Scholar',
        icon: GoogleScholar,
        url: '',
    },
    {
        title: 'Youtube',
        icon: Youtube,
        url: '',
    },
    {
        title: 'Twitter',
        icon: Twitter,
        url: '',
    },
    {
        title: 'LinkedIn',
        icon: Linkedin,
        url: '',
    },
    {
        title: 'Discord',
        icon: Discord,
        url: '',
    },
];

export const CONTACT_EMAIL = 'contact@iota.labs';
