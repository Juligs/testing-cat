import { BaseSectionProps } from '@repo/shared/interfaces';
import { UPCOMING_EVENTS_VERTICAL_TITLE } from './constants';
import { VerticalTitle } from 'react-ui-kit';
import { FetchEventsDataCards } from './subsections';

export function UpcomingEvents({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="bg-white" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-10 xs:gap-20 sm:gap-30">
                <div className="w-full max-w-[600px] mx-auto">
                    <VerticalTitle {...UPCOMING_EVENTS_VERTICAL_TITLE} />
                </div>
                <FetchEventsDataCards />
            </div>
        </section>
    );
}
