import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '../../interfaces';
import { FetchEventsDataCards } from './subsections';

const UPCOMING_EVENTS_VERTICAL_TITLE = {
    title: 'Upcoming Events',
    body: 'Find the latest dates and information about conferences, summits, and meet-ups near you.',
    size: TitleTextSize.Small,
    isCentered: true,
};

export function UpcomingEvents({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="bg-white" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-10 xs:gap-20 sm:gap-30">
                <div className="w-full max-w-[600px] mx-auto text-medium">
                    <VerticalTitle {...UPCOMING_EVENTS_VERTICAL_TITLE} />
                </div>
                <FetchEventsDataCards />
            </div>
        </section>
    );
}
