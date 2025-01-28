import { BaseSectionProps } from '../../interfaces';
import {
    TWIN_SECTION_2_ICON_CONTENT,
    TWIN_SECTION_2_TITLE_CONTENT,
} from './constants/twinSection2Content';
import { VerticalTitleAndGrid } from '../../components';

export function TwinSection2({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <VerticalTitleAndGrid
                image="/shared/core-domains-sections/trade-&-supply.png"
                verticalTitle={TWIN_SECTION_2_TITLE_CONTENT}
                iconContent={TWIN_SECTION_2_ICON_CONTENT}
            />
        </section>
    );
}
