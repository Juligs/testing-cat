import { Route } from '@lib/interfaces';
import { Discord, Telegram, XSocialIcon } from '@repo/icons';

export const ROUTES: Route[] = [
    {
        title: 'Homepage',
        path: '/',
        hideFromNavbar: true,
    },
    {
        title: 'Grants',
        path: '/grants',
    },
    {
        title: 'Projects',
        path: '/projects',
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
        title: 'Builder',

        icon: Discord,
        url: 'https://builders-discord.iota.org/',
        isExternal: true,
    },
    {
        title: 'Community',
        icon: Discord,
        url: 'https://discord.iota.org',
        isExternal: true,
    },
    {
        icon: XSocialIcon,
        url: 'https://x.com/iotalabs_',
        isExternal: true,
    },
    {
        icon: Telegram,
        url: 'https://t.me/IOTA_Official_Community',
        isExternal: true,
        hideFromFooter: true,
    },
];

export const CONTACT_EMAIL = 'contact@iotalabs.io';
