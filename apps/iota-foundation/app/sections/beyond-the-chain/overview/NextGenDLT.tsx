import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { NEXT_GEN_VERTICAL_TITLE } from './constants';
import { VerticalTitle } from 'react-ui-kit';

export function NextGenDLT({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/news/events/btc.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...NEXT_GEN_VERTICAL_TITLE} />
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
