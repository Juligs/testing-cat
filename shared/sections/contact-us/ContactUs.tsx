import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { CONTACT_US_TITLE_CONTENT } from './contactUsContent.constants';

export function ContactUs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <div className="w-full xs:w-1/2 text-center">
                    <VerticalTitle {...CONTACT_US_TITLE_CONTENT}>
                        <Actions>
                            <Link href="mailto:info@iota.org" aria-label="email IOTA">
                                <Button text="Contact" />
                            </Link>
                        </Actions>
                    </VerticalTitle>
                </div>
            </div>
        </section>
    );
}
