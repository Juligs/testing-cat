import {
    REAL_WORLD_USE_CASES_VERTICAL_TITLE,
    REAL_WORLD_USE_CASES_IMAGE_CARD_CONTENT,
} from './constants';
import { ImageCard, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function RealWorldUseCases({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <VerticalTitle {...REAL_WORLD_USE_CASES_VERTICAL_TITLE} isCentered />

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
                    {REAL_WORLD_USE_CASES_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
