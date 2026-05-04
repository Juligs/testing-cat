import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const GAS_STATION_CONTENT = {
    title: 'IOTA Gas Station ',
    subtitle: 'Sponsored transaction fees for a smoother Web3 experience',
    inverted: true,
};

export const GAS_STATION_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/gas_station_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/gas_station_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/gas_station_hero_poster.jpg',
    },
};

export const GAS_STATION_ANCHORLINKS = [
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

export const GAS_STATION_BUTTONS = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/operator/gas-station/',
        variant: ButtonVariant.Primary,
        icon: true,
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
