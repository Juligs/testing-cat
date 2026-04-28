import { HeroBackground, TitleTextSize } from 'react-ui-kit';

export const HERO_HOMEPAGE_CONTENT = {
    title: 'Beyond The Chain',
    subtitle: 'International Workshop on Next-Generation Distributed Ledger Technologies',
    size: TitleTextSize.Medium,
};

export const HERO_HOMEPAGE_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: 'https://files.iota.org/media/iota-network/beyond_overview_hero.mp4',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/beyond_overview_hero_poster.jpg',
    },
};
