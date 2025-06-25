import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { EVENTS_MORE_TO_EXPLORE_CONTENT } from './constants';

export function EventsMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore content={EVENTS_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
