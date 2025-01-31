import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import { TEAM_CONTACT_CTA_CONTENT } from './teamContactCTAContent.constants';
import Link from 'next/link';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function TeamContactCTA({ id, theme }: BaseSectionProps) {
    return (
        <section id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <CtaCard {...TEAM_CONTACT_CTA_CONTENT}>
                    <Actions>
                        <Link href="mailto:partnerships@iota.org">
                            <TextLink text="Contact" showIcon />
                        </Link>
                    </Actions>
                </CtaCard>
            </div>
        </section>
    );
}
