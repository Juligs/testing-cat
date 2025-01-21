'use client';

import Link from 'next/link';
import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_GRANTS_ANCHORLINKS,
    HERO_GRANTS_INFO,
    HERO_GRANTS_BUTTON,
    HERO_GRANTS_BG,
} from '@lib/constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <HeroComponent
                verticalTitle={HERO_GRANTS_INFO}
                background={HERO_GRANTS_BG}
                anchorLinks={HERO_GRANTS_ANCHORLINKS}
                buttons={HERO_GRANTS_BUTTON}
                linkComponent={Link}
                isAnchorLinksDesktopInverted
            />
        </section>
    );
}
