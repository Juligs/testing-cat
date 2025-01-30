import { BaseSectionProps } from '../../interfaces';
import { InfiniteCarousel } from '../../components';
import { DPP_PARTNERS_LOGOS_CAROUSEL } from './constants';

const TEXT = 'Built with our Partners';

export function DPPPartners({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container w-full flex flex-col gap-6 xs:gap-12 py-6 xs:py-12">
                <p className="text-center text-title-md text-darkest">{TEXT}</p>
                <InfiniteCarousel logos={DPP_PARTNERS_LOGOS_CAROUSEL} />
            </div>
        </section>
    );
}
