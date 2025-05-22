import { IotaTechnologyStack } from '@components';
import { IDENTITY_STACK_IMAGE_CARD_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function IdentityIotaTechnologyStack({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <IotaTechnologyStack content={IDENTITY_STACK_IMAGE_CARD_CONTENT} />
        </section>
    );
}
