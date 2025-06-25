import { HeroBackground, ScreenSize, TitleTextSize } from 'react-ui-kit';

export const HERO_EVENTS_TOGETHER_CONTENT = {
    title: 'Events',
    inverted: true,
    size: TitleTextSize.Large,
};

export const HERO_EVENTS_TOGETHER_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/events_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/events_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/events_hero_poster.jpg',
    },
};
