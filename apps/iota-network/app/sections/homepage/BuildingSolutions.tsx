import { BaseSectionProps } from '@repo/shared/interfaces';
import { InfiniteCarousel } from '@repo/shared/components';
import { BUILDING_SOLUTIONS_LOGOS_CAROUSEL } from './constants';

const TEXT = 'Building Solutions on IOTA';

export function BuildingSolutions({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="py-3 xs:py-6">
                <div className="flex flex-col gap-6 py-8 xs:py-16">
                    <p className="container w-full text-center text-title-md text-darkest">
                        {TEXT}
                    </p>
                    <InfiniteCarousel logos={BUILDING_SOLUTIONS_LOGOS_CAROUSEL} />
                </div>
            </div>
        </section>
    );
}
