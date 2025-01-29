import { BaseSectionProps } from '../../interfaces';
import { ContactUsWithAnchorLinks } from '../../components';
import { TWIN_CONTACT_US_ANCHORLINKS } from './constants/twinContactUsContent.constants';

export function TwinContactUs({ id, theme }: BaseSectionProps) {
    return (
        <section id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <ContactUsWithAnchorLinks anchorLinks={TWIN_CONTACT_US_ANCHORLINKS} />
            </div>
        </section>
    );
}
