import { BaseSectionProps } from '@repo/shared/interfaces';
import { GET_STARTED_MORE_TO_EXPLORE_CONTENT } from './constants';
import { ExploreMoreAreas } from '@components/explore-more-areas';

export function ExploreMoreGetStarted({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <ExploreMoreAreas content={GET_STARTED_MORE_TO_EXPLORE_CONTENT} hasSmallPadding />
        </section>
    );
}
