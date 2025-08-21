'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_TRUST_HIERARCHIES_CONTENT,
    HERO_TRUST_HIERARCHIES_BG,
    HERO_TRUST_HIERARCHIES_BUTTONS,
    HERO_TRUST_HIERARCHIES_ANCHORLINKS,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_TRUST_HIERARCHIES_CONTENT}
                background={HERO_TRUST_HIERARCHIES_BG}
                anchorLinks={HERO_TRUST_HIERARCHIES_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                buttons={HERO_TRUST_HIERARCHIES_BUTTONS}
                linkComponent={Link}
            />
        </section>
    );
}
