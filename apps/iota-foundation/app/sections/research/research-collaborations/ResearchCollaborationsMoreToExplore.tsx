import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { RESEARCH_COLLABORATIONS_MORE_TO_EXPLORE_CONTENT } from './constants';

export function ResearchCollaborationsMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore
                content={RESEARCH_COLLABORATIONS_MORE_TO_EXPLORE_CONTENT}
                text="More to Explore"
            />
        </section>
    );
}
