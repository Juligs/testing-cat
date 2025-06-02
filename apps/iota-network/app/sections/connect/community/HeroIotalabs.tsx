'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_IOTALABS_CONTENT, HERO_IOTALABS_BG, HERO_IOTALABS_BUTTONS } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function HeroIotaLabs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_IOTALABS_CONTENT}
                background={HERO_IOTALABS_BG}
                isAnchorLinksDesktopInverted
                buttons={HERO_IOTALABS_BUTTONS}
                linkComponent={Link}
            />
        </section>
    );
}
