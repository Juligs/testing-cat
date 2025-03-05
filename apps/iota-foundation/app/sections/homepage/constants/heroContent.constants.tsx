import { ArrowTopRight } from '@repo/icons';
import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground } from 'react-ui-kit';

export const HERO_HOMEPAGE_CONTENT = {
    title: 'IOTA Foundation',
    body: 'The IOTA Foundation is a global non-profit organization dedicated to developing next-generation decentralized technology with real-world impact. We work with a worldwide ecosystem of enterprises, research institutions, governments, startups, and more.',
};

export const HERO_HOMEPAGE_BUTTON = [
    {
        text: 'Purpose',
        link: '/purpose',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
    },
    {
        text: 'Our research',
        link: '/research/our-research',
        variant: ButtonVariant.Secondary,
        icon: <ArrowTopRight />,
    },
];

export const HERO_HOMEPAGE_ANCHORLINKS = [
    {
        text: 'Our Purpose',
        onClick: () => scrollToSection('#our-purpose'),
    },
    {
        text: 'Our Work',
        onClick: () => scrollToSection('#our-focus-areas'),
    },
    {
        text: 'DLT Innovationn',
        onClick: () => scrollToSection('#dlt'),
    },
];

export const HERO_HOMEPAGE_BG: React.ComponentProps<typeof HeroBackground> = {
    type: 'video',
    source: 'https://files.iota.org/media/iota-foundation/homepage_hero.webm',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/homepage_hero_poster.jpg',
    },
};
