import clsx from 'clsx';
import { ImageCardSize } from './imageCard.enums';
import {
    IMAGE_SIZE_CLASS,
    GAP_SIZE_CLASS,
    TEXT_COLOR_MEDIUM,
    TEXT_COLOR_DARKEST,
    TEXT_COLOR_DARKEST_INVERTED,
    TEXT_COLOR_MEDIUM_INVERTED,
    ELEVATED_BG_COLOR,
    ELEVATED_BG_COLOR_INVERTED,
} from './imageCard.contants';
import { ReactNode } from 'react';

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
     * elevated colors and padding
     */
    elevated?: boolean;
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
    subtitle?: ReactNode;
    /**
     * body text
     */
    body?: ReactNode;
    /**
     * image url
     */
    image: string;
}
export function ImageCard({
    size = ImageCardSize.Large,
    inverted,
    elevated,
    overline,
    title,
    subtitle,
    body,
    image,
}: ImageCardprops): JSX.Element {
    const imageClass = IMAGE_SIZE_CLASS[size];
    const gapClass = GAP_SIZE_CLASS[size];
    const texMedium = inverted ? TEXT_COLOR_MEDIUM_INVERTED : TEXT_COLOR_MEDIUM;
    const textDarkest = inverted ? TEXT_COLOR_DARKEST_INVERTED : TEXT_COLOR_DARKEST;
    const bgColors = !elevated
        ? inverted
            ? ''
            : ''
        : inverted
          ? ELEVATED_BG_COLOR_INVERTED
          : ELEVATED_BG_COLOR;
    return (
        <div
            className={clsx(
                'card-container w-full flex flex-col items-center card-border-radius cursor-pointer',
                elevated ? 'hover:shadow-lg' : 'shadow-none',
                bgColors,
            )}
        >
            <img
                src={image}
                alt=""
                className={clsx(
                    'w-full h-auto object-cover',
                    imageClass,
                    elevated ? 'rounded-none' : 'card-border-radius',
                    elevated ? 'hover:shadow-top-lg' : 'shadow-none',
                )}
            />
            <div
                className={clsx(
                    'flex flex-col justify-end items-start py-8 self-stretch',
                    texMedium,
                    elevated ? 'px-6' : 'px-2',
                )}
            >
                <div className={clsx('flex flex-col items-start self-stretch w-full', gapClass)}>
                    {overline && <p className={clsx('text-label-lg')}>{overline}</p>}
                    <h2 className={clsx('text-title-lg', textDarkest)}>{title}</h2>
                    {subtitle && <p className={clsx('text-title-sm')}>{subtitle}</p>}
                </div>
                {body && <p className={clsx('text-body-lg')}>{body}</p>}
            </div>
        </div>
    );
}
