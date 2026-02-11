'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_CONSENSUS_CONTENT, HERO_CONSENSUS_BG, HERO_CONSENSUS_ANCHORLINKS } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_CONSENSUS_CONTENT}
                background={HERO_CONSENSUS_BG}
                anchorLinks={HERO_CONSENSUS_ANCHORLINKS}
                isAnchorLinksDesktopInverted
            />
        </section>
    );
}
