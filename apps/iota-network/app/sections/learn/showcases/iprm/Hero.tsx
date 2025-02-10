import { Hero as HeroComponent } from '@repo/shared/components';
import { IPRM_HOMEPAGE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HeroSize } from 'react-ui-kit';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full h-full hero-height bg-labs-neutral-10"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <HeroComponent
                verticalTitle={IPRM_HOMEPAGE_CONTENT}
                image="/shared/showcases/iprm.png"
                size={HeroSize.ExtraLarge}
            />
        </section>
    );
}
