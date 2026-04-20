'use client';

import { HeroAlignment, Hero as HeroComponent } from '@repo/shared/components';
import { HERO_EVM_CONTENT, HERO_EVM_BG, HERO_EVM_BUTTONS, HERO_EVM_ANCHORLINKS } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_EVM_CONTENT}
                background={HERO_EVM_BG}
                layout={HeroAlignment.Left}
                anchorLinks={HERO_EVM_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                buttons={HERO_EVM_BUTTONS}
            />
        </section>
    );
}
