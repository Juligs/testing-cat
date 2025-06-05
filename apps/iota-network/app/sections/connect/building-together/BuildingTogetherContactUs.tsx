import { ContactUsCTA } from '@components';
import { CONTACT_US_CTA_DEFAULT } from '@components/contact-us-CTA/contactUsCTAContent.constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function BuildingTogetherContactUs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <ContactUsCTA
                ctaContent={{
                    ...CONTACT_US_CTA_DEFAULT,
                    title: 'Get in Touch With Our Experts',
                    subtitle:
                        'Contact our Product Adoption Team to learn more about IOTA products and to explore commercial opportunities.',
                }}
            />
        </section>
    );
}
