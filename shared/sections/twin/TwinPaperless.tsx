import { BaseSectionProps } from '../../interfaces';
import {
    TWIN_PAPERLESS_ICON_CONTENT,
    TWIN_PAPERLESS_TITLE_CONTENT,
} from './constants/twinPaperlessContent';
import { VerticalTitleAndGrid } from '../../components';

export function TwinPaperless({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <VerticalTitleAndGrid
                image="/learn/showcases/moving_paperless.png"
                verticalTitle={TWIN_PAPERLESS_TITLE_CONTENT}
                iconContent={TWIN_PAPERLESS_ICON_CONTENT}
            />
        </section>
    );
}
