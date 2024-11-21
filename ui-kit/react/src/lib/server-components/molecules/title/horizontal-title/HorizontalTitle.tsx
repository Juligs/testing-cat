import clsx from 'clsx';
import { TitleTextSize } from '../titleSize.enums';
import { BodyHorizontal, SubtitleHorizontal } from '.';
import { TitleTag } from '../title.enums';
import { Title } from '../Title';
interface HorizontalTitleProps {
    /**
     * Title content
     */
    title: React.ReactNode;
    /**
     * Subtitle content
     */
    subtitle?: React.ReactNode;
    /**
     * Title size
     */
    size: TitleTextSize;
    /**
     * color inverted
     */
    inverted?: boolean;
    /**
     * body content
     */
    body?: React.ReactNode;
    /**
     * The tag of the Title
     */
    titleTag?: TitleTag;
}
export function HorizontalTitle({
    title,
    subtitle,
    size,
    inverted,
    body,
    children,
    titleTag,
}: React.PropsWithChildren<HorizontalTitleProps>) {
    return (
        <div
            className={clsx(
                'w-full flex flex-wrap xs:flex-nowrap items-baseline justify-between gap-8 xs:gap-20 sm:gap-30',
            )}
        >
            <div className="w-full xs:w-1/2">
                <Title tag={titleTag} size={size} inverted={inverted}>
                    {title}
                </Title>
            </div>
            <div className="w-full xs:w-1/2 flex flex-col gap-8">
                {subtitle && (
                    <SubtitleHorizontal inverted={inverted}>{subtitle}</SubtitleHorizontal>
                )}
                {body && <BodyHorizontal inverted={inverted}>{body}</BodyHorizontal>}
                {children && children}
            </div>
        </div>
    );
}
