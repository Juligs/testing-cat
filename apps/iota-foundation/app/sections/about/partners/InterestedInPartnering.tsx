import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { INTERESTED_IN_PARTNERING_TITLE_CONTENT } from './constants';
import Link from 'next/link';

export function InterestedInPartnering({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate
                    image="/about/our-partners/interested_in_partnering.png"
                    reverse
                >
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle {...INTERESTED_IN_PARTNERING_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="mailto:partners@iota.org"
                                    aria-label="Send an email to IOTA"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Contact us"
                                        icon
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
