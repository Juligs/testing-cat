import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HERO_HOMEPAGE_BG, HERO_HOMEPAGE_CONTENT } from './constants';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent verticalTitle={HERO_HOMEPAGE_CONTENT} background={HERO_HOMEPAGE_BG} />
        </section>
    );
}
