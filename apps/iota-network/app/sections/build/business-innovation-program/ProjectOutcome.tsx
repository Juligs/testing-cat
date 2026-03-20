import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, IconContent } from 'react-ui-kit';
import { PROJECT_OUTCOME_VERTICAL_TITLE, PROJECT_OUTCOME_ICON_CONTENT } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';

export function ProjectOutcome({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/build/business-innovation/project_outcome.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...PROJECT_OUTCOME_VERTICAL_TITLE}></VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {PROJECT_OUTCOME_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} filled />
                    ))}
                </div>
            </div>
        </section>
    );
}
