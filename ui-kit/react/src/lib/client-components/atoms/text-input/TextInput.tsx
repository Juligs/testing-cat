import React, { useState, forwardRef } from 'react';
import { TextInputSize } from './textInput.enums';
import {
    INPUT_BORDER_LARGE_DEFAULT,
    INPUT_BORDER_LARGE_INVERTED,
    INPUT_PADDINGS,
    INPUT_BORDER_SMALL_DEFAULT,
    INPUT_BORDER_SMALL_INVERTED,
    INPUT_BORDER_SMALL_PLACEHOLDER_INVERTED,
    INPUT_BORDER_SMALL_PLACEHOLDER,
    INPUT_BORDER_ERROR,
    INPUT_BORDER_DISABLED,
    INPUT_BORDER_DISABLED_INVERTED,
} from './textInput.constants';
import { clsx } from 'clsx';
import { Close } from '@repo/icons';

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    inverted?: boolean;
    size?: TextInputSize;
    trailingIcon?: boolean;
    label?: string;
    caption?: string;
    error?: boolean;
    onDeleteClick?: () => void;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
    {
        inverted,
        size = TextInputSize.Default,
        trailingIcon,
        label,
        caption,
        id,
        onChange,
        placeholder,
        error,
        disabled,
        onDeleteClick,
        value,
        ...inputProps
    },
    ref,
) {
    const isControlled = value !== undefined;

    const [inputValue, setInputValue] = useState(value ?? '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
            setInputValue(event.target.value);
        }
        onChange?.(event);
    };

    const errorBorderColor = error ? INPUT_BORDER_ERROR[size] : '';

    const captionColor = error
        ? inverted
            ? 'text-error-30'
            : 'text-error-30'
        : inverted
          ? 'text-medium-inverted'
          : 'text-medium';

    const textColorMedium = disabled
        ? 'text-medium-inverted'
        : inverted
          ? 'text-medium-inverted'
          : 'text-medium';

    const textDisabled = 'text-medium-inverted';

    const inputTextColor = disabled
        ? 'text-medium-inverted'
        : inverted
          ? 'text-darkest-inverted'
          : 'text-darkest';

    const hasText = isControlled
        ? (typeof value === 'string' || Array.isArray(value)) && value.length > 0
        : (typeof inputValue === 'string' || Array.isArray(inputValue)) && inputValue.length > 0;

    const labelFocusColorClasses = inverted
        ? 'peer-focus:text-light-inverted peer-not-placeholder-shown:text-light-inverted'
        : 'peer-focus:text-light peer-not-placeholder-shown:text-light';

    const focusBorder = error
        ? ''
        : inverted
          ? 'focus-within:focus-border-color-input-inverted'
          : 'focus-within:focus-border-color-input-default';

    const borderColorSmall = placeholder
        ? inverted
            ? INPUT_BORDER_SMALL_PLACEHOLDER_INVERTED
            : INPUT_BORDER_SMALL_PLACEHOLDER
        : inverted
          ? INPUT_BORDER_SMALL_INVERTED
          : INPUT_BORDER_SMALL_DEFAULT;

    const borderColors =
        size === TextInputSize.Large
            ? inverted
                ? INPUT_BORDER_LARGE_INVERTED
                : INPUT_BORDER_LARGE_DEFAULT
            : borderColorSmall;

    const disabledBorder = inverted
        ? INPUT_BORDER_DISABLED_INVERTED[size]
        : INPUT_BORDER_DISABLED[size];

    const placeholderTextColor =
        size === TextInputSize.Large
            ? inverted
                ? 'peer-placeholder-shown:placeholder:text-darkest-inverted peer-placeholder-shown:placeholder:text-opacity-40'
                : 'peer-placeholder-shown:placeholder:text-darkest peer-placeholder-shown:placeholder:text-opacity-40'
            : inverted
              ? 'peer-placeholder-shown:placeholder:text-medium-inverted peer-placeholder-shown:placeholder:text-opacity-40'
              : 'peer-placeholder-shown:placeholder:text-medium peer-placeholder-shown:placeholder:text-opacity-40';

    return (
        <div className="flex flex-col gap-2 w-full">
            {size !== TextInputSize.Large && label && (
                <label
                    htmlFor={id ?? undefined}
                    className={clsx('text-label-md', disabled ? textDisabled : textColorMedium)}
                >
                    {label}
                </label>
            )}
            <div
                className={clsx(
                    'relative flex items-center text-input w-full',
                    focusBorder,
                    disabled ? disabledBorder : error ? errorBorderColor : borderColors,
                )}
            >
                <input
                    {...inputProps}
                    id={id}
                    type="text"
                    value={isControlled ? value : inputValue}
                    onChange={handleChange}
                    placeholder={disabled ? placeholder || '' : placeholder || ''}
                    ref={ref}
                    className={clsx(
                        INPUT_PADDINGS[size],
                        'peer w-full bg-transparent outline-none text-title-sm transition-all duration-200 pr-12',
                        !!placeholder && !disabled ? placeholderTextColor : '',
                        inputTextColor,
                        size === TextInputSize.Large && label
                            ? placeholder
                                ? 'mt-4 placeholder-shown:hover:mt-0 placeholder-shown:focus:mt-0 not-placeholder-shown:focus:mt-0'
                                : 'mt-4'
                            : '',
                    )}
                    disabled={disabled}
                />

                {size === TextInputSize.Large && label && (
                    <label
                        htmlFor={id ?? undefined}
                        className={clsx(
                            'absolute left-6 w-full px-0 truncate text-title-sm pointer-events-none transition-all duration-200 ease-in-out origin-[0_0]',
                            textColorMedium,
                            placeholder
                                ? 'top-2.5 scale-95 !text-label-md'
                                : 'top-1/2 -translate-y-1/2 scale-95 text-label-md',
                            !placeholder && [
                                'peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:scale-95 peer-focus:text-label-md',
                                'peer-not-placeholder-shown:top-2.5 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:scale-95 peer-not-placeholder-shown:text-label-md',
                            ],

                            placeholder && [
                                '!peer-placeholder-shown:peer-hover:opacity-0 !peer-placeholder-shown:peer-hover:pointer-events-none',
                                'peer-placeholder-shown:peer-hover:opacity-0 peer-placeholder-shown:peer-hover:pointer-events-none',
                                'peer-focus:opacity-0 peer-focus:pointer-events-none',
                                'peer-placeholder-shown:opacity-100 peer-placeholder-shown:pointer-events-auto',
                            ],
                            disabled ? '' : labelFocusColorClasses,
                        )}
                    >
                        {label}
                    </label>
                )}

                {(trailingIcon || hasText) && (
                    <div
                        className={clsx(
                            'absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer',
                            inputTextColor,
                        )}
                        onClick={() => {
                            if (onDeleteClick) {
                                onDeleteClick();
                            } else if (!isControlled) {
                                setInputValue('');
                            }
                        }}
                    >
                        <Close className="h-6 w-6" />
                    </div>
                )}
            </div>

            {caption && (
                <p className={clsx('text-label-md px-3', disabled ? textDisabled : captionColor)}>
                    {caption}
                </p>
            )}
        </div>
    );
});
