import Link from 'next/link';
import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_PROJECTS_BUTTON, HERO_PROJECTS_INFO, HERO_PROJECTS_BG } from '@lib/constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_PROJECTS_INFO}
                background={HERO_PROJECTS_BG}
                buttons={HERO_PROJECTS_BUTTON}
                linkComponent={Link}
            />
        </section>
    );
}
