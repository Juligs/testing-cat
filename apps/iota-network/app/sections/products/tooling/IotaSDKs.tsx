import { CTACardWithIconContent } from '@components';
import { INTEGRATION_STACK_CTA_CARD_CONTENT, IOTA_SDKS_ICON_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function IotaSDKs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <CTACardWithIconContent
                content={INTEGRATION_STACK_CTA_CARD_CONTENT}
                iconContent={IOTA_SDKS_ICON_CONTENT}
            />
        </section>
    );
}
