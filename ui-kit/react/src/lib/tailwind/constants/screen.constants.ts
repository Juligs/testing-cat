import { ScreenSize } from '../enums';
import { getTailwindScreens, pxToRem } from '../helpers';

type ScreenBreakpoints = Record<ScreenSize, number>;

export const BREAKPOINTS: ScreenBreakpoints = {
    [ScreenSize.Sm]: 768,
    [ScreenSize.Md]: 1024,
    [ScreenSize.Lg]: 1400,
    [ScreenSize.Xl]: 1920,
};

export const SCREENS = getTailwindScreens(BREAKPOINTS);

export const SCREEN_PADDINGS = {
    DEFAULT: pxToRem(24),
    md: pxToRem(48),
    lg: pxToRem(120),
    xl: pxToRem(240),
};
