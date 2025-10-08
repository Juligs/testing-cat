import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HERO_PARTNERS_CONTENT, HERO_PARTNERS_BG } from './constants';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent verticalTitle={HERO_PARTNERS_CONTENT} background={HERO_PARTNERS_BG} />
        </section>
    );
}
