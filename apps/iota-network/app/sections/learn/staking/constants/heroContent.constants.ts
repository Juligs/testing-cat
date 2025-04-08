import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_STAKING_CONTENT = {
    title: 'Staking on IOTA',
    subtitle: 'Securing and Decentralizing the Network while Earn Rewards',
    inverted: true,
};

export const HERO_STAKING_BG: React.ComponentProps<typeof HeroBackground> = {
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
