import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_MAINNET_CONTENT = {
    title: 'IOTA Mainnet',
    subtitle:
        'Our fast and powerful Layer 1 network is a highly efficient, parallelized data structure',
    inverted: true,
};

export const HERO_MAINNET_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/mainnet_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/mainnet_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/mainnet_hero_poster.jpg',
    },
};

export const HERO_MAINNET_BUTTON = [
    {
        text: 'View docs',
        link: 'https://docs.iota.org/developer/',
        variant: ButtonVariant.Primary,
        icon: true,
        isExternal: true,
    },
];
