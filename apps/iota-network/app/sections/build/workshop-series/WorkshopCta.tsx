import Link from 'next/link';
import { Actions, Button, CtaCard } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { WORKSHOP_BUILDING_CTA_CONTENT } from './constants';

export function WorkshopCta({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-12 flex justify-center items-center w-full">
                <CtaCard {...WORKSHOP_BUILDING_CTA_CONTENT} brand>
                    <Link href="mailto:partnerships@iota.org" aria-label="Send an email to IOTA">
                        <Actions>
                            <Button text="Contact us" />
                        </Actions>
                    </Link>
                </CtaCard>
            </div>
        </section>
    );
}
