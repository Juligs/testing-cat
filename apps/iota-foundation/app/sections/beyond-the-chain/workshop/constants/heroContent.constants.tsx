import { HeroBackground } from 'react-ui-kit';

export const HERO_WORKSHOP_CONTENT = {
    title: 'Workshop Highlights',
    subtitle: 'Explore recaps and papers from our previous Beyond the Chain workshops',
};

export const HERO_WORKSHOP_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: 'https://files.iota.org/media/iota-network/workshop_highlights_hero.mp4',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/workshop_highlights_hero_poster.jpg',
    },
};
