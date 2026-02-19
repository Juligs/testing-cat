import { HeroBackground, TitleTextSize } from 'react-ui-kit';

export const HERO_SUSTAINABILITY_CONTENT = {
    title: 'Sustainability',
    subtitle: 'Explore the environmental footprint of the IOTA network',
    size: TitleTextSize.Medium,
};
export const HERO_SUSTAINABILITY_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: 'https://files.iota.org/media/iota-foundation/sustainability_hero.mp4',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/sustainability_hero_poster.jpg',
    },
};
