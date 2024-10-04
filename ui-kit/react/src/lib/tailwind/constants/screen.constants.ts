import { ScreenSize } from '../enums';
import { getTailwindScreens, pxToRem } from '../helpers';

type ScreenBreakpoints = Record<ScreenSize, number>;

export const BREAKPOINTS: ScreenBreakpoints = {
    [ScreenSize.Xs]: 712,
    [ScreenSize.Sm]: 1080,
    [ScreenSize.Md]: 1200,
    [ScreenSize.Lg]: 1440,
    [ScreenSize.Xl]: 1920,
};

export const SCREENS = getTailwindScreens(BREAKPOINTS);

export const SCREEN_PADDINGS = {
    DEFAULT: pxToRem(16),
    xs: pxToRem(16),
    sm: pxToRem(60),
    md: pxToRem(60),
    lg: pxToRem(120),
    xl: pxToRem(240),
};
