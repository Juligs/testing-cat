import { BaseSectionProps } from '../../interfaces';
import { MoreToExplore } from '../../components';
import { IPRM_MORE_TO_EXPLORE_CONTENT } from './constants';

export function IPRMMoreToExplore({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore content={IPRM_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
