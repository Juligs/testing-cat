import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle } from 'react-ui-kit';
import { FIRST_PARTICIPANTS_HORIZONTAL_TITLE } from './constants';
import { FirstParticipantsCarousel } from './subsections/FirstParticipantsCarousel';

export function FirstParticipants({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...FIRST_PARTICIPANTS_HORIZONTAL_TITLE} />
                <FirstParticipantsCarousel />
            </div>
        </section>
    );
}
