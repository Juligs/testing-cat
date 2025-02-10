import { BaseSectionProps } from '../../interfaces';
import { ContactUsWithAnchorLinks } from '../../components';
import { IPRM_CONTACT_US_ANCHORLINKS } from './constants/iprmContactUsContent.constants';

export function IPRMContactUs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <ContactUsWithAnchorLinks anchorLinks={IPRM_CONTACT_US_ANCHORLINKS} />
            </div>
        </section>
    );
}
