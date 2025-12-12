import clsx from 'clsx';
import {
    PADDING_SIZE,
    COLOR_TITLE,
    COLOR_TITLE_INVERTED,
    COLOR_TEXT,
    COLOR_TEXT_INVERTED,
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
     * The body text of the card
     */
    body?: string;
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
    /**
     * align items start
     */
    alignStart?: boolean;
    /**
     * image aspect video
     */
    aspectVideo?: boolean;
    /***
     * Small card
     */
    small?: boolean;
}

export function CtaCard({
    title,
    subtitle,
    body,
    image,
    animation,
    alt,
    inverted,
    brand,
    children,
    isVertical,
    alignStart,
    aspectVideo,
    small,
}: CtaCardProps): JSX.Element {
    const colorTitle = inverted ? COLOR_TITLE_INVERTED : COLOR_TITLE;
    const colorText = inverted ? COLOR_TEXT_INVERTED : COLOR_TEXT;
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
                !image && 'justify-center p-6 xs:p-14',
            )}
        >
            {image || animation ? (
                <div
                    className={clsx(
                        'w-full object-cover aspect-[4/3] xs:aspect-video',
                        isVertical && 'sm:aspect-[21/9]',
                        !isVertical && aspectVideo && 'aspect-video sm:aspect-video sm:w-1/2',
                        !isVertical && !aspectVideo && 'sm:w-1/2 sm:aspect-[4/3]',
                    )}
                >
                    {animation ? (
                        <div className="w-full h-auto max-w-full [&_>div]:aspect-[inherit] aspect-[inherit]">
                            {animation}
                        </div>
                    ) : image ? (
                        <img
                            src={image}
                            alt={alt || image}
                            className="w-full h-auto object-cover"
                        />
                    ) : null}
                </div>
            ) : null}

            <div
                className={clsx(
                    'flex flex-col w-full h-full',
                    small ? 'gap-0' : 'gap-2 xs:gap-4',
                    alignStart ? 'items-start' : 'items-center',
                    isVertical ? 'sm:w-full' : 'sm:w-1/2',
                    aspectVideo ? 'pt-0 pb-8 sm:py-8' : 'py-8',
                    small ? 'pt-8 pb-12 pr-4 pl-8' : PADDING_SIZE,
                    small ? 'justify-center text-start' : 'justify-start text-center',
                )}
            >
                <p
                    className={clsx(
                        small ? 'text-title-sm' : 'text-title-lg xs:text-headline-sm',
                        colorTitle,
                        isVertical && 'whitespace-pre-line',
                    )}
                >
                    {title}
                </p>
                <p
                    className={clsx(
                        small ? 'text-body-md' : 'text-label-md xs:text-label-lg',
                        colorText,
                    )}
                >
                    {subtitle}
                </p>
                {body && <p className={clsx('text-body-lg', colorText)}>{body}</p>}
                {children && (
                    <div className="flex items-center justify-center gap-6 pt-6 xs:pt-8">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
