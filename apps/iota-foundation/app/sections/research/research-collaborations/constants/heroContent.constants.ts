import { HeroBackground, TitleTextSize } from 'react-ui-kit';

export const HERO_RESEARCH_COLLABORATION_CONTENT = {
    title: 'Research Collaborations',
    subtitle: 'Transforming ideas into solutions through academic partnerships',
    size: TitleTextSize.Medium,
};
export const HERO_RESEARCH_COLLABORATION_BG: React.ComponentProps<typeof HeroBackground> = {
    type: 'video',
    source: 'https://files.iota.org/media/iota-foundation/research_collaborations_hero.mp4',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/research_collaborations_hero_poster.jpg',
    },
};
