import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_EVM_CONTENT = {
    title: 'IOTA EVM',
    subtitle:
        'Real world meets Web3. IOTA EVM is your new home to create products that reach the next billion users',
    inverted: true,
};

export const HERO_EVM_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/evm_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/evm_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/evm_hero_poster.jpg',
    },
};

export const HERO_EVM_ANCHORLINKS = [
    {
        text: 'Smart Contracts',
        onClick: () => scrollToSection('#smart-contracts'),
    },
    {
        text: 'Bridge IOTA',
        onClick: () => scrollToSection('#bridge-iota'),
    },
    {
        text: 'IOTA EVM Bridge',
        onClick: () => scrollToSection('#iota-evm'),
    },
];

export const HERO_EVM_BUTTONS = [
    {
        text: 'Connect',
        link: 'https://evm-bridge.iota.org',
        variant: ButtonVariant.Primary,
        icon: true,
        isExternal: true,
    },
    {
        text: 'View the docs',
        link: 'https://docs.iota.org/iota-evm',
        variant: ButtonVariant.Secondary,
        icon: true,
        isExternal: true,
    },
];
