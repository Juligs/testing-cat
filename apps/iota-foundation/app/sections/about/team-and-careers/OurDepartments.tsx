import { BaseSectionProps } from '@repo/shared/interfaces';
import { ImageCard, VerticalTitle } from 'react-ui-kit';
import { OUR_DEPARTMENTS_VERTICAL_TITLE, OUR_DEPARTMENTS_IMAGE_CARD_CONTENT } from './constants';

export function OurDepartments({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20 overflow-hidden">
                <div className="w-full text-start break-words">
                    <VerticalTitle {...OUR_DEPARTMENTS_VERTICAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {OUR_DEPARTMENTS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
