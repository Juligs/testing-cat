import {
    DEFAULT_TEXT_COLOR,
    LIGHT_TEXT_COLOR,
    DEFAULT_BG_COLOR,
    LIGHT_BG_COLOR,
    INVERTED_LIGHT_BG_COLOR,
    INVERTED_BG_COLOR,
} from './badge.contants';
import { clsx } from 'clsx';

interface BadgeProps {
    /**
     * Name of the badge
     */
    label: string;
    /**
     * inverted colors
     */
    inverted?: boolean;
    /**
     * Highlighted badge
     */
    highlighted?: boolean;
}

export function Badge({ label = 'Badge', inverted, highlighted }: BadgeProps) {
    const bgColors = highlighted
        ? inverted
            ? INVERTED_LIGHT_BG_COLOR
            : LIGHT_BG_COLOR
        : inverted
          ? INVERTED_BG_COLOR
          : DEFAULT_BG_COLOR;

    const textColor = highlighted
        ? inverted
            ? LIGHT_TEXT_COLOR
            : LIGHT_TEXT_COLOR
        : inverted
          ? LIGHT_TEXT_COLOR
          : DEFAULT_TEXT_COLOR;

    return (
        <div
            className={clsx(
                'badge inline-flex items-center justify-center px-2 py-1 text-label-sm',
                bgColors,
                textColor,
            )}
        >
            {label}
        </div>
    );
}
