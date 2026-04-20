'use client';

import { Hero as HeroComponent } from '@repo/shared/components';
import {
    HERO_TOKENIZATION_CONTENT,
    HERO_TOKENIZATION_BG,
    HERO_TOKENIZATION_BUTTONS,
    HERO_TOKENIZATION_ANCHORLINKS,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_TOKENIZATION_CONTENT}
                background={HERO_TOKENIZATION_BG}
                anchorLinks={HERO_TOKENIZATION_ANCHORLINKS}
                isAnchorLinksDesktopInverted
                buttons={HERO_TOKENIZATION_BUTTONS}
            />
        </section>
    );
}
