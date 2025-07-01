import { CTACardWithIconContent } from '@components';
import { LIBS_CTA_CARD_CONTENT, LIBS_ICON_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Libs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <CTACardWithIconContent
                    content={LIBS_CTA_CARD_CONTENT}
                    iconContent={LIBS_ICON_CONTENT}
                />
            </div>
        </section>
    );
}
