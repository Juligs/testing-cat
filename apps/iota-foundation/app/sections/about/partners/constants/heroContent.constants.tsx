import { HeroBackground } from 'react-ui-kit';

export const HERO_PARTNERS_CONTENT = {
    title: 'Our Partners',
    subtitle:
        'Partnering and collaborating to enhance resource efficiency and build trust – together',
};

export const HERO_PARTNERS_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: '/about/our-partners/hero.mp4',
    videoProps: {
        poster: '/about/our-partners/hero_poster.png',
    },
};
