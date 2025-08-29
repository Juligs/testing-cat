import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { BRAND_LIBRARY_MORE_TO_EXPLORE_CONTENT } from './constants';

export function BrandLibraryMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore content={BRAND_LIBRARY_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
