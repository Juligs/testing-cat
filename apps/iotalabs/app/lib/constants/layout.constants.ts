import { Discord, Twitter } from '@components';
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
        title: 'Twitter',
        icon: Twitter,
        url: 'https://x.com/iotalabs_',
    },
    {
        title: 'Discord',
        icon: Discord,
        url: 'https://discord.iota.org',
    },
];

export const CONTACT_EMAIL = 'contact@iota.labs';
