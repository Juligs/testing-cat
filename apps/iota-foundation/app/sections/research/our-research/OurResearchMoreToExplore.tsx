import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { OUR_RESEARCH_MORE_TO_EXPLORE_CONTENT } from './constants';

export function OurResearchMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore content={OUR_RESEARCH_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
