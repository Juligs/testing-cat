'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_BUILDING_TOGETHER_CONTENT, HERO_BUILDING_TOGETHER_BG } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_BUILDING_TOGETHER_CONTENT}
                background={HERO_BUILDING_TOGETHER_BG}
                isAnchorLinksDesktopInverted
            />
        </section>
    );
}
