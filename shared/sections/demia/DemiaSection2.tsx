import { BaseSectionProps } from '../../interfaces';
import { DEMIA_SECTION_2_ICON_CONTENT, DEMIA_SECTION_2_VERTICAL_TITLE_CONTENT } from './constants';
import { VerticalTitleAndGrid } from '../../components';

export function DemiaSection2({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <VerticalTitleAndGrid
                image="/shared/core-domains-sections/carbon-emissions.png"
                verticalTitle={DEMIA_SECTION_2_VERTICAL_TITLE_CONTENT}
                iconContent={DEMIA_SECTION_2_ICON_CONTENT}
            />
        </section>
    );
}
