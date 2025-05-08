import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { PRODUCT_SUITE_MORE_TO_EXPLORE_CONTENT } from './constants';

export function ProductSuiteMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore content={PRODUCT_SUITE_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
