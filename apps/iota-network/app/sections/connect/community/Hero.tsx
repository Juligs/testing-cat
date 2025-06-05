'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_COMMUNITY_CONTENT, HERO_COMMUNITY_BG, HERO_COMMUNITY_ANCHORLINKS } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_COMMUNITY_CONTENT}
                background={HERO_COMMUNITY_BG}
                anchorLinks={HERO_COMMUNITY_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                linkComponent={Link}
            />
        </section>
    );
}
