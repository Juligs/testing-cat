import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_HOMEPAGE_CONTENT, HERO_HOMEPAGE_BG_VIDEO } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HeroType } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_HOMEPAGE_CONTENT}
                background={HERO_HOMEPAGE_BG_VIDEO}
                type={HeroType.Large}
            />
        </section>
    );
}
