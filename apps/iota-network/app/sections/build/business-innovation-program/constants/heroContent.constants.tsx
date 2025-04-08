import { scrollToSection } from '@repo/shared/utils';
import { HeroBackground, ScreenSize, TitleTextSize } from 'react-ui-kit';

export const HERO_BUSINESS_CONTENT = {
    title: 'IOTA Business Innovation Program',
    subtitle: 'Technical and financial support for real-world impact',
    inverted: true,
    size: TitleTextSize.Medium,
};

export const HERO_BUSINESS_ANCHORLINKS = [
    {
        text: 'Our Decision Framework',
        onClick: () => scrollToSection('#our-decision-framework'),
    },
    {
        text: "What We're Looking For",
        onClick: () => scrollToSection('#what-is-supported'),
    },
    {
        text: 'How to Apply',
        onClick: () => scrollToSection('#how-to-apply'),
    },
];

export const HERO_BUSINESS_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/business_innovation_program_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/business_innovation_program_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/business_innovation_program_hero_poster.jpg',
    },
};
