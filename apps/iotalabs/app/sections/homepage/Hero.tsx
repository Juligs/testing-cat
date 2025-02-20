import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_HOMEPAGE_INFO, HERO_HOMEPAGE_BG } from '@lib/constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HeroType } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_HOMEPAGE_INFO}
                background={HERO_HOMEPAGE_BG}
                type={HeroType.Large}
            />
        </section>
    );
}
