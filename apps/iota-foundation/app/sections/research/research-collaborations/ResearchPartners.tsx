import { BaseSectionProps } from '@repo/shared/interfaces';
import { InfiniteCarousel } from '@repo/shared/components';
import { RESEARCH_PARTNERS_LOGOS } from './constants';

export function ResearchPartners({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container w-full flex py-6">
                <InfiniteCarousel logos={RESEARCH_PARTNERS_LOGOS} />
            </div>
        </section>
    );
}
