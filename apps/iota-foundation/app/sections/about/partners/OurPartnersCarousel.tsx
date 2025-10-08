import { InfiniteCarousel } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { PARTNERS_LOGOS_CAROUSEL } from '@repo/shared/constants';

export function OurPartnersCarousel({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="py-8 xs:py-14">
                <InfiniteCarousel logos={PARTNERS_LOGOS_CAROUSEL} />
            </div>
        </section>
    );
}
