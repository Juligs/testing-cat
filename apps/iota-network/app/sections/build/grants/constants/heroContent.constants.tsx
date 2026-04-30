import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_GRANTS_CONTENT = {
    title: 'IOTA Grants',
    subtitle: 'Apply for a grant from iotalabs and turn your wildest dApp dreams into reality',
    inverted: true,
};

export const HERO_GRANTS_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/grants_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/grants_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/grants_hero_poster.jpg',
    },
};

export const HERO_GRANTS_BUTTONS = [
    {
        text: 'Learn more',
        link: 'https://iotalabs.io/grants',
        variant: ButtonVariant.Primary,
        icon: true,
        isExternal: true,
    },
];
