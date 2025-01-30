import { BaseSectionProps } from '../../interfaces';
import { MoreToExplore } from '../../components';
import { DEMIA_MORE_TO_EXPLORE_CONTENT } from './constants';

export function DemiaMoreToExplore({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore content={DEMIA_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
