import { BaseSectionProps } from '@repo/shared/interfaces';
import { PRODUCT_SUITE_MORE_TO_EXPLORE_CONTENT } from './constants';
import { ExploreMoreAreas } from '@components/explore-more-areas';

export function ProductSuiteMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <ExploreMoreAreas content={PRODUCT_SUITE_MORE_TO_EXPLORE_CONTENT} />
        </section>
    );
}
