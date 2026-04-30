import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_WORKSHOP_CONTENT = {
    title: 'IOTA Workshop Series',
    subtitle: 'Your Path Into the IOTA Ecosystem',
    inverted: true,
};

export const HERO_WORKSHOP_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/move_on_up_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/move_on_up_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/move_on_up_hero_poster.jpg',
    },
};

export const HERO_WORKSHOP_BUTTONS = [
    {
        text: 'Get Started',
        link: 'https://docs.iota.org/developer/workshops/',
        variant: ButtonVariant.Primary,
        icon: true,
        isExternal: true,
    },
];
