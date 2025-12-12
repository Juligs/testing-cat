import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_WORKSHOP_CONTENT, HERO_WORKSHOP_BG, HERO_WORKSHOP_BUTTONS } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_WORKSHOP_CONTENT}
                background={HERO_WORKSHOP_BG}
                buttons={HERO_WORKSHOP_BUTTONS}
                linkComponent={Link}
            />
        </section>
    );
}
