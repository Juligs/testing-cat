import { Hero as HeroComponent } from '@repo/shared/components';
import { IPR_MANAGEMENT_HOMEPAGE_CONTENT } from './constants';
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
                verticalTitle={IPR_MANAGEMENT_HOMEPAGE_CONTENT}
                image="/shared/showcases/ipr_management.png"
                size={HeroSize.ExtraLarge}
            />
        </section>
    );
}
