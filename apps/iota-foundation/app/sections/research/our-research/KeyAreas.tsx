import { BaseSectionProps } from '@repo/shared/interfaces';
import { KEY_AREAS_ICON_CONTENT, KEY_AREAS_VERTICAL_TITLE_CONTENT } from './constants';
import { VerticalTitleAndGrid } from '@repo/shared/components';

export function KeyAreas({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <VerticalTitleAndGrid
                image="/research/our-research/key_areas.png"
                verticalTitle={KEY_AREAS_VERTICAL_TITLE_CONTENT}
                iconContent={KEY_AREAS_ICON_CONTENT}
            />
        </section>
    );
}
