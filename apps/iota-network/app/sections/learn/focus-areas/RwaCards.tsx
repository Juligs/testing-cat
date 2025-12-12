import { BaseSectionProps } from '@repo/shared/interfaces';
import { ImageCard, VerticalTitle } from 'react-ui-kit';
import { RWA_VERTICAL_TITLE, RWA_IMAGE_CARD_CONTENT } from './constants';

export function RwaCards({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 w-full">
                <div className="w-full text-center max-w-[952px]">
                    <VerticalTitle {...RWA_VERTICAL_TITLE} />
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-6">
                        {RWA_IMAGE_CARD_CONTENT.map((data, index) => (
                            <ImageCard key={index} {...data} isHoverable={false} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
