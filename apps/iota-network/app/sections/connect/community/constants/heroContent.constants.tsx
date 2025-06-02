import { scrollToSection } from '@repo/shared/utils';
import { HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_COMMUNITY_CONTENT = {
    title: 'An Open Community of Builders',
    body: 'Together with its partners and community, IOTA builds an open infrastructure for a digital economy, enabling projects to bring the advancements of Web3 to the real world.',
    inverted: true,
};
export const HERO_COMMUNITY_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/community_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/community_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/community_hero_poster.jpg',
    },
};

export const HERO_COMMUNITY_ANCHORLINKS = [
    {
        text: 'Projects on IOTA',
        onClick: () => scrollToSection('#projects-on-iota'),
    },
    {
        text: 'iotalabs',
        onClick: () => scrollToSection('#iotalabs'),
    },
    {
        text: 'IOTA Foundation',
        onClick: () => scrollToSection('#iota-foundation'),
    },
];
