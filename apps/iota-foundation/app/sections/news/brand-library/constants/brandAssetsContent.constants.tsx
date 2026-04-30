import { ButtonVariant, TitleTextSize } from 'react-ui-kit';

export const BRAND_ASSETS_TITLE_CONTENT = {
    title: 'Brand Assets & Guidelines',
    body: 'Our asset library offers everything you need, from logos, colors, and typography to special graphics and illustrations. Access the latest guidelines and assets to illustrate your events, publications and news stories.',
    size: TitleTextSize.Small,
};

export const BRAND_ASSETS_BUTTONS = [
    {
        text: 'Show assets',
        link: 'https://assets.iota.org/',
        variant: ButtonVariant.Primary,
        icon: true,
    },
    {
        text: 'See Trademark Policy',
        link: 'https://www.iota.org/trademark',
        variant: ButtonVariant.Ghost,
    },
];
