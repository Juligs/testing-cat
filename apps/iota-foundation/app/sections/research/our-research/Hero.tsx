'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { HERO_OUR_REASEARCH_CONTENT } from './constants';
import { HeroType } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_OUR_REASEARCH_CONTENT}
                linkComponent={Link}
                type={HeroType.Large}
            />
        </section>
    );
}
