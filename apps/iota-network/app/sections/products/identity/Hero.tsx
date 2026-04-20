'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_IDENTITY_CONTENT,
    HERO_IDENTITY_BG,
    HERO_IDENTITY_BUTTONS,
    HERO_IDENTITY_ANCHORLINKS,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_IDENTITY_CONTENT}
                background={HERO_IDENTITY_BG}
                anchorLinks={HERO_IDENTITY_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                buttons={HERO_IDENTITY_BUTTONS}
            />
        </section>
    );
}
