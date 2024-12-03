import { TextLinkSize } from './textLink.enums';

export const TEXT_SIZE: Record<TextLinkSize, string> = {
    [TextLinkSize.Small]: 'text-label-sm',
    [TextLinkSize.Medium]: 'text-label-md',
    [TextLinkSize.Large]: 'text-label-lg',
};

export const TEXT_COLOR_DEFAULT = 'text-network-neutral-40';
export const TEXT_COLOR_DEFAULT_INVERTED = 'text-network-neutral-80';
export const TEXT_COLOR_ICON = 'text-network-primary-40';
export const TEXT_COLOR_ICON_INVERTED = 'text-network-primary-60';
export const UNDERLINE_COLOR_DEFAULT = 'bg-transparency-black-16';
export const UNDERLINE_COLOR_INVERTED = 'bg-transparency-white-16';
export const UNDERLINE_HOVER_COLOR_DEFAULT = 'bg-network-neutral-10';
export const UNDERLINE_HOVER_COLOR_INVERTED = 'bg-network-neutral-100';
export const CLASS_TEXT_HOVER_COLOR = 'text-link';
