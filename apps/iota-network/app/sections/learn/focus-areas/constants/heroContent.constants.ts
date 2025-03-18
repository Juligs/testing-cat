import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const FOCUS_AREAS_HOMEPAGE_CONTENT = {
    title: 'Focus Areas',
    subtitle: 'Explore our diverse focus areas leveraging DLT to address real business needs',
    inverted: true,
};

export const FOCUS_AREAS_HOMEPAGE_BG_VIDEO: React.ComponentProps<typeof HeroBackground> = {
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
