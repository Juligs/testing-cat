import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_HOMEPAGE_CONTENT, HERO_HOMEPAGE_BG_VIDEO } from './constants';

export function Hero({ id }: { id: string }) {
    return (
        <section className="w-full h-full hero-height bg-labs-neutral-10" id={id}>
            <HeroComponent
                verticalTitle={HERO_HOMEPAGE_CONTENT}
                background={HERO_HOMEPAGE_BG_VIDEO}
            />
        </section>
    );
}
