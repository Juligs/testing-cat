import { ArrowTopRight } from '@repo/icons';
import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_TRUST_HIERARCHIES_CONTENT = {
    title: 'IOTA Hierarchies',
    subtitle: 'Programmable and verifiable trust relationships',
    inverted: true,
};

export const HERO_TRUST_HIERARCHIES_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/trust_hierarchies_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/trust_hierarchies_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/trust_hierarchies_hero_poster.jpg',
    },
};

export const HERO_TRUST_HIERARCHIES_ANCHORLINKS = [
    {
        text: 'How it Works',
        onClick: () => scrollToSection('#how-it-works'),
    },
    {
        text: 'Key Capabilities',
        onClick: () => scrollToSection('#key-capabilities'),
    },
    {
        text: 'Tech and Tooling',
        onClick: () => scrollToSection('#tech-and-tooling'),
    },
];

export const HERO_TRUST_HIERARCHIES_BUTTONS = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/developer/iota-hierarchies/',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        isExternal: true,
    },
    {
        text: 'Contact us',
        link: 'mailto:partnerships@iota.org',
        variant: ButtonVariant.Secondary,
        inverted: true,
        isExternal: false,
    },
];
