'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_GRANTS_ANCHORLINKS,
    HERO_GRANTS_INFO,
    HERO_GRANTS_BUTTON,
    HERO_GRANTS_BG,
} from '@lib/constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HeroType } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_GRANTS_INFO}
                background={HERO_GRANTS_BG}
                anchorLinks={HERO_GRANTS_ANCHORLINKS}
                buttons={HERO_GRANTS_BUTTON}
                isAnchorLinksDesktopInverted
                type={HeroType.Large}
            />
        </section>
    );
}
