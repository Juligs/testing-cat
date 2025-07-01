import { IconContent, VerticalTitle } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HOW_IT_WORKS_VERTICAL_TITLE_CONTENT, HOW_IT_WORKS_ICON_CONTENT } from './constants';

export function HowItWorks({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/notarization/how_it_works.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...HOW_IT_WORKS_VERTICAL_TITLE_CONTENT} />
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
                    {HOW_IT_WORKS_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} filled />
                    ))}
                </div>
            </div>
        </section>
    );
}
