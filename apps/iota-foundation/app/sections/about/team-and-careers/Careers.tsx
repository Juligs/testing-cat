import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { CAREERS_TITLE_CONTENT } from './constants';
import { FetchCareersData } from './subsections';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function Careers({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <div className="w-full xs:w-1/2 text-center">
                    <VerticalTitle {...CAREERS_TITLE_CONTENT}>
                        <Actions>
                            <Link
                                href="https://iota-foundation.jobs.personio.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to open positions"
                            >
                                <Button text="Open positions" icon={<ArrowTopRight />} />
                            </Link>
                        </Actions>
                    </VerticalTitle>
                </div>
                <FetchCareersData />
            </div>
        </section>
    );
}
