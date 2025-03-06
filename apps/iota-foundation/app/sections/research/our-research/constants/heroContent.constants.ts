import { HeroBackground, TitleTextSize } from 'react-ui-kit';

export const HERO_OUR_RESEARCH_CONTENT = {
    title: 'Our Research',
    subtitle: 'At the forefront of DLT innovation',
    size: TitleTextSize.Large,
};

export const HERO_OUR_RESEARCH_BG: React.ComponentProps<typeof HeroBackground> = {
    type: 'video',
    source: 'https://files.iota.org/media/iota-foundation/research_hero.webm',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/research_hero_poster.jpg',
    },
};
