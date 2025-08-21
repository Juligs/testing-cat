import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle } from 'react-ui-kit';
import { PAPERS_HORIZONTAL_TITLE } from './constants';
import { FetchLatestPapers } from './subsections';

export function Papers({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <div className="w-full break-words whitespace-normal">
                    <HorizontalTitle {...PAPERS_HORIZONTAL_TITLE} />
                </div>
                <FetchLatestPapers />
            </div>
        </section>
    );
}
