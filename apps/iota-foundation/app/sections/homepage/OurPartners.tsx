import { InfiniteCarousel } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { PARTNERS_LOGOS_CAROUSEL } from '@repo/shared/constants';
import { OUR_PARTNES_VERTICAL_TITLE } from './constants';
import { VerticalTitle } from 'react-ui-kit';

export function OurPartners({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full py-14 sm:py-20 lg:py-30"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container w-full flex flex-col justify-center items-center gap-10 xs:gap-20">
                <div className=" w-full max-w-[586px]">
                    <VerticalTitle {...OUR_PARTNES_VERTICAL_TITLE} />
                </div>
            </div>
            <div className="py-8 xs:py-14">
                <InfiniteCarousel logos={PARTNERS_LOGOS_CAROUSEL} />
            </div>
        </section>
    );
}
