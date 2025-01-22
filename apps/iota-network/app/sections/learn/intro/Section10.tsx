import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { LEARN_MORE_TO_EXPLORE_CONTENT } from './constants';

export function Section10({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore content={LEARN_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
