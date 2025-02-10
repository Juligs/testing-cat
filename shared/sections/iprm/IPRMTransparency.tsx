import { BaseSectionProps } from '../../interfaces';
import {
    IPRM_TRANSPARENCY_ICON_CONTENT,
    IPRM_TRANSPARENCY_VERTICAL_TITLE_CONTENT,
} from './constants';
import { VerticalTitleAndGrid } from '../../components';

export function IPRMTransparency({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <VerticalTitleAndGrid
                image="/shared/showcases/transparency.png"
                verticalTitle={IPRM_TRANSPARENCY_VERTICAL_TITLE_CONTENT}
                iconContent={IPRM_TRANSPARENCY_ICON_CONTENT}
            />
        </section>
    );
}
