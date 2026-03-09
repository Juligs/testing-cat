'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import { GET_STARTED_CONTENT, GET_STARTED_BG, GET_STARTED_ANCHORLINKS } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full [&_h2]:whitespace-pre-line"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <HeroComponent
                verticalTitle={GET_STARTED_CONTENT}
                background={GET_STARTED_BG}
                anchorLinks={GET_STARTED_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                linkComponent={Link}
            />
        </section>
    );
}
