import { INVERTED_TEXT_COLOR, DEFAULT_TEXT_COLOR, TITLE_SIZE } from './verticalTitle.constants';
import { VerticalTitleTextSize } from './verticalTitle.enums';
import { TitleTag } from './title.enums';
import { HEADING_TO_SIZE, SIZE_TO_HEADING } from './title.maps';
import clsx from 'clsx';

interface TitleProps {
    /*
     * Whether the title should be inverted
     */
    inverted?: boolean;
    /*
     * The size of the title
     */
    size?: VerticalTitleTextSize;
    /**
     * The tag of the Title
     */
    tag?: TitleTag;
}

export function Title({
    children,
    inverted,
    size = VerticalTitleTextSize.Medium,
    tag,
}: React.PropsWithChildren<TitleProps>) {
    const titleSize = size || (tag ? HEADING_TO_SIZE[tag] : VerticalTitleTextSize.Medium);
    const titleTag = tag || (size ? SIZE_TO_HEADING[size] : TitleTag.H3);
    const TitleElement = titleTag;

    const titleColor = inverted ? INVERTED_TEXT_COLOR : DEFAULT_TEXT_COLOR;

    return (
        <TitleElement className={clsx(titleColor, TITLE_SIZE[titleSize])}>{children}</TitleElement>
    );
}
