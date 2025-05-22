import { IotaTechnologyStack } from '@components';
import { STACK_IMAGE_CARD_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function EVMIotaTechnologyStack({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <IotaTechnologyStack content={STACK_IMAGE_CARD_CONTENT} />
        </section>
    );
}
