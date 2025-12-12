import {
    DIGITAL_IDENTITY_ICON_CONTENT,
    DIGITAL_IDENTITY_VERTICAL_TITLE_CONTENT,
} from './constants';

import { BaseSectionProps } from '@repo/shared/interfaces';
import { FocusAreaSection } from './components';
import { ShowcaseProject } from '../showcases/showcasesProjects.enums';

export function DigitalIdentityFocusAreas({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <FocusAreaSection
                image="/learn/focus-areas/sections/digital_identity.png"
                verticalTitleContent={DIGITAL_IDENTITY_VERTICAL_TITLE_CONTENT}
                iconContentColumns={DIGITAL_IDENTITY_ICON_CONTENT}
                showcases={[ShowcaseProject.Impierce, ShowcaseProject.TuringSpace]}
            />
        </section>
    );
}
