import { Hero as HeroComponent } from '@repo/shared/components';
import { MULTIKNIP_HOMEPAGE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HeroSize } from 'react-ui-kit';

export function Hero({ id, theme }: BaseSectionProps) {
    return (
        <section
            className="w-full h-full hero-height bg-labs-neutral-10"
            id={id}
            data-theme={theme}
        >
            <HeroComponent
                verticalTitle={MULTIKNIP_HOMEPAGE_CONTENT}
                image="/shared/rwa-section/cta-carousel/multiknip.png"
                size={HeroSize.ExtraLarge}
            />
        </section>
    );
}
