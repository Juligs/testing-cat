import { ExploreCardSize } from './exploreCard.enums';

export const BG_COLOR = 'bg-color-card';
export const BG_COLOR_INVERTED = 'bg-color-card-inverted';
export const TEXT_COLOR = 'text-darkest';
export const TEXT_COLOR_INVERTED = 'text-darkest-inverted';
export const SUBTITLE_COLOR = 'text-medium';
export const SUBTITLE_COLOR_INVERTED = 'text-medium-inverted';

export const TITLE_SIZE: Record<ExploreCardSize, string> = {
    [ExploreCardSize.Small]: 'text-title-lg',
    [ExploreCardSize.Large]: 'text-headline-sm',
};
