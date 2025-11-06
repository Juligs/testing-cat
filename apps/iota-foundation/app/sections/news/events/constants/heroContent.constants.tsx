import { HeroBackground, TitleTextSize } from 'react-ui-kit';

export const HERO_EVENTS_CONTENT = {
    title: 'Events',
    subtitle:
        'Connect, exchange ideas, and explore opportunities with fellow innovators in the IOTA community and beyond.',
    size: TitleTextSize.Large,
};
export const HERO_EVENTS_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: '/news/events/hero.mp4',
    videoProps: {
        poster: '/news/events/hero_poster.png',
    },
};
