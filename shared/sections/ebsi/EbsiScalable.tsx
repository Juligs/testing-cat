import { BaseSectionProps } from '../../interfaces';
import { EBSI_SCALABLE_ICON_CONTENT, EBSI_SCALABLE_VERTICAL_TITLE_CONTENT } from './constants';
import { VerticalTitleAndGrid } from '../../components';

export function EbsiScalable({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <VerticalTitleAndGrid
                image="/learn/showcases/scalability.png"
                verticalTitle={EBSI_SCALABLE_VERTICAL_TITLE_CONTENT}
                iconContent={EBSI_SCALABLE_ICON_CONTENT}
            />
        </section>
    );
}
