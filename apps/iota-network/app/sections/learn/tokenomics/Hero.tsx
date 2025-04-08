import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_TOKENOMICS_CONTENT, HERO_TOKENOMICS_BG } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_TOKENOMICS_CONTENT}
                background={HERO_TOKENOMICS_BG}
            />
        </section>
    );
}
