import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import {
    HERO_BRAND_LIBRARY_CONTENT,
    HERO_BRAND_LIBRARY_BG,
    HERO_BRAND_LIBRARY_BUTTON,
} from './constants';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_BRAND_LIBRARY_CONTENT}
                linkComponent={Link}
                background={HERO_BRAND_LIBRARY_BG}
                buttons={HERO_BRAND_LIBRARY_BUTTON}
            />
        </section>
    );
}
