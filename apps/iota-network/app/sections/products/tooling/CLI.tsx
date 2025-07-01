import { CTACardWithIconContent } from '@components';
import { CLI_CTA_CARD_CONTENT, CLI_ICON_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function CLI({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <CTACardWithIconContent
                    content={CLI_CTA_CARD_CONTENT}
                    iconContent={CLI_ICON_CONTENT}
                />
            </div>
        </section>
    );
}
