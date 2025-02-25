import { Hero as HeroComponent } from '@repo/shared/components';
import { FOCUS_AREAS_HOMEPAGE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent verticalTitle={FOCUS_AREAS_HOMEPAGE_CONTENT} />
        </section>
    );
}
