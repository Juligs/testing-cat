import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, IconContent } from 'react-ui-kit';
import {
    INDUSTRY_APPLICATIONS_VERTICAL_TITLE,
    INDUSTRY_APPLICATION_ICONT_CONTENT,
} from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';

export function IndustryApplications({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/trust-hierarchies/what_you_can_build.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...INDUSTRY_APPLICATIONS_VERTICAL_TITLE} />
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 md:grid-cols-5 gap-6">
                    {INDUSTRY_APPLICATION_ICONT_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} filled />
                    ))}
                </div>
            </div>
        </section>
    );
}
