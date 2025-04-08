import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_TOKENOMICS_CONTENT = {
    title: 'IOTA Tokenomics',
    subtitle:
        "With IOTA's sustainable tokenomics, you can build and develop solutions that thrive in a long-term, fair economy",
    inverted: true,
};

export const HERO_TOKENOMICS_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/tokenomics_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/tokenomics_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/tokenomics_hero_poster.jpg',
    },
};
