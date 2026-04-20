'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HERO_PURPOSE_ANCHORLINKS, HERO_PURPOSE_BG, HERO_PURPOSE_CONTENT } from './constants';
import { HeroType } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_PURPOSE_CONTENT}
                anchorLinks={HERO_PURPOSE_ANCHORLINKS}
                type={HeroType.Large}
                background={HERO_PURPOSE_BG}
            />
        </section>
    );
}
