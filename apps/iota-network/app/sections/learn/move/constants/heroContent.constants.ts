import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_MOVE_CONTENT = {
    title: 'Move on Up',
    subtitle:
        "IOTA takes Move to the next level, redefining what's possible with this innovative language",
    inverted: true,
};

export const HERO_MOVE_BG: React.ComponentProps<typeof HeroBackground> = {
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
