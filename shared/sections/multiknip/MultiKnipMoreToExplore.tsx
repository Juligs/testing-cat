import { BaseSectionProps } from '../../interfaces';
import { MoreToExplore } from '../../components';
import { MULTIKNIP_MORE_TO_EXPLORE_CONTENT } from './constants';

export function MultiKnipMoreToExplore({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore content={MULTIKNIP_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
