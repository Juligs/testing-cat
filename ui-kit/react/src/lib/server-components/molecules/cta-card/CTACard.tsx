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
     * The image of the card
     */
    image: string;
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
}
export function CtaCard({
    title,
    subtitle,
    image,
    alt,
    inverted,
    brand,
    children,
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
    return (
        <div
            className={clsx(
                'w-auto h-auto overflow-hidden rounded-4xl flex flex-col sm:flex-row-reverse items-center justify-center text-center',
                bgColor,
            )}
        >
            <img
                src={image}
                alt={alt}
                className="w-full sm:w-1/2 h-auto object-cover aspect-[4/3] xs:aspect-video sm:aspect-[4/3]"
            />
            <div
                className={clsx(
                    'sm:w-1/2 flex flex-col items-center justify-center text-center w-full gap-2 xs:gap-4',
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
