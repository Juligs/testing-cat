import { BaseSectionProps } from '../../interfaces';
import { MoreToExplore } from '../../components';
import { DEMIA_MORE_TO_EXPLORE_CONTENT } from './constants';

export function DemiaMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore content={DEMIA_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
