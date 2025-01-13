import React from 'react';

import { HERO_GRADIENT_BG_COLOR, HERO_SIZE } from './hero.contants';
import { HeroSize } from './hero.enums';
import clsx from 'clsx';
interface HeroProps {
    size?: HeroSize;
    hasGradientBackground?: boolean;
}
export function HeroLayout({
    children,
    size = HeroSize.Default,
    hasGradientBackground,
}: React.PropsWithChildren<HeroProps>) {
    const heroSizeLayout = HERO_SIZE[size];
    const backgroundGradient = hasGradientBackground ? HERO_GRADIENT_BG_COLOR : '';
    return (
        <div
            className={clsx(
                'w-full flex-1 flex flex-col h-full min-h-full relative z-0',
                backgroundGradient,
                heroSizeLayout,
            )}
        >
            <div className="container flex-1 h-full flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}
