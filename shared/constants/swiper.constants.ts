import { BREAKPOINTS, ScreenSize } from 'react-ui-kit';

export const SLIDES_IN_DESKTOP = 3;
export const SLIDES_IN_TABLET = 2;
export const SLIDES_IN_MOBILE = 1;
export const SPACE_BETWEEN_SLIDES = 24;

export const SWIPER_BREAKPOINTS = {
    [BREAKPOINTS[ScreenSize.Xs]]: {
        slidesPerView: SLIDES_IN_TABLET,
        spaceBetween: SPACE_BETWEEN_SLIDES,
    },
    [BREAKPOINTS[ScreenSize.Sm]]: {
        slidesPerView: SLIDES_IN_DESKTOP,
        spaceBetween: SPACE_BETWEEN_SLIDES,
    },
};
