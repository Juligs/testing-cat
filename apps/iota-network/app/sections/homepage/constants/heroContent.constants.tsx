import { ArrowTopRight } from '@repo/icons';
import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground } from 'react-ui-kit';

export const HERO_HOMEPAGE_CONTENT = {
    title: 'We Bring the Real World to Web3',
    subtitle: 'IOTA is public blockchain infrastructure to integrate Web3 with the real world',
    inverted: true,
};

export const HERO_HOMEPAGE_BUTTON = [
    {
        text: 'Get Started',
        link: 'https://docs.iota.org/developer/getting-started',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        inverted: true,
    },
    {
        text: 'What is IOTA',
        link: '/learn',
        variant: ButtonVariant.Secondary,
        icon: <ArrowTopRight />,
        inverted: true,
    },
];

export const HERO_HOMEPAGE_ANCHORLINKS = [
    {
        text: 'Product Suite',
        onClick: () => scrollToSection('#section-3'),
    },
    {
        text: 'Why Build on IOTA?',
        onClick: () => scrollToSection('#section-8'),
    },
    {
        text: 'Real World Adoption',
        onClick: () => scrollToSection('#real-world-adoption'),
    },
];

export const HERO_HOMEPAGE_BG: React.ComponentProps<typeof HeroBackground> = {
    src: 'https://files.iota.org/media/iota-network/homepage_hero_poster.jpg',
    type: 'image',
};
