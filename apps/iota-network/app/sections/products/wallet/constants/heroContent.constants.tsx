import { ArrowTopRight } from '@repo/icons';
import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_WALLET_CONTENT = {
    overline: 'Mint and manage assets and participate in staking ',
    title: 'IOTA Wallets',
    subtitle: 'Your secure gateway to the IOTA ecosystem',
    inverted: true,
};

export const HERO_WALLET_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/wallets_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/wallets_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/wallets_hero_poster.jpg',
    },
};

export const HERO_WALLET_ANCHORLINKS = [
    {
        text: 'IOTA Wallet',
        onClick: () => scrollToSection('#iota-wallet'),
    },
    {
        text: 'IOTA Wallet Dashboard',
        onClick: () => scrollToSection('#iota-wallet-dashboard'),
    },
    {
        text: 'Browser Extension Wallets',
        onClick: () => scrollToSection('#browser-extension-wallets'),
    },
];

export const HERO_WALLET_BUTTONS = [
    {
        text: 'Get the wallet',
        link: 'https://chromewebstore.google.com/detail/iota-wallet/iidjkmdceolghepehaaddojmnjnkkija',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        isExternal: true,
    },
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/about-iota/iota-wallet/getting-started',
        variant: ButtonVariant.Secondary,
        icon: <ArrowTopRight />,
        isExternal: true,
        inverted: true,
    },
];
