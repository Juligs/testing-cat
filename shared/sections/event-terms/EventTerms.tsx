import { BaseSectionProps } from '../../interfaces';
import { EVENT_TERMS_CTA_CARD } from './eventTermsContent.contants';
import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import Link from 'next/link';

export function EventTerms({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <CtaCard {...EVENT_TERMS_CTA_CARD}>
                    <Actions>
                        <Link
                            href={EVENT_TERMS_CTA_CARD.link}
                            aria-label="Read events terms and conditions"
                        >
                            <TextLink text="Review Event Terms" showIcon />
                        </Link>
                    </Actions>
                </CtaCard>
            </div>
        </section>
    );
}
