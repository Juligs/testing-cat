import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_GRANTS_CONTENT, HERO_GRANTS_BG, HERO_GRANTS_BUTTONS } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_GRANTS_CONTENT}
                background={HERO_GRANTS_BG}
                isAnchorLinksDesktopInverted
                buttons={HERO_GRANTS_BUTTONS}
            />
        </section>
    );
}
