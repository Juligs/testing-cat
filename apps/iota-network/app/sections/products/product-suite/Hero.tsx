import { HeroAlignment, Hero as HeroComponent } from '@repo/shared/components';
import { HERO_PRODUCT_SUITE_CONTENT, HERO_PRODUCT_SUITE_BG } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_PRODUCT_SUITE_CONTENT}
                background={HERO_PRODUCT_SUITE_BG}
                layout={HeroAlignment.Left}
            />
        </section>
    );
}
