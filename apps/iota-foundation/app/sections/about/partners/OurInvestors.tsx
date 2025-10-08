import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle } from 'react-ui-kit';
import { OUR_INVESTORS_TITLE_CONTENT } from './constants';

export function OurInvestors({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/about/our-partners/our_investors.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...OUR_INVESTORS_TITLE_CONTENT} />
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
