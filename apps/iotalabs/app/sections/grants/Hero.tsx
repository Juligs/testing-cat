'use client';

import Link from 'next/link';
import { Hero as HeroComponent } from '@repo/shared';
import {
    HERO_GRANTS_ANCHORLINKS,
    HERO_GRANTS_INFO,
    HERO_GRANTS_BUTTON,
    HERO_GRANTS_BG,
} from '@lib/constants';
export function Hero({ id }: { id: string }) {
    return (
        <section className="w-full" id={id}>
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
