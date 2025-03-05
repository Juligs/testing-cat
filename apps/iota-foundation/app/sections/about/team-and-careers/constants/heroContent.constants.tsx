import { HeroBackground } from 'react-ui-kit';

export const TEAM_AND_CAREERS_CONTENT = {
    title: 'Team & Careers',
    subtitle: 'A multifaceted team of experts help propel IOTA forward - join us!',
};

export const HERO_TEAM_AND_CAREERS_BG: React.ComponentProps<typeof HeroBackground> = {
    type: 'video',
    source: 'https://files.iota.org/media/iota-foundation/team_careers_hero.webm',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/team_careers_hero_poster.jpg',
    },
};
