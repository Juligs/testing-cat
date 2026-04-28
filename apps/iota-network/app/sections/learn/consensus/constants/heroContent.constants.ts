import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_CONSENSUS_CONTENT = {
    title: 'Real-World \n Consensus \n',
    subtitle: "Starfish. Because global infrastructure \n can't fail when it matters most.\n",
    inverted: true,
    isCentered: true,
};

export const HERO_CONSENSUS_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/consensus_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/consensus_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/consensus_hero_poster.jpg',
    },
};
