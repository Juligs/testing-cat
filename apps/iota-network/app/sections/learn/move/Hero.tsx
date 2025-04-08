import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_MOVE_CONTENT, HERO_MOVE_BG } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent verticalTitle={HERO_MOVE_CONTENT} background={HERO_MOVE_BG} />
        </section>
    );
}
