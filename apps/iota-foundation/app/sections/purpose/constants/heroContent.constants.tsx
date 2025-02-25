import { scrollToSection } from '@repo/shared/utils';

export const HERO_HOMEPAGE_CONTENT = {
    title: 'Driven by Purpose',
    subtitle: 'Streamlining innovation with distributed ledger technology',
};

export const HERO_HOMEPAGE_ANCHORLINKS = [
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
