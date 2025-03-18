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
        text: 'Our Focus',
        onClick: () => scrollToSection('#our-focus-areas'),
    },
    {
        text: 'DLT Innovation',
        onClick: () => scrollToSection('#dlt'),
    },
];

export const HERO_HOMEPAGE_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: 'https://files.iota.org/media/iota-foundation/homepage_hero.mp4',
    videoProps: {
        poster: 'https://files.iota.org/media/iota-foundation/homepage_hero_poster.jpg',
    },
};
