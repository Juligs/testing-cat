import { BaseSectionProps } from '@repo/shared/interfaces';
import { InfiniteCarousel } from '@repo/shared/components';
import { PARTNERS_LOGOS_CAROUSEL } from './constants';

const TEXT = 'IOTA: A Trusted Partner and Technology of Choice';

export function PartnersCarousel({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="py-3 xs:py-6">
                <div className="flex flex-col gap-6 py-8 xs:py-16">
                    <InfiniteCarousel logos={PARTNERS_LOGOS_CAROUSEL} />
                    <p className="container w-full text-center text-body-md text-iota-neutral-50 ">
                        {TEXT}
                    </p>
                </div>
            </div>
        </section>
    );
}
