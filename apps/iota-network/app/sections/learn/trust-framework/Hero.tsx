'use client';

import Link from 'next/link';
import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_TRUST_FRAMEWORK_ANCHORLINKS,
    HERO_TRUST_FRAMEWORK_CONTENT,
    HERO_TRUST_FRAMEWORK_BG,
    HERO_TRUST_FRAMEWORK_BUTTON,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_TRUST_FRAMEWORK_CONTENT}
                background={HERO_TRUST_FRAMEWORK_BG}
                anchorLinks={HERO_TRUST_FRAMEWORK_ANCHORLINKS}
                buttons={HERO_TRUST_FRAMEWORK_BUTTON}
                linkComponent={Link}
                isAnchorLinksDesktopInverted
            />
        </section>
    );
}
