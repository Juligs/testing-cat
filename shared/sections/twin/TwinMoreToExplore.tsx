import { BaseSectionProps } from '../../interfaces';
import { MoreToExplore } from '../../components';
import { TWIN_MORE_TO_EXPLORE_LINKS } from './constants';

export function TwinMoreToExplore({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore content={TWIN_MORE_TO_EXPLORE_LINKS} text="More to Explore" />
        </section>
    );
}
