import { IotaTechnologyStack } from '@components';
import { TOKENIZATION_STACK_IMAGE_CARD_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function TokenizationStack({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <IotaTechnologyStack content={TOKENIZATION_STACK_IMAGE_CARD_CONTENT} />
        </section>
    );
}
