'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import {
    HERO_REGULATORY_AFFAIRS_CONTENT,
    HERO_REGULATORY_AFFAIRS_BG,
    HERO_REGULATORY_AFFAIRS_ANCHORLINKS,
} from './constants';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_REGULATORY_AFFAIRS_CONTENT}
                linkComponent={Link}
                background={HERO_REGULATORY_AFFAIRS_BG}
                anchorLinks={HERO_REGULATORY_AFFAIRS_ANCHORLINKS}
            />
        </section>
    );
}
