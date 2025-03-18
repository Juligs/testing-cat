import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const SHOWCASES_HOMEPAGE_CONTENT = {
    title: 'IOTA Technology Showcases ',
    subtitle:
        'IOTA collaborates with numerous companies and institutions to create real-world applications leveraging Distributed Ledger Technology',
    inverted: true,
    isCentered: false,
};

export const SHOWCASES_HOMEPAGE_BG_VIDEO: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/technology_showcases_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/technology_showcases.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/technology_showcases_poster.jpg',
    },
};
