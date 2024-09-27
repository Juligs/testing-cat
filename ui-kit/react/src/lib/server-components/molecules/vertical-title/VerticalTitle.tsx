import { VerticalTitleTextSize } from './verticalTitle.enums';
import { Overline, Title, Subtitle, Body } from '.';
import clsx from 'clsx';

interface VerticalTitleProps {
    /**
     * The title is centered or not
     */
    isCentered?: boolean;
    /**
     * The size of the title
     */
    size: VerticalTitleTextSize;
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
}: React.PropsWithChildren<VerticalTitleProps>) {
    const alignmentClass = isCentered ? 'items-center text-center' : 'justify-start text-left';
    return (
        <div className={clsx('flex flex-col gap-y-10', alignmentClass)}>
            <div className="flex flex-col gap-y-6">
                {overline && <Overline inverted={inverted}>{overline}</Overline>}
                <Title size={size} inverted={inverted}>
                    {title}
                </Title>
                {subtitle && (
                    <Subtitle inverted={inverted} size={size}>
                        {subtitle}
                    </Subtitle>
                )}
                {body && <Body inverted={inverted}>{body}</Body>}
            </div>
            {children}
        </div>
    );
}
