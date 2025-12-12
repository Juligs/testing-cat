import { TextSize } from './displayStats.enums';

export const DEFAULT_TEXT_COLOR = 'display-color-text-default';
export const INVERTED_TEXT_COLOR = 'display-color-text-inverted';
export const HIGHLIGHTED_TEXT_COLOR = 'display-color-text-light';
export const DEFAULT_BG_COLOR = 'display-bg-color-neutral';
export const INVERTED_BG_COLOR = 'display-bg-color-inverted';
export const LIGHT_BG_COLOR = 'display-bg-color-light';
export const ICON_COLOR_DEFAULT = 'display-icon-color-default';
export const ICON_COLOR_INVERTED = 'display-icon-color-inverted';
export const ICON_BG_DEFAULT = 'text-transparency-black-16';
export const ICON_BG_INVERTED = 'text-transparency-white-16';

export const VALUE_TEXT_SIZE: Record<TextSize, string> = {
    [TextSize.Small]: 'text-title-md',
    [TextSize.Default]: 'text-title-lg',
    [TextSize.Large]: 'text-headline-sm',
};
export const SUPPORTING_TEXT_SIZE: Record<TextSize, string> = {
    [TextSize.Small]: 'text-label-sm',
    [TextSize.Default]: 'text-label-lg',
    [TextSize.Large]: 'text-label-lg',
};
