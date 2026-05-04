import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_TRUST_FRAMEWORK_CONTENT = {
    title: 'IOTA Trust Framework',
    subtitle: 'An open-source product suite that make digital trust easy to implement and scale',
    inverted: true,
};

export const HERO_TRUST_FRAMEWORK_BUTTON = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/developer/iota-trust-framework',
        variant: ButtonVariant.Primary,
        icon: true,
        inverted: true,
        isExternal: true,
    },
    {
        text: 'Contact us',
        link: 'mailto:partnerships@iota.org',
        variant: ButtonVariant.Secondary,
        icon: true,
        inverted: true,
    },
];

export const HERO_TRUST_FRAMEWORK_ANCHORLINKS = [
    {
        text: 'What is it',
        onClick: () => scrollToSection('#what-is-it'),
    },
    {
        text: 'Key Capabilities',
        onClick: () => scrollToSection('#key-capabilities'),
    },
    {
        text: 'How it works',
        onClick: () => scrollToSection('#how-it-works'),
    },
];

export const HERO_TRUST_FRAMEWORK_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: '/learn/trust-framework/Mobile_IOTA Trust Framework.mp4',
        },
        [ScreenSize.Md]: {
            src: '/learn/trust-framework/Desktop_IOTA Trust Framework.mp4',
        },
    },
    videoProps: {
        poster: '/learn/trust-framework/poster_hero.png',
    },
    className: 'brightness-75',
};
