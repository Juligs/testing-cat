import { BaseSectionProps } from '@repo/shared/interfaces';
import { HOSTING_CTA_CARD } from './constants';
import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import Link from 'next/link';

export function HostingEvent({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="bg-white" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <CtaCard {...HOSTING_CTA_CARD}>
                    <Actions>
                        <Link
                            href={HOSTING_CTA_CARD.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TextLink text="Register now" showIcon />
                        </Link>
                    </Actions>
                </CtaCard>
            </div>
        </section>
    );
}
