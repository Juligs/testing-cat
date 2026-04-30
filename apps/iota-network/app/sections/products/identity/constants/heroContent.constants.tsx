import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_IDENTITY_CONTENT = {
    title: 'IOTA Identity',
    subtitle: 'Empowering secure, private, and decentralized digital interactions',
    inverted: true,
};

export const HERO_IDENTITY_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/identity_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/identity_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/identity_hero_poster.jpg',
    },
};

export const HERO_IDENTITY_ANCHORLINKS = [
    {
        text: 'How it Works',
        onClick: () => scrollToSection('#how-it-works'),
    },
    {
        text: 'Key Capabilities',
        onClick: () => scrollToSection('#key-capabilities'),
    },
    {
        text: 'Why IOTA',
        onClick: () => scrollToSection('#why-iota'),
    },
];

export const HERO_IDENTITY_BUTTONS = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/iota-identity',
        variant: ButtonVariant.Primary,
        icon: true,
        isExternal: true,
    },
    {
        text: 'Contact us',
        link: 'mailto:partnerships@iota.org',
        variant: ButtonVariant.Secondary,
        inverted: true,
        isExternal: false,
    },
];
