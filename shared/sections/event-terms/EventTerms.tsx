import { BaseSectionProps } from '../../interfaces';
import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import Link from 'next/link';

interface EventTermsProps extends BaseSectionProps {
    title: string;
    subtitle: string;
    linkText: string;
}

export function EventTerms({ id, navbarColorScheme, title, subtitle, linkText }: EventTermsProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <CtaCard image="/shared/event_terms.png" title={title} subtitle={subtitle}>
                    <Actions>
                        <Link href="/event-terms" aria-label="Read event terms and conditions">
                            <TextLink text={linkText} showIcon />
                        </Link>
                    </Actions>
                </CtaCard>
            </div>
        </section>
    );
}
