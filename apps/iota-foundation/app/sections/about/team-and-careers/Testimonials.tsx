import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle } from 'react-ui-kit';
import { TESTIMONIALS_VERTICAL_TITLE } from './constants';
import { TestimonialCarousel } from './components';

export function Testimonials({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <div className="w-full">
                    <VerticalTitle {...TESTIMONIALS_VERTICAL_TITLE} />
                </div>
                <TestimonialCarousel />
            </div>
        </section>
    );
}
