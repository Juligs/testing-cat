import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_PRODUCT_SUITE_CONTENT = {
    title: 'Product Suite',
    subtitle: 'The IOTA Technology Stack builds the foundations of a new digital economy',
    inverted: true,
};

export const HERO_PRODUCT_SUITE_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/staking_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/staking_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/staking_hero_poster.jpg',
    },
};
