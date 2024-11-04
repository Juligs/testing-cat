import { TitleTextSize } from './titleSize.enums';

export const DEFAULT_TEXT_COLOR = 'text-darkest';
export const INVERTED_TEXT_COLOR = 'text-darkest-inverted';

export const SECONDARY_TEXT_COLOR = 'text-dark';
export const INVERTED_SECONDARY_TEXT_COLOR = 'text-dark-inverted';

export const TITLE_SIZE: Record<TitleTextSize, string> = {
    [TitleTextSize.Small]: 'text-headline-md',
    [TitleTextSize.Medium]: 'text-display-sm',
    [TitleTextSize.Large]: 'text-display-md',
};

export const SUBTITLE_SIZE: Record<TitleTextSize, string> = {
    [TitleTextSize.Small]: 'text-title-md',
    [TitleTextSize.Medium]: 'text-title-lg',
    [TitleTextSize.Large]: 'text-title-lg',
};
