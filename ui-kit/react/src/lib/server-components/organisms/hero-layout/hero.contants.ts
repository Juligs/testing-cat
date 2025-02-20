import { HeroType } from './hero.enums';

export const HERO_GRADIENT_BG_COLOR = 'bg-color-gradient';

export const HERO_TYPE = {
    [HeroType.Large]: 'py-30',
    [HeroType.Default]: 'py-20',
} as const;
