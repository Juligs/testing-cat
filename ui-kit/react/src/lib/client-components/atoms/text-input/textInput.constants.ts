import { TextInputSize } from './textInput.enums';

export const INPUT_BORDER_LARGE_DEFAULT = 'border-2 border-transparency-black-16';
export const INPUT_BORDER_LARGE_INVERTED = 'border-2 border-transparency-white-16';

export const INPUT_BORDER_DISABLED: Record<TextInputSize, string> = {
    [TextInputSize.Default]: 'border border-solid text-transparency-black-16',
    [TextInputSize.Large]: 'border-2 border-transparency-black-16',
};

export const INPUT_BORDER_DISABLED_INVERTED: Record<TextInputSize, string> = {
    [TextInputSize.Default]: 'border border-solid text-transparency-white-16',
    [TextInputSize.Large]: 'border-2 border-transparency-white-16',
};

export const INPUT_PADDINGS: Record<TextInputSize, string> = {
    [TextInputSize.Default]: 'py-3 px-4',
    [TextInputSize.Large]: 'py-3 px-6',
};

export const INPUT_BORDER_ERROR: Record<TextInputSize, string> = {
    [TextInputSize.Default]: 'border border-solid text-error-30',
    [TextInputSize.Large]: 'border-2 border-error-30',
};

export const INPUT_BORDER_SMALL_DEFAULT = 'border border-solid text-transparency-black-32';
export const INPUT_BORDER_SMALL_PLACEHOLDER = 'border border-solid text-transparency-black-16';

export const INPUT_BORDER_SMALL_INVERTED = 'border border-solid text-transparency-white-32';
export const INPUT_BORDER_SMALL_PLACEHOLDER_INVERTED =
    'border border-solid text-transparency-white-16';
