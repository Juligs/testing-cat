import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle } from 'react-ui-kit';
import { LatestRegulatoryCarousel } from './components';
import { LATEST_HORIZONTAL_TITLE } from './constants';

export function Latest({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <div className="w-full">
                    <HorizontalTitle {...LATEST_HORIZONTAL_TITLE} />
                </div>
                <LatestRegulatoryCarousel />
            </div>
        </section>
    );
}
