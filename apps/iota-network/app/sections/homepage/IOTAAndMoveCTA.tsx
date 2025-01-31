import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import Link from 'next/link';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { IOTA_AND_MOVE_CTA_CONTENT } from './constants';

export function IOTAAndMoveCTA({ id, theme }: BaseSectionProps) {
    return (
        <section id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <CtaCard {...IOTA_AND_MOVE_CTA_CONTENT}>
                    <Actions>
                        <Link
                            href="https://docs.iota.org/about-iota/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TextLink text="Learn More" showIcon inverted />
                        </Link>
                    </Actions>
                </CtaCard>
            </div>
        </section>
    );
}
