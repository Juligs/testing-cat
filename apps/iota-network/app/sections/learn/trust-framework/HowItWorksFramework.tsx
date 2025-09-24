import { BaseSectionProps } from '@repo/shared/interfaces';
import { CtaCard, VerticalTitle } from 'react-ui-kit';
import {
    HOW_IT_WORKS_FRAMEWORK_CTA_CARD_CONTENT,
    HOW_IT_WORKS_FRAMEWORK_VERTICAL_TITLE_CONTENT,
} from './constants';
export function HowItWorksFramework({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 sm:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 xs:gap-20 sm:gap-30 w-full">
                <div className="w-full text-center">
                    <VerticalTitle
                        title={HOW_IT_WORKS_FRAMEWORK_VERTICAL_TITLE_CONTENT.title}
                        subtitle={HOW_IT_WORKS_FRAMEWORK_VERTICAL_TITLE_CONTENT.subtitle}
                        isCentered
                    />
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {HOW_IT_WORKS_FRAMEWORK_CTA_CARD_CONTENT.map((data, index) => (
                            <CtaCard
                                key={index}
                                title={data.title}
                                subtitle={data.subtitle}
                                image={data.image}
                                isVertical
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
