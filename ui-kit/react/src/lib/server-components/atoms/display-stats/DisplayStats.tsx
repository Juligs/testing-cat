import { clsx } from 'clsx';
import { TextSize, CardSize } from './displayStats.enums';
import {
    DEFAULT_BG_COLOR,
    INVERTED_BG_COLOR,
    LIGHT_BG_COLOR,
    DEFAULT_TEXT_COLOR,
    INVERTED_TEXT_COLOR,
    HIGHLIGHTED_TEXT_COLOR,
    VALUE_TEXT_SIZE,
    SUPPORTING_TEXT_SIZE,
    ICON_COLOR_DEFAULT,
    ICON_COLOR_INVERTED,
} from './displayStats.constans';

interface DisplayStatsProps {
    /**
     * label of the stats
     */
    label?: string;
    /**
     * value of the stats
     */
    value: string;
    /**
     * inverted colors
     */
    inverted?: boolean;
    /**
     * highlight colors
     */
    highlighted?: boolean;
    /**
     * supporting text
     */
    supportingText?: string;
    /**
     * text size
     */
    textSize?: TextSize;
    /**
     * Number of lines
     */
    isMultiLine?: boolean;
    /**
     * size of the cards
     */
    size?: CardSize;
    /**
     * icon
     */
    icon?: React.ReactNode;
    /**
     * Text Highlighted
     */
    textHighlighted?: boolean;
}

export function DisplayStats({
    label,
    value,
    inverted,
    highlighted,
    supportingText,
    textSize = TextSize.Large,
    isMultiLine,
    size = CardSize.Default,
    icon,
    textHighlighted,
}: DisplayStatsProps) {
    const bgColors = highlighted
        ? inverted
            ? LIGHT_BG_COLOR
            : LIGHT_BG_COLOR
        : inverted
          ? INVERTED_BG_COLOR
          : DEFAULT_BG_COLOR;

    const textColor = highlighted
        ? inverted
            ? HIGHLIGHTED_TEXT_COLOR
            : HIGHLIGHTED_TEXT_COLOR
        : inverted
          ? INVERTED_TEXT_COLOR
          : DEFAULT_TEXT_COLOR;

    const valueColor = textHighlighted ? 'text-network-primary-20' : textColor;

    const iconColor = highlighted
        ? inverted
            ? HIGHLIGHTED_TEXT_COLOR
            : HIGHLIGHTED_TEXT_COLOR
        : inverted
          ? ICON_COLOR_INVERTED
          : ICON_COLOR_DEFAULT;

    const lineNumberLayout = isMultiLine ? 'flex-col items-start' : 'flex-row items-baseline';
    const iconLayout =
        size === CardSize.Small ? (isMultiLine ? 'items-start ' : 'items-center') : '';
    const wrapperBaseClasses = clsx(
        'rounded-3xl w-full flex',
        size === CardSize.Default ? 'min-h-[180px]' : '',
        bgColors,
    );

    const contentClasses = clsx(
        'flex flex-col items-start',
        size === CardSize.Default ? 'justify-between' : '',
        textColor,
    );

    return icon ? (
        <div className={clsx('flex flex-row justify-between p-6 ', wrapperBaseClasses, iconLayout)}>
            <div className={contentClasses}>
                {label && (
                    <p className={clsx('text-label-sm', size === CardSize.Small ? 'pb-3' : '')}>
                        {label}
                    </p>
                )}

                <div className={clsx('flex gap-1', lineNumberLayout)}>
                    <p className={clsx(VALUE_TEXT_SIZE[textSize], valueColor)}>{value}</p>
                    {supportingText && (
                        <p className={clsx(SUPPORTING_TEXT_SIZE[textSize])}>{supportingText}</p>
                    )}
                </div>
            </div>
            <div className={clsx('[&_svg]:h-12 [&_svg]:w-12', iconColor)}>{icon}</div>
        </div>
    ) : (
        <div className={clsx(wrapperBaseClasses, 'py-6 pl-6 pr-18 overflow-hidden')}>
            <div className={clsx(contentClasses)}>
                <p className={clsx('text-label-sm', size === CardSize.Small ? 'pb-3' : '')}>
                    {label}
                </p>
                <div className={clsx('flex gap-1', lineNumberLayout)}>
                    <p className={clsx(VALUE_TEXT_SIZE[textSize], valueColor)}>{value}</p>
                    {supportingText && (
                        <p className={clsx(SUPPORTING_TEXT_SIZE[textSize])}>{supportingText}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
