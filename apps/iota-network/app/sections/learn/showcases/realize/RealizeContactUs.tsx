import { BaseSectionProps } from '@repo/shared/interfaces';
import { ContactUsWithAnchorLinks } from '@repo/shared/components';
import { REALIZE_CONTACT_US_ANCHORLINKS } from './constants/realizeContactUsContent.constants';

export function RealizeContactUs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <ContactUsWithAnchorLinks
                    anchorLinks={REALIZE_CONTACT_US_ANCHORLINKS}
                    contactButtonLink="https://www.realizeassets.com/contact"
                />
            </div>
        </section>
    );
}
