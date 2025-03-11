import { HeroAlignment, Hero as HeroComponent } from '@repo/shared/components';
import { EBSI_HOMEPAGE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={EBSI_HOMEPAGE_CONTENT}
                image="/learn/showcases/dpp_hero.png"
                layout={HeroAlignment.Left}
            />
        </section>
    );
}
