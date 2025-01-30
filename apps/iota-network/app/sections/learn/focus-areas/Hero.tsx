import { Hero as HeroComponent } from '@repo/shared/components';
import { FOCUS_AREAS_HOMEPAGE_CONTENT, FOCUS_AREAS_HOMEPAGE_BG_VIDEO } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Hero({ id, theme }: BaseSectionProps) {
    return (
        <section
            className="w-full h-full hero-height bg-labs-neutral-10"
            id={id}
            data-theme={theme}
        >
            <HeroComponent
                verticalTitle={FOCUS_AREAS_HOMEPAGE_CONTENT}
                background={FOCUS_AREAS_HOMEPAGE_BG_VIDEO}
            />
        </section>
    );
}
