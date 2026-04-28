import { BaseSectionProps } from '@repo/shared/interfaces';
import { CardSize, DisplayStats, TextSize, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { DATE_DATA, MARK_YOUR_CALENDAR_STATS } from './constants';

interface TimeLineDataProps {
    date: string;
    text: string;
}

function TimeLineData({ date, text }: TimeLineDataProps) {
    return (
        <div className="flex flex-col p-4">
            <p className="text-foundation-primary-40 text-label-lg">{date}</p>
            <p className="text-medium text-body-md">{text}</p>
        </div>
    );
}

type MarkYourCalendarProps = BaseSectionProps;

export function KeyFacts({ id, navbarColorScheme }: MarkYourCalendarProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-12">
                <VerticalTitle
                    title="Mark Your Calendar"
                    subtitle="Find all key dates of the next upcoming workshop"
                    size={TitleTextSize.Small}
                    isCentered
                />
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    {MARK_YOUR_CALENDAR_STATS.map((stats, index) => (
                        <DisplayStats
                            key={index}
                            {...stats}
                            size={CardSize.Small}
                            textSize={TextSize.Default}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5">
                    {DATE_DATA.map((data, index) => (
                        <TimeLineData key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
