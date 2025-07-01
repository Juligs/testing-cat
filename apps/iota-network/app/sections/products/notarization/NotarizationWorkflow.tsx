import { VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import {
    NOTARIZATION_WORKFLOW_VERTICAL_TITLE,
    LOCKED_NOTARIZATION_CTA_CARD_CONTENT,
    DYNAMIC_NOTARIZATION_CTA_CARD_CONTENT,
    DYNAMIC_NOTARIZATION_ICON_CONTENT,
    LOCKED_NOTARIZATION_ICON_CONTENT,
} from './constants';
import { CTACardWithIconContent } from '@components/CTA-card-with-icon-content/CTACardWithIconContent';

export function NotarizationWorkflow({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 w-full">
                <VerticalTitle {...NOTARIZATION_WORKFLOW_VERTICAL_TITLE} isCentered />
                <CTACardWithIconContent
                    content={LOCKED_NOTARIZATION_CTA_CARD_CONTENT}
                    iconContent={LOCKED_NOTARIZATION_ICON_CONTENT}
                />
                <CTACardWithIconContent
                    content={DYNAMIC_NOTARIZATION_CTA_CARD_CONTENT}
                    iconContent={DYNAMIC_NOTARIZATION_ICON_CONTENT}
                />
            </div>
        </section>
    );
}
