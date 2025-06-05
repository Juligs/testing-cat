import { HeroBackground, ScreenSize, TitleTextSize } from 'react-ui-kit';

export const HERO_BUILDING_TOGETHER_CONTENT = {
    title: 'Building Together',
    subtitle:
        'The IOTA community is a group of like-minded individuals from all walks of life, united by their shared  enthusiasm for a better and self-determined future',
    inverted: true,
    size: TitleTextSize.Large,
};

export const HERO_BUILDING_TOGETHER_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/build_together_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/build_together_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/build_together_hero_poster.jpg',
    },
};
