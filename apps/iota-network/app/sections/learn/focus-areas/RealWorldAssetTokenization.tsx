import {
    REAL_WORLD_ICON_CONTENT,
    REAL_WORLD_VERTICAL_TITLE_CONTENT,
} from './constants/realWorldContent.constants';

import { BaseSectionProps } from '@repo/shared/interfaces';
import { FocusAreaSection } from './components';
import { ShowcaseProject } from '../showcases/showcasesProjects.enums';

export function RealWorldAssetTokenization({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <FocusAreaSection
                image="/learn/focus-areas/sections/rwa-cards/tokenization.png"
                verticalTitleContent={REAL_WORLD_VERTICAL_TITLE_CONTENT}
                iconContentColumns={REAL_WORLD_ICON_CONTENT}
                showcases={[ShowcaseProject.Salus]}
            />
        </section>
    );
}
