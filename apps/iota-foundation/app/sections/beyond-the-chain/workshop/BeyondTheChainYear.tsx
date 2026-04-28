import { BaseSectionProps } from '@repo/shared/interfaces';
import {
    Actions,
    Button,
    ButtonVariant,
    HorizontalTitle,
    TitleTextSize,
    VerticalTitle,
} from 'react-ui-kit';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';
import { PastEventsData } from '@lib/utils';
import { BeyondTheChainPapers } from './subsections/BeyondTheChainPapers';
import { BEYOND_THE_CHAIN_YEAR_CONTENT } from './constants';

interface PaperYearProps extends BaseSectionProps {
    year: string;
    data: PastEventsData[];
}
export type BeyondTheChainYearContent = Omit<
    React.ComponentProps<typeof HorizontalTitle>,
    'size'
> & {
    blogLink?: string;
};

export function BeyondTheChainYear({ id, navbarColorScheme, year, data }: PaperYearProps) {
    const content = BEYOND_THE_CHAIN_YEAR_CONTENT[year];
    if (!content) {
        return null;
    }
    const beyondTheChainTitle = `Beyond The Chain ${year}`;

    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 sm:gap-20 lg:gap-30">
                <VerticalTitle title={beyondTheChainTitle} isCentered />
                <HorizontalTitle {...content} size={TitleTextSize.Medium}>
                    {content.blogLink && (
                        <Actions>
                            <Link
                                href={content.blogLink}
                                aria-label="Link to blog post"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    text="Read blog post"
                                    icon={<ArrowTopRight />}
                                    variant={ButtonVariant.Secondary}
                                />
                            </Link>
                        </Actions>
                    )}
                </HorizontalTitle>
                <BeyondTheChainPapers data={data} />
            </div>
        </section>
    );
}
