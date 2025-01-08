import { Route } from '@lib/interfaces';
import { Discord, Twitter, Telegram } from '@components';

export const ROUTES: Route[] = [
    {
        title: 'Homepage',
        path: '/',
        hideFromNavbar: true,
    },
    {
        title: 'Grants',
        path: '/grants',
        hideFromNavbar: true,
        hideFromFooter: true,
    },
    {
        title: 'Projects',
        path: '/projects',
        hideFromNavbar: true,
        hideFromFooter: true,
    },
    {
        title: 'Blog',
        path: 'https://blog.iotalabs.io/',
        isExternal: true,
    },
];

export const LEGAL_ROUTES: Route[] = [
    {
        title: 'Privacy Policy',
        path: '/privacy-policy',
    },
    {
        title: 'Cookie Policy',
        path: '/cookie-policy',
    },
    {
        title: 'Terms of Use',
        path: '/terms-of-use',
    },
];

export const SOCIAL_LINKS = [
    {
        title: 'Twitter',
        icon: Twitter,
        url: 'https://x.com/iotalabs_',
        isExternal: true,
    },
    {
        title: 'Telegram',
        icon: Telegram,
        url: 'https://t.me/IOTA_Official_Community',
        isExternal: true,
    },
    {
        title: 'Discord',
        icon: Discord,
        url: 'https://discord.iota.org',
        isExternal: true,
    },
];

export const CONTACT_EMAIL = 'contact@iotalabs.io';
