import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, ImageCard } from 'react-ui-kit';
import { HOW_IT_WORKS_VERTICAL_TITLE, HOW_IT_WORKS_IMAGE_CARD_CONTENT } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';

export function HowItWorks({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/identity/how-it-works/how_it_works.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...HOW_IT_WORKS_VERTICAL_TITLE} />
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {HOW_IT_WORKS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
