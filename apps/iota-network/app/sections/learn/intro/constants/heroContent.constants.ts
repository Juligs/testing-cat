import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_HOMEPAGE_CONTENT = {
    title: 'We Build Cutting-Edge Technology',
    subtitle: 'Our customers are building the future',
    inverted: true,
};

export const HERO_HOMEPAGE_BG_VIDEO: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/learn_intro_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/learn_intro.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/learn_intro_poster.jpg',
    },
};
