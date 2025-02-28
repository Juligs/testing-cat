'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HERO_IOTA_FOUNDATION_CONTENT, BG_IOTA_FOUNDATION } from './constants';
import { HeroType } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_IOTA_FOUNDATION_CONTENT}
                type={HeroType.Large}
                background={BG_IOTA_FOUNDATION}
            />
        </section>
    );
}
