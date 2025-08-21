import { HeroBackground, TitleTextSize } from 'react-ui-kit';

export const HERO_RESEARCH_PAPERS_CONTENT = {
    title: 'Research Papers',
    subtitle: 'Exploring the science behind the Technology',
    size: TitleTextSize.Medium,
};
export const HERO_RESEARCH_PAPERS_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: '/research/research-papers/hero.mp4',
    videoProps: {
        poster: '/research/research-papers/hero_poster.png',
    },
};
