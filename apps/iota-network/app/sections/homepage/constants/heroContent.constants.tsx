import { ArrowTopRight } from '@repo/icons';
import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize, TitleTextSize } from 'react-ui-kit';

export const HERO_HOMEPAGE_CONTENT = {
    title: 'Built to Make a Difference',
    subtitle:
        'IOTA is a decentralized blockchain infrastructure to build and secure our digital world',
    inverted: true,
    size: TitleTextSize.Medium,
};

export const HERO_HOMEPAGE_BUTTON = [
    {
        text: 'Get Started',
        link: 'https://docs.iota.org/developer/getting-started',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        inverted: true,
        isExternal: true,
    },
    {
        text: 'What is IOTA',
        link: '/learn/intro',
        variant: ButtonVariant.Secondary,
        icon: <ArrowTopRight />,
        inverted: true,
    },
];

export const HERO_HOMEPAGE_ANCHORLINKS = [
    {
        text: 'Product Suite',
        onClick: () => scrollToSection('#integration-stack'),
    },
    {
        text: 'Why Build on IOTA?',
        onClick: () => scrollToSection('#why-build'),
    },
    {
        text: 'Real World Adoption',
        onClick: () => scrollToSection('#rwa'),
    },
];

export const HERO_HOMEPAGE_BG: React.ComponentProps<typeof HeroBackground> = {
    type: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/homepage_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/homepage_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/homepage_hero_poster.jpg',
    },
};
