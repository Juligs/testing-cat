import { ButtonSize, ButtonVariant } from './button.enums';

export const BUTTON_PADDINGS_MAP: Record<ButtonSize, string> = {
    [ButtonSize.Small]: 'py-1 px-2',
    [ButtonSize.Medium]: 'py-2 px-4',
    [ButtonSize.Large]: 'py-3 px-4',
};

export const BUTTON_PADDING_ONLY_ICON_MAP: Record<ButtonSize, string> = {
    [ButtonSize.Small]: 'p-2',
    [ButtonSize.Medium]: 'p-2',
    [ButtonSize.Large]: 'p-4',
};

export const ICON_SIZE_MAP: Record<ButtonSize, string> = {
    [ButtonSize.Small]: '[&_svg]:w-4 [&_svg]:h-4',
    [ButtonSize.Medium]: '[&_svg]:w-[20px] [&_svg]:h-[20px]',
    [ButtonSize.Large]: '[&_svg]:w-6 [&_svg]:h-6',
};

export const TEXT_SIZE_MAP: Record<ButtonSize, string> = {
    [ButtonSize.Small]: 'text-label-sm',
    [ButtonSize.Medium]: 'text-label-md',
    [ButtonSize.Large]: 'text-label-lg',
};

export const INVERTED_TEXT_COLOR_VARIANTS = [ButtonVariant.Secondary, ButtonVariant.Ghost];
export const DEFAULT_TEXT_COLOR = 'btn-text-color-default';
export const INVERTED_TEXT_COLOR = 'btn-text-color-inverted';
