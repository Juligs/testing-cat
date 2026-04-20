'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import {
    GAS_STATION_CONTENT,
    GAS_STATION_BG,
    GAS_STATION_ANCHORLINKS,
    GAS_STATION_BUTTONS,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={GAS_STATION_CONTENT}
                background={GAS_STATION_BG}
                anchorLinks={GAS_STATION_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                buttons={GAS_STATION_BUTTONS}
            />
        </section>
    );
}
