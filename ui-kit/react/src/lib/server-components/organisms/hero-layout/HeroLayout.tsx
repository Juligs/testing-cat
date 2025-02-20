import { PropsWithChildren } from 'react';

import clsx from 'clsx';
import { HERO_GRADIENT_BG_COLOR, HERO_TYPE } from './hero.contants';
import { HeroType } from './hero.enums';
interface HeroProps {
    type?: HeroType;
    hasGradientBackground?: boolean;
}
export function HeroLayout({
    children,
    type = HeroType.Default,
    hasGradientBackground,
}: PropsWithChildren<HeroProps>) {
    const backgroundGradient = hasGradientBackground ? HERO_GRADIENT_BG_COLOR : '';
    const heroTypeLayout = HERO_TYPE[type];
    return (
        <div
            className={clsx(
                'w-full flex-1 flex flex-col h-full min-h-full relative z-0',
                backgroundGradient,
                heroTypeLayout,
            )}
        >
            <div className="container flex-1 h-full flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    );
}
