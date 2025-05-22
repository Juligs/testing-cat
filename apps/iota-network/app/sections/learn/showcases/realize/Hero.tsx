import { HeroAlignment, Hero as HeroComponent } from '@repo/shared/components';
import { REALIZE_HOMEPAGE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={REALIZE_HOMEPAGE_CONTENT}
                image="/learn/realize/realize_hero.png"
                layout={HeroAlignment.Left}
            />
        </section>
    );
}
