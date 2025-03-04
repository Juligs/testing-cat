'use client';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { CtaCard, ImageCard, VerticalTitle } from 'react-ui-kit';
import {
    OUR_FOCUS_AREAS_CTA_CARD_CONTENT,
    OUR_FOCUS_AREAS_IMAGE_CARD_CONTENT,
    OUR_FOCUS_AREAS_VERTICAL_TITLE_CONTENT,
} from './constants';

export function OurFocusAreas({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 sm:py-20 lg:py-30 flex justify-center items-center flex-col gap-20 xs:gap-30 w-full">
                <div className="w-full xs:w-[650px] text-center">
                    <VerticalTitle {...OUR_FOCUS_AREAS_VERTICAL_TITLE_CONTENT} />
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {OUR_FOCUS_AREAS_CTA_CARD_CONTENT.map((data, index) => (
                            <CtaCard {...data} key={index} brand isVertical />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {OUR_FOCUS_AREAS_IMAGE_CARD_CONTENT.map((data, index) => (
                            <ImageCard {...data} key={index} isHoverable={false} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
