import { ArrowTopRight } from '@repo/icons';
import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_TOOLING_CONTENT = {
    title: 'IOTA Tooling',
    subtitle:
        'Our comprehensive toolkit helps you get started in integrating IOTA into your project',
    inverted: true,
};

export const HERO_TOOLING_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/tooling_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/tooling_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/tooling_hero_poster.jpg',
    },
};

export const HERO_TOOLING_ANCHORLINKS = [
    {
        text: 'IOTA SDKs',
        onClick: () => scrollToSection('#iota-SDKs'),
    },
    {
        text: 'IOTA CLIs',
        onClick: () => scrollToSection('#iota-CLIs'),
    },
    {
        text: 'IOTA Application Libraries',
        onClick: () => scrollToSection('#iota-application-libraries'),
    },
];

export const HERO_TOOLING_BUTTONS = [
    {
        text: 'Visit the docs',
        link: 'https://docs.iota.org',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        isExternal: true,
    },
];
