import { ImageCardSize } from './imageCard.enums';

export const TEXT_COLOR_MEDIUM = 'card-text-color-medium';
export const TEXT_COLOR_MEDIUM_INVERTED = 'card-text-color-medium-inverted';
export const TEXT_COLOR_DARKEST = 'card-text-color-darkest';
export const TEXT_COLOR_DARKEST_INVERTED = 'card-text-color-darkest-inverted';
export const ELEVATED_BG_COLOR = 'card-bg-color-elevated';
export const ELEVATED_BG_COLOR_INVERTED = 'card-bg-color-elevated-inverted';

export const IMAGE_SIZE_CLASS: Record<ImageCardSize, string> = {
    [ImageCardSize.Small]: 'aspect-[21/9]',
    [ImageCardSize.Large]: 'aspect-video',
};
export const GAP_SIZE_CLASS: Record<ImageCardSize, string> = {
    [ImageCardSize.Small]: 'gap-2',
    [ImageCardSize.Large]: 'gap-4',
};
