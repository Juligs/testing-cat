import { Hero as HeroComponent } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HERO_RESEARCH_PAPERS_CONTENT, HERO_RESEARCH_PAPERS_BG } from './constants';

export function Hero({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <HeroComponent
                verticalTitle={HERO_RESEARCH_PAPERS_CONTENT}
                background={HERO_RESEARCH_PAPERS_BG}
            />
        </section>
    );
}
