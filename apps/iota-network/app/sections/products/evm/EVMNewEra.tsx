import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle } from 'react-ui-kit';
import { EVM_NEW_ERA_VERTICAL_TITLE } from './constants';
import { FetchEVMNewEraStats } from './subsections';

export function EVMNewEra({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/evm/new_era.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...EVM_NEW_ERA_VERTICAL_TITLE} />
                    </div>
                </TwoColumnsImageTemplate>
                <FetchEVMNewEraStats />
            </div>
        </section>
    );
}
