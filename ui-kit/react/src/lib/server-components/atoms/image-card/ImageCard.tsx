import clsx from 'clsx';
import { ImageCardSize } from './imageCard.enums';
import {
    IMAGE_SIZE_CLASS,
    GAP_SIZE_CLASS,
    TEXT_COLOR_MEDIUM,
    TEXT_COLOR_DARKEST,
    TEXT_COLOR_DARKEST_INVERTED,
    TEXT_COLOR_MEDIUM_INVERTED,
    BG_COLOR_DEFAULT,
    BG_COLOR_INVERTED,
    BORDER_DEFAULT,
    BORDER_INVERTED,
    BORDER_RADIUS,
    HOVER_EFFECT,
} from './imageCard.contants';

interface ImageCardprops {
    /**
     * image card size
     */
    size?: ImageCardSize;
    /**
     * inverted colors
     */
    inverted?: boolean;
    /**
     * overline text
     */
    overline?: string;
    /**
     * title text
     */
    title: string;
    /**
     * subtitle text
     */
    subtitle?: React.ReactNode;
    /**
     * body text
     */
    body?: React.ReactNode;
    /**
     * image url
     */
    image?: string;
    /**
     * An animation component (React Node)
     */
    animation?: React.ReactNode;
    /**
     * multiple links
     */
    children?: React.ReactNode;
    /**
     * has a link
     */
    isHoverable?: boolean;
    /**
     * alt text for the image
     */
    alt?: string;
    /**
     * aspect ratio
     */
    noAspectRatio?: boolean;
}
export function ImageCard({
    size = ImageCardSize.Large,
    inverted,
    overline,
    title,
    subtitle,
    body,
    image,
    children,
    isHoverable = true,
    animation,
    alt,
    noAspectRatio,
}: ImageCardprops): JSX.Element {
    const imageClass = IMAGE_SIZE_CLASS[size];
    const gapClass = GAP_SIZE_CLASS[size];
    const texMedium = inverted ? TEXT_COLOR_MEDIUM_INVERTED : TEXT_COLOR_MEDIUM;
    const textDarkest = inverted ? TEXT_COLOR_DARKEST_INVERTED : TEXT_COLOR_DARKEST;
    const bgColor = inverted ? BG_COLOR_INVERTED : BG_COLOR_DEFAULT;
    const border = inverted ? BORDER_INVERTED : BORDER_DEFAULT;
    const linkHoverEffect = isHoverable ? HOVER_EFFECT : '';
    const aspectRatio = !noAspectRatio ? imageClass : 'aspect-[21/9] md:aspect-auto';

    return (
        <div
            className={clsx(
                'w-full flex flex-col items-center overflow-hidden',
                BORDER_RADIUS,
                border,
                bgColor,
                linkHoverEffect,
            )}
        >
            {animation ? (
                <div
                    className={clsx(
                        'w-full h-auto max-w-full [&_>div]:aspect-[inherit]',
                        imageClass,
                    )}
                >
                    {animation}
                </div>
            ) : (
                image && (
                    <img
                        src={image}
                        alt={alt || image}
                        className={clsx('w-full h-auto object-cover', aspectRatio)}
                    />
                )
            )}
            <div
                className={clsx(
                    'flex flex-col justify-end items-start py-8 px-6 self-stretch gap-6',
                    texMedium,
                )}
            >
                <div className={clsx('flex flex-col items-start self-stretch w-full', gapClass)}>
                    {overline && <p className="text-label-sm">{overline}</p>}
                    <h2 className={clsx('text-title-sm', textDarkest)}>{title}</h2>
                    {subtitle && <p className="text-label-md">{subtitle}</p>}
                </div>
                {body && <p className="text-body-md">{body}</p>}
                {children && <div className="flex gap-6">{children}</div>}
            </div>
        </div>
    );
}
