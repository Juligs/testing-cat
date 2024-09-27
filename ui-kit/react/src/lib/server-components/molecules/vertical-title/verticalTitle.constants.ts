import { VerticalTitleTextSize } from './verticalTitle.enums';

export const DEFAULT_TEXT_COLOR = 'text-darkest';
export const INVERTED_TEXT_COLOR = 'text-darkest-inverted';

export const SECONDARY_TEXT_COLOR = 'text-dark';
export const INVERTED_SECONDARY_TEXT_COLOR = 'text-dark-inverted';

export const TITLE_SIZE: Record<VerticalTitleTextSize, string> = {
    [VerticalTitleTextSize.Small]: 'text-headline-md',
    [VerticalTitleTextSize.Medium]: 'text-display-sm',
    [VerticalTitleTextSize.Large]: 'text-display-md',
};

export const SUBTITLE_SIZE: Record<VerticalTitleTextSize, string> = {
    [VerticalTitleTextSize.Small]: 'text-title-md',
    [VerticalTitleTextSize.Medium]: 'text-title-lg',
    [VerticalTitleTextSize.Large]: 'text-title-lg',
};
