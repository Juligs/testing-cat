import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import Link from 'next/link';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { OUR_FUNDING_CTA_CONTENT } from './constants';

export function OurFundingGuidelines({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <CtaCard {...OUR_FUNDING_CTA_CONTENT}>
                    <Actions>
                        <Link
                            href="https://iotalabs.io/grants"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Learn more about IOTA on the official documentation"
                        >
                            <TextLink text="View Guidelines" showIcon inverted />
                        </Link>
                    </Actions>
                </CtaCard>
            </div>
        </section>
    );
}
