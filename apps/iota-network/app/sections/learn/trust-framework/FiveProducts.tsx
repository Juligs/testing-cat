import { BaseSectionProps } from '@repo/shared/interfaces';
import { FIVE_PRODUCTS_PAGE } from './constants';
import { TrustFramework } from '@components';

export function FiveProducts({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 sm:py-20 lg:py-30">
                <TrustFramework verticalTitle={FIVE_PRODUCTS_PAGE} />
            </div>
        </section>
    );
}
