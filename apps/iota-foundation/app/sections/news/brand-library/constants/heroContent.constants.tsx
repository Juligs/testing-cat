import { HeroBackground, TitleTextSize, ButtonVariant } from 'react-ui-kit';
import { ArrowTopRight } from '@repo/icons';

export const HERO_BRAND_LIBRARY_CONTENT = {
    title: 'Brand Library',
    subtitle: 'Your one-stop destination for brand assets and guidelines',
    size: TitleTextSize.Medium,
};

export const HERO_BRAND_LIBRARY_BG: React.ComponentProps<typeof HeroBackground> = {
    mediaType: 'video',
    source: '/news/brand-library/hero.mp4',
    videoProps: {
        poster: '/news/brand-library/hero_poster.png',
    },
};
export const HERO_BRAND_LIBRARY_BUTTON = [
    {
        text: 'Show assets',
        link: 'https://assets.iota.org/',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        isExternal: true,
    },
];
