import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, ImageCard } from 'react-ui-kit';
import { CONNECTION_VERTICAL_TITLE, CONNECTION_IMAGE_CARD_CONTENT } from './constants';

export function Connection({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                    <VerticalTitle {...CONNECTION_VERTICAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {CONNECTION_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard {...data} key={index} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
