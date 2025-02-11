import { Hero as HeroComponent } from '@repo/shared/components';
import { SHOWCASES_HOMEPAGE_CONTENT, SHOWCASES_HOMEPAGE_BG_VIDEO } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HeroSize } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={SHOWCASES_HOMEPAGE_CONTENT}
                background={SHOWCASES_HOMEPAGE_BG_VIDEO}
                size={HeroSize.ExtraLarge}
            />
        </section>
    );
}
