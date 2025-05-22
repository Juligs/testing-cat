import { BaseSectionProps } from '@repo/shared/interfaces';
import {
    REALIZE_TOKENIZATION_VERTICAL_TITLE_CONTENT,
    REALIZE_TOKENIZATION_ICON_CONTENT,
} from './constants';
import { VerticalTitleAndGrid } from '@repo/shared/components';

export function RealizeTokenization({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <VerticalTitleAndGrid
                image="/learn/realize/realize_tokenization.png"
                verticalTitle={REALIZE_TOKENIZATION_VERTICAL_TITLE_CONTENT}
                iconContent={REALIZE_TOKENIZATION_ICON_CONTENT}
            />
        </section>
    );
}
