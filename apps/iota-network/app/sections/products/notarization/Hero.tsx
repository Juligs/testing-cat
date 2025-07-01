'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_NOTARIZATION_CONTENT,
    HERO_NOTARIZATION_BG,
    HERO_NOTARIZATION_BUTTONS,
    HERO_NOTARIZATION_ANCHORLINKS,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_NOTARIZATION_CONTENT}
                background={HERO_NOTARIZATION_BG}
                anchorLinks={HERO_NOTARIZATION_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                buttons={HERO_NOTARIZATION_BUTTONS}
                linkComponent={Link}
            />
        </section>
    );
}
