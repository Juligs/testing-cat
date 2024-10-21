import { ChipSize } from './chip.enums';

export const DEFAULT_TEXT_COLOR = 'btn-text-color-default';
export const LIGHT_TEXT_COLOR = 'btn-text-color-inverted';
export const DEFAULT_BG_COLOR = 'chip-bg-color';
export const INVERTED_BG_COLOR = 'chip-bg-color-inverted';
export const SELECTED_BG_COLOR = 'chip-bg-color-selected';
export const SELECTED_BG_COLOR_AND_INVERTED = 'chip-bg-color-selected-inverted';

export const LABEL_SIZE_CLASS: Record<ChipSize, string> = {
    [ChipSize.Default]: 'text-label-sm',
    [ChipSize.Large]: 'text-label-lg',
};
