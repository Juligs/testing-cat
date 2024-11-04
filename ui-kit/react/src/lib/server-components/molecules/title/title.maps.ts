import { TitleTag } from './title.enums';
import { TitleTextSize } from './titleSize.enums';

export const HEADING_TO_SIZE: Record<TitleTag, TitleTextSize> = {
    [TitleTag.H1]: TitleTextSize.Large,
    [TitleTag.H2]: TitleTextSize.Medium,
    [TitleTag.H3]: TitleTextSize.Small,
    [TitleTag.H4]: TitleTextSize.Small,
    [TitleTag.H5]: TitleTextSize.Small,
    [TitleTag.H6]: TitleTextSize.Small,
};

export const SIZE_TO_HEADING: Record<TitleTextSize, TitleTag> = {
    [TitleTextSize.Large]: TitleTag.H1,
    [TitleTextSize.Medium]: TitleTag.H2,
    [TitleTextSize.Small]: TitleTag.H3,
};
