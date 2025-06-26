'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_WALLET_CONTENT,
    HERO_WALLET_BG,
    HERO_WALLET_ANCHORLINKS,
    HERO_WALLET_BUTTONS,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_WALLET_CONTENT}
                background={HERO_WALLET_BG}
                anchorLinks={HERO_WALLET_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                buttons={HERO_WALLET_BUTTONS}
                linkComponent={Link}
            />
        </section>
    );
}
