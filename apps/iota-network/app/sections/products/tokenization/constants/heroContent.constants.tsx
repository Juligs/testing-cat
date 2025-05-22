import { ArrowTopRight } from '@repo/icons';
import { scrollToSection } from '@repo/shared/utils';
import { ButtonVariant, HeroBackground, ScreenSize } from 'react-ui-kit';

export const HERO_TOKENIZATION_CONTENT = {
    title: 'IOTA Tokenization',
    subtitle: 'Effortlessly create and manage unique digital assets',
    inverted: true,
};

export const HERO_TOKENIZATION_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    sourceSet: {
        [ScreenSize.Xs]: {
            src: 'https://files.iota.org/media/iota-network/tokenization_hero_mobile.mp4',
        },
        [ScreenSize.Md]: {
            src: 'https://files.iota.org/media/iota-network/tokenization_hero.mp4',
        },
    },
    videoProps: {
        poster: 'https://files.iota.org/media/iota-network/tokenization_hero_poster.jpg',
    },
};

export const HERO_TOKENIZATION_ANCHORLINKS = [
    {
        text: 'Why Tokenize with IOTA?',
        onClick: () => scrollToSection('#why-tokenized-with-iota'),
    },
    {
        text: 'NFT by Default ',
        onClick: () => scrollToSection('#nft-by-default'),
    },
    {
        text: 'Coins and Tokens',
        onClick: () => scrollToSection('#coins-and-tokens'),
    },
];

export const HERO_TOKENIZATION_BUTTONS = [
    {
        text: 'Visit the docs',
        link: 'https://docs.iota.org/developer/advanced/asset-tokenization',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        isExternal: true,
    },
];
