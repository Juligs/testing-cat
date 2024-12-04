import { TitleTextSize } from './titleSize.enums';

export const DEFAULT_TEXT_COLOR = 'text-darkest';
export const INVERTED_TEXT_COLOR = 'text-darkest-inverted';

export const SECONDARY_TEXT_COLOR = 'text-dark';
export const INVERTED_SECONDARY_TEXT_COLOR = 'text-dark-inverted';

export const TITLE_SIZE: Record<TitleTextSize, string> = {
    [TitleTextSize.ExtraSmall]: 'text-headline-sm',
    [TitleTextSize.Small]: 'text-headline-md',
    [TitleTextSize.Medium]: 'text-display-sm',
    [TitleTextSize.Large]: 'text-display-md',
};

export const SUBTITLE_SIZE: Record<TitleTextSize, string> = {
    [TitleTextSize.ExtraSmall]: 'text-title-md',
    [TitleTextSize.Small]: 'text-title-md',
    [TitleTextSize.Medium]: 'text-title-lg',
    [TitleTextSize.Large]: 'text-title-lg',
};

export const TITLE_VERTICAL_GAP: Record<TitleTextSize, string> = {
    [TitleTextSize.ExtraSmall]: 'gap-y-4',
    [TitleTextSize.Small]: 'gap-y-6',
    [TitleTextSize.Medium]: 'gap-y-6',
    [TitleTextSize.Large]: 'gap-y-8',
};

export const TITLE_HORIZONTAL_GAP: Record<TitleTextSize, string> = {
    [TitleTextSize.ExtraSmall]: 'gap-y-4 xs:gap-y-6',
    [TitleTextSize.Small]: 'gap-y-6 xs:gap-y-8',
    [TitleTextSize.Medium]: 'gap-y-6 xs:gap-y-8',
    [TitleTextSize.Large]: 'gap-y-8',
};

export const GAP_CHILDREN: Record<TitleTextSize, string> = {
    [TitleTextSize.ExtraSmall]: 'gap-y-6',
    [TitleTextSize.Small]: 'gap-y-10',
    [TitleTextSize.Medium]: 'gap-y-14',
    [TitleTextSize.Large]: 'gap-y-14',
};
