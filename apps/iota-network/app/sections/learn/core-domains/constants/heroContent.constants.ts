import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_CORE_HOMEPAGE_CONTENT = {
    title: 'Core Domains',
    subtitle: 'Explore our diverse focus areas leveraging DLT to address real business needs',
    inverted: true,
};

export const HERO_CORE_HOMEPAGE_BG_VIDEO: React.ComponentProps<typeof HeroBackground> = {
    type: 'video',
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
