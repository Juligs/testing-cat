'use client';

import Link from 'next/link';
import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_BUSINESS_ANCHORLINKS, HERO_BUSINESS_CONTENT, HERO_BUSINESS_BG } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_BUSINESS_CONTENT}
                background={HERO_BUSINESS_BG}
                anchorLinks={HERO_BUSINESS_ANCHORLINKS}
                linkComponent={Link}
                isAnchorLinksDesktopInverted
            />
        </section>
    );
}
