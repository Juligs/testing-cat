import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { OVERVIEW_MORE_TO_EXPLORE_CONTENT } from './constants';

export function OverviewMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore content={OVERVIEW_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
