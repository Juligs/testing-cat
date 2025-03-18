import { HeroBackground } from 'react-ui-kit';

export const HERO_IOTA_FOUNDATION_CONTENT = {
    title: 'About the IOTA Foundation',
    subtitle: 'From one to many',
};
export const BG_IOTA_FOUNDATION: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: 'https://files.iota.org/media/iota-foundation/about_foundation_hero.mp4',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/about_foundation_hero_poster.jpg',
    },
};
