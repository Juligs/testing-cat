import {
    BUTTON_PADDINGS_MAP,
    DEFAULT_TEXT_COLOR,
    INVERTED_TEXT_COLOR,
    INVERTED_TEXT_COLOR_VARIANTS,
} from './button.constants';
import { ButtonSize, ButtonVariant } from './button.enums';
import clsx from 'clsx';

type HTMLButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

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
}

export function Button({
    children,
    type = 'button',
    fullWidth,
    size = ButtonSize.Medium,
    variant = ButtonVariant.Primary,
    inverted,
    ...buttonProps
}: ButtonProps) {
    const textColor =
        INVERTED_TEXT_COLOR_VARIANTS.includes(variant) && inverted
            ? INVERTED_TEXT_COLOR
            : DEFAULT_TEXT_COLOR;
    return (
        <button
            type={type}
            {...buttonProps}
            className={clsx('btn state-layer', variant, {
                'w-full': fullWidth,
                'opacity-50': buttonProps.disabled,
            })}
        >
            <div className={clsx(BUTTON_PADDINGS_MAP[size])}>
                <div
                    className={clsx(
                        'p-1 flex flex-row items-center justify-center gap-x-3 text-label-md transition-colors',
                        textColor,
                    )}
                >
                    {children}
                </div>
            </div>
        </button>
    );
}
