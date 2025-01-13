import { Hero as HeroComponent } from '@repo/shared';
import { HERO_HOMEPAGE_INFO, HERO_HOMEPAGE_BG } from '@lib/constants';

export function Hero({ id }: { id: string }) {
    return (
        <section className="w-full h-full hero-height bg-labs-neutral-10" id={id}>
            <HeroComponent verticalTitle={HERO_HOMEPAGE_INFO} background={HERO_HOMEPAGE_BG} />
        </section>
    );
}
