import { BaseSectionProps } from '../../interfaces';
import {
    TWIN_PAPERLESS_ICON_CONTENT,
    TWIN_PAPERLESS_TITLE_CONTENT,
} from './constants/twinPaperlessContent';
import { VerticalTitleAndGrid } from '../../components';

export function TwinPaperless({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <VerticalTitleAndGrid
                image="/shared/focus-areas-sections/trade_&_supply.png"
                verticalTitle={TWIN_PAPERLESS_TITLE_CONTENT}
                iconContent={TWIN_PAPERLESS_ICON_CONTENT}
            />
        </section>
    );
}
