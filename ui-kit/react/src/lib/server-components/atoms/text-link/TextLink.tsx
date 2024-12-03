import clsx from 'clsx';
import { TextLinkSize } from './textLink.enums';
import {
    TEXT_SIZE,
    TEXT_COLOR_DEFAULT,
    TEXT_COLOR_DEFAULT_INVERTED,
    TEXT_COLOR_ICON,
    TEXT_COLOR_ICON_INVERTED,
    UNDERLINE_COLOR_DEFAULT,
    UNDERLINE_COLOR_INVERTED,
    UNDERLINE_HOVER_COLOR_DEFAULT,
    UNDERLINE_HOVER_COLOR_INVERTED,
    CLASS_TEXT_HOVER_COLOR,
} from './textLink.constants';
import { LineArrowSmall } from '@repo/icons';

interface TextLinkProps {
    /**
     * the text of the link
     */
    text: string;
    /**
     *  inverted colors
     */
    inverted?: boolean;
    /**
     *  custom icon
     */
    icon?: React.ReactNode;
    /**
     * dafault icon
     */
    showIcon?: boolean;
    /**
     * underline the text
     */
    underline?: boolean;
    /**
     * size of the text
     */
    size?: TextLinkSize;
}

export function TextLink({
    text,
    inverted,
    icon,
    underline = false,
    size = TextLinkSize.Small,
    showIcon = false,
}: TextLinkProps) {
    const underlineColor = inverted ? UNDERLINE_COLOR_INVERTED : UNDERLINE_COLOR_DEFAULT;

    const underlineHoverColor = inverted
        ? UNDERLINE_HOVER_COLOR_INVERTED
        : UNDERLINE_HOVER_COLOR_DEFAULT;

    const textColorHover = underline ? '' : CLASS_TEXT_HOVER_COLOR;

    const textColor = underline
        ? inverted
            ? TEXT_COLOR_DEFAULT_INVERTED
            : TEXT_COLOR_DEFAULT
        : icon || showIcon
          ? inverted
              ? TEXT_COLOR_ICON_INVERTED
              : TEXT_COLOR_ICON
          : inverted
            ? TEXT_COLOR_DEFAULT_INVERTED
            : TEXT_COLOR_DEFAULT;

    return (
        <div
            className={clsx(
                'relative flex items-center gap-2 cursor-pointer group max-w-max',
                textColorHover,
                textColor,
                TEXT_SIZE[size],
            )}
        >
            {text}
            {underline && (
                <>
                    <span
                        className={clsx(
                            'absolute -bottom-0.5 left-0 w-full h-[1px]',
                            underlineColor,
                        )}
                    ></span>
                    <span
                        className={clsx(
                            'absolute -bottom-0.5 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full',
                            underlineHoverColor,
                        )}
                    ></span>
                </>
            )}

            {showIcon && !underline && !icon && (
                <span className="transform group-hover:translate-x-1 transition-transform duration-700">
                    <LineArrowSmall />
                </span>
            )}

            {icon && !underline && !showIcon && (
                <span className="transform group-hover:translate-x-1 transition-transform duration-700">
                    {icon}
                </span>
            )}
        </div>
    );
}
