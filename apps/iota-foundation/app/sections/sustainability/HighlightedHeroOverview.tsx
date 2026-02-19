import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { TitleTextSize, VerticalTitle } from 'react-ui-kit';

export const HIGHLIGHTED_TEXT = {
    subtitle:
        'CCRI is a leading data provider for cryptocurrency sustainability metrics. CCRI evaluates the sustainability metrics of the IOTA Ecosystem since 2024 and deploys industry-leading measurement methodologies for its metrics generation. In the context of the Markets in Crypto-Asset (MiCA) Regulation, sustainability data gain increasingly importance.',
};

export function HighlightedHeroOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-12 xs:py-20">
                <TwoColumnsImageTemplate image="/sustainability/CCR.png">
                    <VerticalTitle {...HIGHLIGHTED_TEXT} size={TitleTextSize.ExtraSmall} />
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
