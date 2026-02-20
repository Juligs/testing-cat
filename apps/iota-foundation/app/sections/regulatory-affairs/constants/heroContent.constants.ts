import { scrollToSection } from '@repo/shared/utils';
import { HeroBackground } from 'react-ui-kit';

export const HERO_REGULATORY_AFFAIRS_CONTENT = {
    title: 'Regulatory',
    subtitle: 'Fostering dialogue between policymakers and industry',
};

export const HERO_REGULATORY_AFFAIRS_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: 'https://files.iota.org/media/iota-foundation/regulatory_affairs_hero.mp4',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/regulatory_affairs_hero_poster.jpg',
    },
};
export const HERO_REGULATORY_AFFAIRS_ANCHORLINKS = [
    {
        text: 'Regulatory Compliance',
        onClick: () => scrollToSection('#regulatory-compliance'),
    },
    {
        text: 'Sustainability',
        onClick: () => scrollToSection('#sustainability'),
    },
    {
        text: 'Consultation',
        onClick: () => scrollToSection('#consultation'),
    },
];
