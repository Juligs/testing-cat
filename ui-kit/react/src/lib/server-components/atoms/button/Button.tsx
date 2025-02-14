import {
    BUTTON_PADDINGS_MAP,
    BUTTON_PADDING_ONLY_ICON_MAP,
    ICON_SIZE_MAP,
    TEXT_SIZE_MAP,
    TEXT_COLOR,
    TEXT_COLOR_INVERTED,
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
    /**
     * Arial label for the button
     */
    arialLabel?: string;
}
export function Button({
    type = 'button',
    fullWidth,
    size = ButtonSize.Medium,
    variant = ButtonVariant.Primary,
    inverted,
    text,
    icon,
    arialLabel,
    ...buttonProps
}: ButtonProps) {
    const textColor = inverted ? TEXT_COLOR_INVERTED[variant] : TEXT_COLOR[variant];
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
            aria-label={arialLabel || (isOnlyIcon ? 'Icon button' : text)}
            title={arialLabel || (isOnlyIcon ? 'Icon button' : text)}
            aria-labelledby={arialLabel || (isOnlyIcon ? 'Icon button' : text)}
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
