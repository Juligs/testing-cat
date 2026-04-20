import { clsx } from 'clsx';
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
    /**
     * icon position
     */
    iconPosition?: 'left' | 'right';
    /**
     * whether the text should be highlighted
     */
    highlighted?: boolean;
}

export function TextLink({
    text,
    inverted,
    icon,
    underline = false,
    size = TextLinkSize.Small,
    showIcon = false,
    iconPosition = 'right',
    highlighted,
}: TextLinkProps) {
    const underlineColor = inverted ? UNDERLINE_COLOR_INVERTED : UNDERLINE_COLOR_DEFAULT;
    const textColorHover = underline ? '' : CLASS_TEXT_HOVER_COLOR;
    const underlineHoverColor = inverted
        ? UNDERLINE_HOVER_COLOR_INVERTED
        : UNDERLINE_HOVER_COLOR_DEFAULT;

    const textColor = (() => {
        const needsIconColor = Boolean(
            !underline && (icon || showIcon || highlighted) && iconPosition === 'right',
        );
        if (needsIconColor) return inverted ? TEXT_COLOR_ICON_INVERTED : TEXT_COLOR_ICON;
        return inverted ? TEXT_COLOR_DEFAULT_INVERTED : TEXT_COLOR_DEFAULT;
    })();

    const iconBaseColor =
        iconPosition === 'left' ? (inverted ? 'text-darkest-inverted' : 'text-darkest') : '';

    const iconClasses = clsx(
        iconPosition === 'right' &&
            'transform transition-transform ease-in duration-300 group-hover:translate-x-1',
        iconBaseColor,
        iconPosition === 'left' &&
            'group-hover:text-network-primary-40 [&_svg]:h-[32px] [&_svg]:w-[32px]',
    );

    const iconElement = icon ? (
        <span className={iconClasses}>{icon}</span>
    ) : showIcon ? (
        <span className={iconClasses}>
            <LineArrowSmall />
        </span>
    ) : null;

    return (
        <div
            className={clsx(
                'relative flex items-center gap-2 cursor-pointer group max-w-max',
                textColorHover,
                textColor,
                TEXT_SIZE[size],
                iconPosition === 'left' && 'flex-row-reverse',
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
                    />
                    <span
                        className={clsx(
                            'absolute -bottom-0.5 left-0 w-0 h-[1px] transition-all ease-in duration-500 group-hover:w-full',
                            underlineHoverColor,
                        )}
                    />
                </>
            )}

            {!underline && iconElement}
        </div>
    );
}
