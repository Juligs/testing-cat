import { scrollToSection } from '@repo/shared/utils';
import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const GET_STARTED_CONTENT = {
    title: 'Build.\n Connect.\n Grow.',
    subtitle: 'Powered by IOTA',
    inverted: true,
};

export const GET_STARTED_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/core_domains_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/core_domains.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/core_domains_poster.jpg',
    },
};

export const GET_STARTED_ANCHORLINKS = [
    {
        text: 'Start using IOTA',
        onClick: () => scrollToSection('#get-started-using-iota'),
    },
    {
        text: 'Start building on IOTA',
        onClick: () => scrollToSection('#tooling-get-started'),
    },
    {
        text: 'Explore solutions built with IOTA',
        onClick: () => scrollToSection('#staking-get-started'),
    },
];
