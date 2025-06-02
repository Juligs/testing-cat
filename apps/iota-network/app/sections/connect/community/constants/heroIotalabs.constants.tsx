import { ArrowTopRight } from '@repo/icons';
import { ButtonVariant, HeroBackground } from 'react-ui-kit';

export const HERO_IOTALABS_CONTENT = {
    title: 'iotalabs',
    subtitle: "Levereging decentralized finance to drive adoption of IOTA's tech and token",
    body: 'iotalabs drives ecosystem growth through partnerships, tech integration, grants, and strategic investments. It supports builders and token holders by promoting DeFi applications and ROI opportunities, bridging Web2 and Web3, and advancing the convergence of both.',
    inverted: true,
};

export const HERO_IOTALABS_BG: React.ComponentProps<typeof HeroBackground> = {
    src: '/connect/community/hero_iotalabs.png',
    mediaType: 'image',
};

export const HERO_IOTALABS_BUTTONS = [
    {
        text: 'iotalabs.io',
        link: 'https://iotalabs.io',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        isExternal: true,
    },
    {
        text: 'Blog',
        link: 'https://blog.iotalabs.io',
        variant: ButtonVariant.Secondary,
        inverted: true,
        icon: <ArrowTopRight />,
        isExternal: false,
    },
];
