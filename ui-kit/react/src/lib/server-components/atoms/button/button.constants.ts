import { ButtonSize, ButtonVariant } from './button.enums';

export const BUTTON_PADDINGS_MAP: Record<ButtonSize, string> = {
    [ButtonSize.Small]: 'py-1 px-3',
    [ButtonSize.Medium]: 'py-2 px-4',
    [ButtonSize.Large]: 'py-3 px-4',
};

export const INVERTED_TEXT_COLOR_VARIANTS = [ButtonVariant.Secondary, ButtonVariant.Ghost];

export const DEFAULT_TEXT_COLOR = 'btn-text-color-default';
export const INVERTED_TEXT_COLOR = 'btn-text-color-inverted';
