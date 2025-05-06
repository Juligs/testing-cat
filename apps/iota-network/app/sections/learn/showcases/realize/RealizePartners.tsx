import { BaseSectionProps } from '@repo/shared/interfaces';
import { InfiniteCarousel } from '@repo/shared/components';
import { REALIZE_PARTNERS_LOGOS_CAROUSEL } from './constants';

const TEXT = 'Built with our Partner';

export function RealizePartners({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container w-full flex flex-col gap-6 xs:gap-12 py-6 xs:py-12">
                <p className="text-center text-title-md text-darkest">{TEXT}</p>
                <InfiniteCarousel logos={REALIZE_PARTNERS_LOGOS_CAROUSEL} />
            </div>
        </section>
    );
}
