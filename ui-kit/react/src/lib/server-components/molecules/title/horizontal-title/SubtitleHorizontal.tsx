import { TitleTextSize } from '../titleSize.enums';
import {
    SECONDARY_TEXT_COLOR,
    INVERTED_SECONDARY_TEXT_COLOR,
    SUBTITLE_SIZE,
} from '../title.constants';
import clsx from 'clsx';

interface SubtitleProps {
    /*
     * Whether the title should be inverted
     */
    inverted?: boolean;
    /*
     * The size of the title
     */
    size?: TitleTextSize;
}

export function SubtitleHorizontal({
    children,
    inverted,
    size = TitleTextSize.Medium,
}: React.PropsWithChildren<SubtitleProps>) {
    const subtitleColor = inverted ? INVERTED_SECONDARY_TEXT_COLOR : SECONDARY_TEXT_COLOR;
    const subtitleSize = SUBTITLE_SIZE[size];

    return <p className={clsx(subtitleColor, subtitleSize)}>{children}</p>;
}
