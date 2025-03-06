'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import {
    HERO_HOMEPAGE_ANCHORLINKS,
    HERO_HOMEPAGE_BG,
    HERO_HOMEPAGE_BUTTON,
    HERO_HOMEPAGE_CONTENT,
} from './constants';
import { HeroType } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_HOMEPAGE_CONTENT}
                anchorLinks={HERO_HOMEPAGE_ANCHORLINKS}
                buttons={HERO_HOMEPAGE_BUTTON}
                linkComponent={Link}
                type={HeroType.Large}
                background={HERO_HOMEPAGE_BG}
            />
        </section>
    );
}
