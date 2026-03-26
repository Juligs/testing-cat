import {
    TRADE_AND_SUPPLY_ICON_CONTENT,
    TRADE_AND_SUPPLY_VERTICAL_TITLE_CONTENT,
} from './constants';

import { BaseSectionProps } from '@repo/shared/interfaces';
import { FocusAreaSection } from './components';
import { ShowcaseProject } from '../showcases/showcasesProjects.enums';

export function TradeAndSupply({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <FocusAreaSection
                image="/shared/supply_chains.png"
                verticalTitleContent={TRADE_AND_SUPPLY_VERTICAL_TITLE_CONTENT}
                iconContentColumns={TRADE_AND_SUPPLY_ICON_CONTENT}
                showcases={[ShowcaseProject.Twin, ShowcaseProject.Kalalohko]}
            />
        </section>
    );
}
