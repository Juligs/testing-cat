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
    CARD_BORDER_DEFAULT,
    CARD_BORDER_INVERTED,
    CARD_BORDER_RADIUS,
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
    image: string;
    /**
     * multiple links
     */
    children?: React.ReactNode;
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
}: ImageCardprops): JSX.Element {
    const imageClass = IMAGE_SIZE_CLASS[size];
    const gapClass = GAP_SIZE_CLASS[size];
    const texMedium = inverted ? TEXT_COLOR_MEDIUM_INVERTED : TEXT_COLOR_MEDIUM;
    const textDarkest = inverted ? TEXT_COLOR_DARKEST_INVERTED : TEXT_COLOR_DARKEST;

    const bgColor = inverted ? BG_COLOR_INVERTED : BG_COLOR_DEFAULT;
    const border = inverted ? CARD_BORDER_INVERTED : CARD_BORDER_DEFAULT;

    return (
        <div
            className={clsx(
                'card-container w-full flex flex-col items-center cursor-pointer hover:shadow-lg overflow-hidden',
                CARD_BORDER_RADIUS,
                border,
                bgColor,
            )}
        >
            <img
                src={image}
                alt=""
                className={clsx('w-full h-auto object-cover hover:shadow-top-lg', imageClass)}
            />
            <div
                className={clsx(
                    'flex flex-col justify-end items-start py-8 px-6 self-stretch gap-6',
                    texMedium,
                )}
            >
                <div className={clsx('flex flex-col items-start self-stretch w-full', gapClass)}>
                    {overline && <p className="text-label-lg">{overline}</p>}
                    <h2 className={clsx('text-title-lg', textDarkest)}>{title}</h2>
                    {subtitle && <p className="text-title-sm">{subtitle}</p>}
                </div>
                {body && <p className="text-body-lg">{body}</p>}
                {children && <div className="flex gap-6">{children}</div>}
            </div>
        </div>
    );
}
