import { TitleTag } from './title.enums';
import { VerticalTitleTextSize } from './verticalTitle.enums';

export const HEADING_TO_SIZE: Record<TitleTag, VerticalTitleTextSize> = {
    [TitleTag.H1]: VerticalTitleTextSize.Large,
    [TitleTag.H2]: VerticalTitleTextSize.Medium,
    [TitleTag.H3]: VerticalTitleTextSize.Small,
    [TitleTag.H4]: VerticalTitleTextSize.Small,
    [TitleTag.H5]: VerticalTitleTextSize.Small,
    [TitleTag.H6]: VerticalTitleTextSize.Small,
};

export const SIZE_TO_HEADING: Record<VerticalTitleTextSize, TitleTag> = {
    [VerticalTitleTextSize.Large]: TitleTag.H1,
    [VerticalTitleTextSize.Medium]: TitleTag.H2,
    [VerticalTitleTextSize.Small]: TitleTag.H3,
};
