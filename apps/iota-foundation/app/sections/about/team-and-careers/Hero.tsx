'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { TEAM_AND_CAREERS_CONTENT, HERO_TEAM_AND_CAREERS_BG } from './constants';
import { HeroType } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={TEAM_AND_CAREERS_CONTENT}
                type={HeroType.Large}
                background={HERO_TEAM_AND_CAREERS_BG}
            />
        </section>
    );
}
