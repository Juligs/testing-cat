import { HeroAlignment, Hero as HeroComponent } from '@repo/shared/components';
import { HERO_MAINNET_CONTENT, HERO_MAINNET_BG, HERO_MAINNET_BUTTON } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_MAINNET_CONTENT}
                background={HERO_MAINNET_BG}
                layout={HeroAlignment.Left}
                buttons={HERO_MAINNET_BUTTON}
            />
        </section>
    );
}
