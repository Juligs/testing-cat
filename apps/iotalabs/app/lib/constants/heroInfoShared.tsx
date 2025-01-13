import { ArrowTopRight } from '@repo/icons';
import { scrollToSection } from '@repo/shared';
import { ButtonVariant, HeroBackground } from 'react-ui-kit';

export const HERO_HOMEPAGE_INFO = {
    title: 'Accelerate Growth',
    subtitle: 'Shaping value-driven IOTA ecosystems where innovation thrives',
    inverted: true,
};

export const HERO_HOMEPAGE_BG: React.ComponentProps<typeof HeroBackground> = {
    type: 'video',
    source: 'https://files.iota.org/media/iotalabs/iotalabs_hero.mp4',
    videoProps: {
        poster: 'https://files.iota.org/media/iotalabs/iotalabs_hero_poster.jpg',
    },
};

export const HERO_GRANTS_INFO = {
    title: 'IOTA Grants',
    subtitle: 'Apply for a grant from iotalabs and turn your wildest dApp dreams into reality',
    inverted: true,
};

export const HERO_GRANTS_BUTTON = [
    {
        text: 'Apply for a grant',
        link: 'https://airtable.com/appQqzg74YoTqK3Ht/pagSAWuqfqh3qIDg1/form',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        inverted: true,
    },
];

export const HERO_GRANTS_ANCHORLINKS = [
    {
        text: 'Supported Initiatives',
        onClick: () => scrollToSection('#section-3'),
    },
    {
        text: 'Application Process',
        onClick: () => scrollToSection('#section-4'),
    },
    {
        text: 'Funding Guidelines',
        onClick: () => scrollToSection('#section-5-inverted'),
    },
];

export const HERO_GRANTS_BG: React.ComponentProps<typeof HeroBackground> = {
    src: '/grants/hero-bg.svg',
    type: 'image',
};

export const HERO_PROJECTS_INFO = {
    title: 'Building New Digital Economies, Together',
    inverted: true,
};

export const HERO_PROJECTS_BUTTON = [
    {
        text: 'Register your Project',
        link: 'https://airtable.com/appQqzg74YoTqK3Ht/pagAntotjuYq5XNlT/form',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        inverted: true,
    },
];

export const HERO_PROJECTS_BG: React.ComponentProps<typeof HeroBackground> = {
    src: '/projects/hero.svg',
    type: 'image',
};
