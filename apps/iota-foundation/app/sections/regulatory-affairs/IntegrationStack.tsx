import { BaseSectionProps } from '@repo/shared/interfaces';
import { ImageCard, ImageCardSize, VerticalTitle } from 'react-ui-kit';
import {
    INTEGRATION_STACK_IMAGE_CARD_CONTENT,
    INTEGRATION_STACK_VERTICAL_TITLE,
} from './constants';

export function IntegrationStack({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="max-w-[464px] md:min-w-[464px]">
                    <VerticalTitle {...INTEGRATION_STACK_VERTICAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {INTEGRATION_STACK_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard
                            key={index}
                            title={data.title}
                            subtitle={data.subtitle}
                            image={data.image}
                            size={ImageCardSize.Small}
                            isHoverable={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
