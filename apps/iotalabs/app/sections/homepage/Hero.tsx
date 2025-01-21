import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_HOMEPAGE_INFO, HERO_HOMEPAGE_BG } from '@lib/constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, theme }: BaseSectionProps) {
    return (
        <section
            className="w-full h-full hero-height bg-labs-neutral-10"
            id={id}
            data-theme={theme}
        >
            <HeroComponent verticalTitle={HERO_HOMEPAGE_INFO} background={HERO_HOMEPAGE_BG} />
        </section>
    );
}
