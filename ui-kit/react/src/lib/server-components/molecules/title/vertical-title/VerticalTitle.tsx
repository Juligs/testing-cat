import { TitleTextSize } from '../titleSize.enums';
import { Overline, Subtitle, Body } from '.';
import { TitleTag } from '../title.enums';
import { Title } from '../Title';
import { TITLE_VERTICAL_GAP, GAP_CHILDREN } from '../title.constants';
import clsx from 'clsx';

interface VerticalTitleProps {
    /**
     * The title is centered or not
     */
    isCentered?: boolean;
    /**
     * The size of the title
     */
    size: TitleTextSize;
    /**
     * Title content
     */
    title: React.ReactNode;
    /**
     * Subtitle content
     */
    subtitle?: React.ReactNode;
    /**
     * The overline content
     */
    overline?: React.ReactNode;
    /**
     * The body content
     */
    body?: React.ReactNode;
    /**
     * Whether the component should be inverted
     */
    inverted?: boolean;
    /**
     * The tag of the Title
     */
    titleTag?: TitleTag;
}

export function VerticalTitle({
    children,
    isCentered,
    size,
    title,
    subtitle,
    overline,
    body,
    inverted,
    titleTag,
}: React.PropsWithChildren<VerticalTitleProps>) {
    const alignmentClass = isCentered ? 'items-center text-center' : 'justify-start text-left';

    return (
        <div className={clsx('flex flex-col', alignmentClass, GAP_CHILDREN[size])}>
            <div className={clsx('flex flex-col', TITLE_VERTICAL_GAP[size])}>
                {overline && <Overline inverted={inverted}>{overline}</Overline>}
                <Title size={size} inverted={inverted} tag={titleTag}>
                    {title}
                </Title>
                {subtitle && (
                    <Subtitle inverted={inverted} size={size} isCentered={isCentered}>
                        {subtitle}
                    </Subtitle>
                )}
                {body && (
                    <Body inverted={inverted} isCentered={isCentered}>
                        {body}
                    </Body>
                )}
            </div>
            {children}
        </div>
    );
}
