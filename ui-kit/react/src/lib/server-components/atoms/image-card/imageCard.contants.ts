import { ImageCardSize } from './imageCard.enums';

export const TEXT_COLOR_MEDIUM = 'card-text-color-medium';
export const TEXT_COLOR_MEDIUM_INVERTED = 'card-text-color-medium-inverted';
export const TEXT_COLOR_DARKEST = 'text-darkest';
export const TEXT_COLOR_DARKEST_INVERTED = 'text-darkest-inverted';
export const BG_COLOR_DEFAULT = 'card-bg-color-default';
export const BG_COLOR_INVERTED = 'card-bg-color-inverted';
export const BORDER_DEFAULT = 'border 1px solid text-transparency-black-16';
export const BORDER_INVERTED = 'border 1px solid text-transparency-white-16';
export const BORDER_RADIUS = 'rounded-3xl';
export const HOVER_EFFECT = 'card-container hover:shadow-lg cursor-pointer';

export const IMAGE_SIZE_CLASS: Record<ImageCardSize, string> = {
    [ImageCardSize.Small]: 'aspect-[21/9]',
    [ImageCardSize.Large]: 'aspect-video',
};
export const GAP_SIZE_CLASS: Record<ImageCardSize, string> = {
    [ImageCardSize.Small]: 'gap-2',
    [ImageCardSize.Large]: 'gap-4',
};
