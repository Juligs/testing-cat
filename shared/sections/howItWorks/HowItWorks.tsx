import { BaseSectionProps } from '../../interfaces';
import {
    HOW_IT_WORKS_ICON_CONTENT,
    MOVING_PAPERLESS_VERTICAL_TITLE_CONTENT,
} from './howItWorksContent.constants';
import { VerticalTitleAndGrid } from '../../components';

export function HowItWorks({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <VerticalTitleAndGrid
                image="/shared/core-domains-sections/trade-&-supply.png"
                verticalTitle={MOVING_PAPERLESS_VERTICAL_TITLE_CONTENT}
                iconContent={HOW_IT_WORKS_ICON_CONTENT}
            />
        </section>
    );
}
