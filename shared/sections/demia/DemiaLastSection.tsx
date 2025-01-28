import { BaseSectionProps } from '../../interfaces';
import { MoreToExplore } from '../../components';
import { DEMIA_LAST_SECTION_CONTENT } from './constants';

export function DemiaLastSection({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore content={DEMIA_LAST_SECTION_CONTENT} text="More to Explore" />
        </section>
    );
}
