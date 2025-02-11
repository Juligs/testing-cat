import { Hero as HeroComponent } from '@repo/shared/components';
import { EBSI_HOMEPAGE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HeroSize } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={EBSI_HOMEPAGE_CONTENT}
                image="/shared/rwa-section/cta-carousel/demia.png"
                size={HeroSize.ExtraLarge}
            />
        </section>
    );
}
