import {
    DECENTRALIZED_FINANCE_ICON_CONTENT,
    DECENTRALIZED_FINANCE_VERTICAL_TITLE_CONTENT,
} from './constants';

import { BaseSectionProps } from '@repo/shared/interfaces';
import { FocusAreaSection } from './components';
import { ShowcaseProject } from '../showcases/showcasesProjects.enums';

export function DecentralizedFinance({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <FocusAreaSection
                image="/learn/focus-areas/sections/rwa-cards/decentralized_finance.png"
                verticalTitleContent={DECENTRALIZED_FINANCE_VERTICAL_TITLE_CONTENT}
                iconContentColumns={DECENTRALIZED_FINANCE_ICON_CONTENT}
                showcases={[ShowcaseProject.Virtue, ShowcaseProject.PoolsFinance]}
            />
        </section>
    );
}
