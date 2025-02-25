import { Hero as HeroComponent } from '@repo/shared/components';
import { SHOWCASES_HOMEPAGE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent verticalTitle={SHOWCASES_HOMEPAGE_CONTENT} />
        </section>
    );
}
