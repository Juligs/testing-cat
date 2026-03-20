import { HeroBackground, ScreenSize, TitleTextSize, VerticalTitle } from 'react-ui-kit';

export const HERO_BUSINESS_CONTENT: React.ComponentProps<typeof VerticalTitle> = {
    title: 'IOTA Business Innovation Program',
    subtitle: 'Outcomes, deployments, and product learnings from the first cohort',
    body: 'The program is now concluded. The seven funded projects are active in the field and continue to drive adoption on IOTA.',
    inverted: true,
    size: TitleTextSize.Medium,
};

export const HERO_BUSINESS_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/business_innovation_program_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/business_innovation_program_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/business_innovation_program_hero_poster.jpg',
    },
};
