import {
    PRODUCT_LIFECYCLE_ICON_CONTENT,
    PRODUCT_LIFECYCLE_VERTICAL_TITLE_CONTENT,
} from './constants';

import { BaseSectionProps } from '@repo/shared/interfaces';
import { FocusAreaSection } from './components';
import { ShowcaseProject } from '../showcases/showcasesProjects.enums';

export function ProductLifecycle({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <FocusAreaSection
                image="/learn/focus-areas/sections/product_lifecycle.png"
                verticalTitleContent={PRODUCT_LIFECYCLE_VERTICAL_TITLE_CONTENT}
                iconContentColumns={PRODUCT_LIFECYCLE_ICON_CONTENT}
                showcases={[ShowcaseProject.Orobo, ShowcaseProject.ObjectID]}
            />
        </section>
    );
}
