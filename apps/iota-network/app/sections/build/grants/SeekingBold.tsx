import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button } from 'react-ui-kit';
import { SEEKING_BOLD_GRANTS_VERTICAL_TITLE } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';
import { FetchGrantsSliderData, FetchGrantsStatsData } from '@repo/shared/sections';

export function SeekingBold({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/build/grants/project_funding.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...SEEKING_BOLD_GRANTS_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href={SEEKING_BOLD_GRANTS_VERTICAL_TITLE.link}
                                    target="_blank"
                                    rel="nopener noreferrer"
                                    aria-label="Go to the form"
                                >
                                    <Button text="Apply for a grant" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <FetchGrantsStatsData />
                <FetchGrantsSliderData itemsToShow={6} />
            </div>
        </section>
    );
}
