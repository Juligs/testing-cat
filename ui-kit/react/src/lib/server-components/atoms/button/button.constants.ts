import { ButtonSize, ButtonVariant, ButtonRadius } from './button.enums';

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

export const TEXT_COLOR: Record<ButtonVariant, string> = {
    [ButtonVariant.Primary]: 'btn-text-color-primary',
    [ButtonVariant.Secondary]: 'btn-text-color-default',
    [ButtonVariant.Ghost]: 'btn-text-color-default',
};
export const TEXT_COLOR_INVERTED: Record<ButtonVariant, string> = {
    [ButtonVariant.Primary]: 'btn-text-color-primary',
    [ButtonVariant.Secondary]: 'btn-text-color-inverted',
    [ButtonVariant.Ghost]: 'btn-text-color-inverted',
};

export const BUTTON_BG_COLOR: Record<ButtonVariant, string> = {
    [ButtonVariant.Primary]: 'btn-bg-primary',
    [ButtonVariant.Secondary]: 'btn-bg-secondary',
    [ButtonVariant.Ghost]: 'btn-bg-ghost',
};

export const BUTTON_BG_COLOR_INVERTED: Record<ButtonVariant, string> = {
    ...BUTTON_BG_COLOR,
    [ButtonVariant.Secondary]: 'btn-bg-secondary-inverted',
};

export const BUTTON_BORDER_RADIUS: Record<ButtonRadius, string> = {
    [ButtonRadius.Default]: '',
    [ButtonRadius.Rounded]: 'btn-border-radius-full',
};
