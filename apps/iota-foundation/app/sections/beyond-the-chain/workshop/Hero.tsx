import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HERO_WORKSHOP_BG, HERO_WORKSHOP_CONTENT } from './constants';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent verticalTitle={HERO_WORKSHOP_CONTENT} background={HERO_WORKSHOP_BG} />
        </section>
    );
}
