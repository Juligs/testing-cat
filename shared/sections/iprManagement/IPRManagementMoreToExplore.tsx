import { BaseSectionProps } from '../../interfaces';
import { MoreToExplore } from '../../components';
import { IPR_MANAGEMENT_MORE_TO_EXPLORE_CONTENT } from './constants';

export function IPRManagementMoreToExplore({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore
                content={IPR_MANAGEMENT_MORE_TO_EXPLORE_CONTENT}
                text="More to Explore"
            />
        </section>
    );
}
