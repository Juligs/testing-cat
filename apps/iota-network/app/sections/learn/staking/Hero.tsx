import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_STAKING_CONTENT, HERO_STAKING_BG } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent verticalTitle={HERO_STAKING_CONTENT} background={HERO_STAKING_BG} />
        </section>
    );
}
