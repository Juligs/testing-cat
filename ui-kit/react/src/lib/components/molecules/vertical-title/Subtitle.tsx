import {
    INVERTED_SECONDARY_TEXT_COLOR,
    SECONDARY_TEXT_COLOR,
    SUBTITLE_SIZE,
} from './verticalTitle.constants';
import { VerticalTitleTextSize } from './verticalTitle.enums';
import clsx from 'clsx';

interface SubtitleProps {
    /*
     * Whether the subtitle should be inverted
     */
    inverted?: boolean;
    /*
     * The size of the subtitle
     */
    size: VerticalTitleTextSize;
}

export function Subtitle({ children, inverted, size }: React.PropsWithChildren<SubtitleProps>) {
    const textColor = inverted ? INVERTED_SECONDARY_TEXT_COLOR : SECONDARY_TEXT_COLOR;

    return <span className={clsx(SUBTITLE_SIZE[size], textColor)}>{children}</span>;
}
