import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_NOTARIZATION_CONTENT = {
    title: 'IOTA Notarization',
    subtitle:
        'Anchor, update, and verify data on-chain using flexible methods that fit your use case',
    inverted: true,
};

export const HERO_NOTARIZATION_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/notarization_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/notarization_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/notarization_hero_mobile.mp4',
    },
};

export const HERO_NOTARIZATION_ANCHORLINKS = [
    {
        text: 'How it Works',
        onClick: () => scrollToSection('#how-it-works'),
    },
    {
        text: 'Tech and Tooling',
        onClick: () => scrollToSection('#tech-and-tooling'),
    },
];

export const HERO_NOTARIZATION_BUTTONS = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/developer/iota-notarization/',
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
