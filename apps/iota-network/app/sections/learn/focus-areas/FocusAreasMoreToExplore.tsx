import { BaseSectionProps } from '@repo/shared/interfaces';
import { FOCUS_AREAS_MORE_TO_EXPLORE_CONTENT } from './constants';
import { ExploreMoreAreas } from '@components/explore-more-areas';

export function FocusAreasMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <ExploreMoreAreas content={FOCUS_AREAS_MORE_TO_EXPLORE_CONTENT} />
        </section>
    );
}
