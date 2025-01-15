'use client';

import Link from 'next/link';
import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_HOMEPAGE_ANCHORLINKS,
    HERO_HOMEPAGE_CONTENT,
    HERO_HOMEPAGE_BG,
    HERO_HOMEPAGE_BUTTON,
} from './constants';
export function Hero({ id }: { id: string }) {
    return (
        <section className="w-full" id={id}>
            <HeroComponent
                verticalTitle={HERO_HOMEPAGE_CONTENT}
                background={HERO_HOMEPAGE_BG}
                anchorLinks={HERO_HOMEPAGE_ANCHORLINKS}
                buttons={HERO_HOMEPAGE_BUTTON}
                linkComponent={Link}
                isAnchorLinksDesktopInverted
            />
        </section>
    );
}
