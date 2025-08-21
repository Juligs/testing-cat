import { ContactUsCTA } from '@components';
import { CONTACT_US_CTA_DEFAULT } from '@components/contact-us-CTA/contactUsCTAContent.constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function TrustHierarchiesContactUs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <ContactUsCTA
                ctaContent={{
                    ...CONTACT_US_CTA_DEFAULT,
                    subtitle:
                        'Reach out to our Product Adoption Team to learn more about IOTA Hierarchies and to explore commercial opportunities.',
                }}
            />
        </section>
    );
}
