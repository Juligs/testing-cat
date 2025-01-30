import { BaseSectionProps } from '../../interfaces';
import {
    DEMIA_CARBON_EMISSIONS_ICON_CONTENT,
    DEMIA_CARBON_EMISSIONS_VERTICAL_TITLE_CONTENT,
} from './constants';
import { VerticalTitleAndGrid } from '../../components';

export function DemiaCarbonEmissions({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <VerticalTitleAndGrid
                image="/shared/core-domains-sections/carbon-emissions.png"
                verticalTitle={DEMIA_CARBON_EMISSIONS_VERTICAL_TITLE_CONTENT}
                iconContent={DEMIA_CARBON_EMISSIONS_ICON_CONTENT}
            />
        </section>
    );
}
