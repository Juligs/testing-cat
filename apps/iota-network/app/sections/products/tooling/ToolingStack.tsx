import { IotaTechnologyStack } from '@components';
import { TOOLING_STACK_IMAGE_CARD_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function ToolingStack({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <IotaTechnologyStack content={TOOLING_STACK_IMAGE_CARD_CONTENT} />
        </section>
    );
}
