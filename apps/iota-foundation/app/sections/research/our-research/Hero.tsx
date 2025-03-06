'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { HERO_OUR_RESEARCH_CONTENT, HERO_OUR_RESEARCH_BG } from './constants';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_OUR_RESEARCH_CONTENT}
                linkComponent={Link}
                background={HERO_OUR_RESEARCH_BG}
            />
        </section>
    );
}
