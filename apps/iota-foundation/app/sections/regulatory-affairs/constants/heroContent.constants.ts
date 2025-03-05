import { HeroBackground } from 'react-ui-kit';

export const HERO_REGULATORY_AFFAIRS_CONTENT = {
    title: 'Regulatory Affairs',
    subtitle: 'Fostering dialogue between policymakers and industry',
};

export const HERO_REGULATORY_AFFAIRS_BG: React.ComponentProps<typeof HeroBackground> = {
    type: 'video',
    source: 'https://files.iota.org/media/iota-foundation/regulatory_affairs_hero.webm',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/regulatory_affairs_hero_poster.jpg',
    },
};
