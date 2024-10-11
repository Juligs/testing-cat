import {
    BUTTON_PADDINGS_MAP,
    BUTTON_PADDING_ONLY_ICON_MAP,
    ICON_SIZE_MAP,
    TEXT_SIZE_MAP,
    DEFAULT_TEXT_COLOR,
    INVERTED_TEXT_COLOR,
    INVERTED_TEXT_COLOR_VARIANTS,
} from './button.constants';
import { ButtonSize, ButtonVariant } from './button.enums';
import clsx from 'clsx';

type HTMLButtonProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
>;

interface ButtonProps extends HTMLButtonProps {
    /**
     * The size of the button
     */
    size?: ButtonSize;
    /**
     * Whether to apply the `w-full` class to the button
     */
    fullWidth?: boolean;
    /**
     * The variant of the button
     */
    variant?: ButtonVariant;
    /**
     * Are colors inverted
     */
    inverted?: boolean;
    /**
     * Text displayed on the button
     */
    text?: string;
    /**
     * Icon displayed on the button
     */
    icon?: React.ReactNode;
}

export function Button({
    type = 'button',
    fullWidth,
    size = ButtonSize.Medium,
    variant = ButtonVariant.Primary,
    inverted,
    text,
    icon,
    ...buttonProps
}: ButtonProps) {
    const textColor =
        INVERTED_TEXT_COLOR_VARIANTS.includes(variant) && inverted
            ? INVERTED_TEXT_COLOR
            : DEFAULT_TEXT_COLOR;
    const isOnlyIcon = Boolean(!text && icon);
    const isSmallButton = ButtonSize.Small === size;
    return (
        <button
            type={type}
            {...buttonProps}
            className={clsx('btn state-layer', variant, {
                'w-full': fullWidth,
                'opacity-50': buttonProps.disabled,
            })}
        >
            <div
                className={clsx(
                    isOnlyIcon ? BUTTON_PADDING_ONLY_ICON_MAP[size] : BUTTON_PADDINGS_MAP[size],
                )}
            >
                <div
                    className={clsx(
                        'flex flex-row items-center justify-center gap-x-3 transition-colors',
                        TEXT_SIZE_MAP[size],
                        ICON_SIZE_MAP[size],
                        isOnlyIcon && isSmallButton ? 'p-0.5' : 'p-1',
                        textColor,
                    )}
                >
                    {text && <span>{text}</span>}
                    {icon}
                </div>
            </div>
        </button>
    );
}
