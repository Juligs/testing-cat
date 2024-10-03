import { AnchorLinkSize } from './anchorLink.enums';

export const ANCHOR_LINK_PADDING: Record<AnchorLinkSize, string> = {
    [AnchorLinkSize.Small]: 'px-4 py-3',
    [AnchorLinkSize.Default]: 'pl-6 pr-4 py-4',
};

export const DEFAULT_TEXT_COLOR = 'anchor-link-default';
export const INVERTED_TEXT_COLOR = 'anchor-link-inverted';

export const BACKGROUND_AND_BORDER_COLORS = {
    [AnchorLinkSize.Small]: {
        inverted: 'bg-labs-neutral-6',
        default: 'bg-labs-neutral-96',
    },
    [AnchorLinkSize.Default]: {
        inverted: 'bg-transparency-white-4 backdrop-blur border border-transparency-white-8',
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
