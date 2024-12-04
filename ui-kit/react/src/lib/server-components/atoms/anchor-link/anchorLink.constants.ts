import { AnchorLinkSize } from './anchorLink.enums';

export const ANCHOR_LINK_PADDING: Record<AnchorLinkSize, string> = {
    [AnchorLinkSize.Small]: 'px-4 py-3',
    [AnchorLinkSize.Default]: 'px-6 py-4',
};
export const ANCHOR_LINK_ICON_IS_EXTERNAL: Record<AnchorLinkSize, string> = {
    [AnchorLinkSize.Small]: '[&_svg]:h-4 [&_svg]:w-4',
    [AnchorLinkSize.Default]: '[&_svg]:h-6 [&_svg]:w-6',
};

export const ANCHOR_LINK_ICON_LEADING_ICON: Record<AnchorLinkSize, string> = {
    [AnchorLinkSize.Small]: '[&_svg]:h-6 [&_svg]:w-6',
    [AnchorLinkSize.Default]: '[&_svg]:h-8 [&_svg]:w-8',
};

export const DEFAULT_TEXT_COLOR = 'anchor-link-default';
export const INVERTED_TEXT_COLOR = 'anchor-link-inverted';
export const DEFAULT_ICON_EXTERNAL_COLOR = 'anchor-link-external-icon-color';
export const INVERTED_ICON_EXTERNAL_COLOR = 'anchor-link-external-icon-color-inverted';
export const DEFAULT_ICON_COLOR = 'anchor-link-icon-color';
export const INVERTED_ICON_COLOR = 'anchor-link-icon-color-inverted';
export const HOVER_TEXT_COLOR = 'anchor-link-hover';
export const HOVER_BG_COLOR = 'state-layer';

export const BACKGROUND_AND_BORDER_COLORS = {
    [AnchorLinkSize.Small]: {
        inverted: 'bg-labs-neutral-6',
        default: 'bg-labs-neutral-96',
    },
    [AnchorLinkSize.Default]: {
        inverted:
            'anchor-link-bg-icon-color-inverted backdrop-blur border border-transparency-white-8',
        default: 'bg-transparency-white-4 backdrop-blur border border-transparency-black-8',
    },
} as const;

export const ANCHOR_LINK_HIGHLIGHTED =
    'group-hover:anchor-link-highlighted group-focus:anchor-link-highlighted';
export const ANCHOR_LINK_HIGHLIGHTED_INVERTED =
    'group-hover:anchor-link-highlighted-inverted group-focus:anchor-link-highlighted-inverted group-active:anchor-link-highlighted-inverted';

export const TEXT_SIZE: Record<AnchorLinkSize, string> = {
    [AnchorLinkSize.Small]: 'text-label-md',
    [AnchorLinkSize.Default]: 'text-title-sm',
};
