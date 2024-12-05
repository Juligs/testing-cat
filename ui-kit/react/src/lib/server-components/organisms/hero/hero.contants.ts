import { HeroSize } from './hero.enums';

export const HERO_GRADIENT_BG_COLOR = 'bg-color-gradient';

export const HERO_SIZE = {
    [HeroSize.Large]: 'py-30 px-4 lg:py-30 lg:px-60',
    [HeroSize.Default]: 'py-30 px-4 lg:py-20 lg:px-60',
} as const;
