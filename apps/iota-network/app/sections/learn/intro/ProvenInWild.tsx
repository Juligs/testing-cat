import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle } from 'react-ui-kit';
import { PROVEN_IN_THE_WILD_VERTICAL_TITLE } from './constants';
import { TestimonialCarousel } from './components';

export function ProvenInWild({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col items-center justify-center gap-6 xs:gap-10 sm:gap-20">
                <div className="max-w-[568px]">
                    <VerticalTitle {...PROVEN_IN_THE_WILD_VERTICAL_TITLE} />
                </div>
                <TestimonialCarousel />
            </div>
        </section>
    );
}
