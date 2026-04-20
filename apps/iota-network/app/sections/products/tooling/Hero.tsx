'use client';

import { HeroAlignment, Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_TOOLING_CONTENT,
    HERO_TOOLING_BG,
    HERO_TOOLING_BUTTONS,
    HERO_TOOLING_ANCHORLINKS,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_TOOLING_CONTENT}
                background={HERO_TOOLING_BG}
                anchorLinks={HERO_TOOLING_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                buttons={HERO_TOOLING_BUTTONS}
                layout={HeroAlignment.Left}
            />
        </section>
    );
}
