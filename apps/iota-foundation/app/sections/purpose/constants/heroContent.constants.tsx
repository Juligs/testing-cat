import { scrollToSection } from '@repo/shared/utils';
import { HeroBackground } from 'react-ui-kit';

export const HERO_PURPOSE_CONTENT = {
    title: 'Driven by Purpose',
    subtitle: 'Streamlining innovation with distributed ledger technology',
};

export const HERO_PURPOSE_ANCHORLINKS = [
    {
        text: "Where we're headed",
        onClick: () => scrollToSection('#where-we-are-headed'),
    },
    {
        text: 'How we get there',
        onClick: () => scrollToSection('#how-we-get-there'),
    },
    {
        text: 'What guides us',
        onClick: () => scrollToSection('#what-guides-us'),
    },
];

export const HERO_PURPOSE_BG: React.ComponentProps<typeof HeroBackground> = {
    type: 'video',
    source: 'https://files.iota.org/media/iota-foundation/purpose_hero.webm',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/purpose_hero_poster.jpg',
    },
};
