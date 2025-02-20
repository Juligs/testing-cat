'use client';

import Link from 'next/link';
import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_HOMEPAGE_ANCHORLINKS,
    HERO_HOMEPAGE_CONTENT,
    HERO_HOMEPAGE_BG,
    HERO_HOMEPAGE_BUTTON,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HeroType } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_HOMEPAGE_CONTENT}
                background={HERO_HOMEPAGE_BG}
                anchorLinks={HERO_HOMEPAGE_ANCHORLINKS}
                buttons={HERO_HOMEPAGE_BUTTON}
                linkComponent={Link}
                isAnchorLinksDesktopInverted
                type={HeroType.Large}
            />
        </section>
    );
}
