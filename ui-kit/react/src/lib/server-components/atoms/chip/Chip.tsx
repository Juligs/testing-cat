import { clsx } from 'clsx';
import { ChipSize } from './chip.enums';
import {
    DEFAULT_TEXT_COLOR,
    LIGHT_TEXT_COLOR,
    DEFAULT_BG_COLOR,
    INVERTED_BG_COLOR,
    SELECTED_BG_COLOR,
    SELECTED_BG_COLOR_AND_INVERTED,
    LABEL_SIZE_CLASS,
} from './chip.contants';
import { Close } from '@repo/icons';

interface ChipProps {
    /**
     * Chip handle selected state
     */
    selected?: boolean;
    /**
     * Show closing icon
     */
    showClosingIcon?: boolean;
    /**
     * Are colors inverted
     */
    inverted?: boolean;
    /**
     * The label of the chip.
     */
    label: string;
    /**
     * The click handler.
     */
    onClick?: () => void;
    /**
     * The disabled state.
     */
    disabled?: boolean;
    /**
     * The close click handler.
     */
    size?: ChipSize;
    /**
     * Chip size
     */
    onCloseClick?: () => void;
}
export function Chip({
    selected,
    showClosingIcon,
    inverted,
    onClick,
    disabled,
    label = 'Label',
    size = ChipSize.Default,
    onCloseClick,
}: ChipProps) {
    const labelSize = LABEL_SIZE_CLASS[size];
    const bgColors = !selected
        ? inverted
            ? INVERTED_BG_COLOR
            : DEFAULT_BG_COLOR
        : inverted
          ? SELECTED_BG_COLOR_AND_INVERTED
          : SELECTED_BG_COLOR;

    const textColors = !selected
        ? inverted
            ? LIGHT_TEXT_COLOR
            : DEFAULT_TEXT_COLOR
        : inverted
          ? LIGHT_TEXT_COLOR
          : LIGHT_TEXT_COLOR;

    return (
        <div
            onClick={onClick}
            className={clsx(
                'chip chip-bg-color state-layer inline-flex items-center justify-center gap-x-2 py-1.5 select-none',
                labelSize,
                showClosingIcon ? 'px-2' : 'px-3',
                bgColors,
                textColors,
                disabled && 'opacity-60',
                onClick && !disabled ? 'cursor-pointer' : 'cursor-default',
                {
                    neutral: selected,
                    inverted: !selected && inverted,
                },
            )}
        >
            {label}
            {showClosingIcon && (
                <button onClick={onCloseClick}>
                    <Close />
                </button>
            )}
        </div>
    );
}
