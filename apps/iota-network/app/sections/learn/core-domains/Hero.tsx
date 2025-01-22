import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_CORE_HOMEPAGE_CONTENT, HERO_CORE_HOMEPAGE_BG_VIDEO } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, theme }: BaseSectionProps) {
    return (
        <section
            className="w-full h-full hero-height bg-labs-neutral-10"
            id={id}
            data-theme={theme}
        >
            <HeroComponent
                verticalTitle={HERO_CORE_HOMEPAGE_CONTENT}
                background={HERO_CORE_HOMEPAGE_BG_VIDEO}
            />
        </section>
    );
}
