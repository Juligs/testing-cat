import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { FOCUS_AREAS_MORE_TO_EXPLORE_CONTENT } from './constants';

export function LastSection({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore content={FOCUS_AREAS_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
