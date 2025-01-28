import { InfiniteCarousel } from '../../components';
import { BaseSectionProps } from '../../interfaces';
import { TWIN_SECTION_1_LOGOS_CAROUSEL } from './constants';

const TEXT = 'TWIN Consortium';

export function TwinSection1({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container w-full flex flex-col gap-6 xs:gap-12 py-6 xs:py-12">
                <p className="text-center text-title-md text-darkest">{TEXT}</p>
                <InfiniteCarousel logos={TWIN_SECTION_1_LOGOS_CAROUSEL} />
            </div>
        </section>
    );
}
