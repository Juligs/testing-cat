import { BaseSectionProps } from '../../interfaces';
import {
    IPR_MANAGEMENT_TRANSPARENCY_ICON_CONTENT,
    IPR_MANAGEMENT_TRANSPARENCY_VERTICAL_TITLE_CONTENT,
} from './constants';
import { VerticalTitleAndGrid } from '../../components';

export function IPRManagementTransparency({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <VerticalTitleAndGrid
                image="/shared/showcases/transparency.png"
                verticalTitle={IPR_MANAGEMENT_TRANSPARENCY_VERTICAL_TITLE_CONTENT}
                iconContent={IPR_MANAGEMENT_TRANSPARENCY_ICON_CONTENT}
            />
        </section>
    );
}
