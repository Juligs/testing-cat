import clsx from 'clsx';
import {
    PADDING_SIZE,
    COLOR_TITLE,
    COLOR_TITLE_INVERTED,
    COLOR_SUBTILE,
    COLOR_SUBTITLE_INVERTED,
    BG_COLOR_DEFAULT,
    BG_COLOR_INVERTED,
    BG_COLOR_GRADIENT,
} from './ctaCard.constants';
interface CtaCardProps {
    /**
     * The title of the card
     */
    title: string;
    /**
     * The subtitle of the card
     */
    subtitle: string;
    /**
     * The image of the card (used when animation is not provided)
     */
    image?: string;
    /**
     * An animation component (React Node)
     */
    animation?: React.ReactNode;
    /**
     * alt text for the image
     */
    alt?: string;
    /**
     * Are colors inverted
     */
    inverted?: boolean;
    /**
     * theme gradient color
     */
    brand?: boolean;
    /**
     * multiple links
     */
    children?: React.ReactNode;
    /**
     * column layout
     */
    isVertical?: boolean;
}

export function CtaCard({
    title,
    subtitle,
    image,
    animation,
    alt,
    inverted,
    brand,
    children,
    isVertical,
}: CtaCardProps): JSX.Element {
    const colorTitle = inverted ? COLOR_TITLE_INVERTED : COLOR_TITLE;
    const colorSubtitle = inverted ? COLOR_SUBTITLE_INVERTED : COLOR_SUBTILE;
    const bgColor = brand
        ? inverted
            ? BG_COLOR_INVERTED
            : BG_COLOR_GRADIENT
        : inverted
          ? BG_COLOR_INVERTED
          : BG_COLOR_DEFAULT;
    const flexDirection = isVertical ? 'flex-col ' : 'flex-col sm:flex-row-reverse';

    return (
        <div
            className={clsx(
                'flex w-full overflow-hidden rounded-4xl items-center text-center',
                bgColor,
                flexDirection,
            )}
        >
            <div
                className={clsx(
                    'w-full object-cover aspect-[4/3] xs:aspect-video',
                    isVertical ? 'sm:aspect-[21/9]' : 'sm:w-1/2 sm:aspect-[4/3]',
                )}
            >
                {animation ? (
                    <div className="[&_>div]:aspect-[inherit] aspect-[inherit]">{animation}</div>
                ) : image ? (
                    <img src={image} alt={alt} className="w-full h-auto object-cover" />
                ) : null}
            </div>

            <div
                className={clsx(
                    'flex flex-col items-center justify-start text-center w-full gap-2 xs:gap-4 h-full',
                    isVertical ? 'sm:w-full' : 'sm:w-1/2',
                    PADDING_SIZE,
                )}
            >
                <p className={clsx('text-title-lg xs:text-headline-sm', colorTitle)}>{title}</p>
                <p className={clsx('text-body-lg xs:text-title-md', colorSubtitle)}>{subtitle}</p>
                {children && (
                    <div className="flex items-center justify-center gap-6 pt-6 xs:pt-8">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
