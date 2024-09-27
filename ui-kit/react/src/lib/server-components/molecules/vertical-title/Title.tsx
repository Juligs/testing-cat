import { INVERTED_TEXT_COLOR, DEFAULT_TEXT_COLOR, TITLE_SIZE } from './verticalTitle.constants';
import { VerticalTitleTextSize } from './verticalTitle.enums';
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
}

export function Title({
    children,
    inverted,
    size = VerticalTitleTextSize.Medium,
}: React.PropsWithChildren<TitleProps>) {
    const titleColor = inverted ? INVERTED_TEXT_COLOR : DEFAULT_TEXT_COLOR;
    return <div className={clsx(titleColor, TITLE_SIZE[size])}>{children}</div>;
}
