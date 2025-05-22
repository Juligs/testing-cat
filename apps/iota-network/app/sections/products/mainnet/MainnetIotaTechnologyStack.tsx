import { MAINNET_STACK_IMAGE_CARD_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { IotaTechnologyStack } from '@components';

export function MainnetIotaTechnologyStack({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <IotaTechnologyStack content={MAINNET_STACK_IMAGE_CARD_CONTENT} />
        </section>
    );
}
