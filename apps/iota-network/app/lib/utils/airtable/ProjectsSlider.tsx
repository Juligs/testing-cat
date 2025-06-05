'use client';

import { SliderNavigation } from '@repo/shared/components';
import {
    SLIDES_IN_DESKTOP,
    SLIDES_IN_MOBILE,
    SPACE_BETWEEN_SLIDES,
    SWIPER_BREAKPOINTS,
} from '@repo/shared/constants';
import { CardShowcase } from '@repo/shared/utils';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { BREAKPOINTS, ImageCard, ScreenSize } from 'react-ui-kit';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';

interface ProjectsProps {
    data: CardShowcase[];
}

const PROJECTS_PAGINATION_BULLET_ID = 'projects-pagination-bullets';

export function ProjectsSlider({ data }: ProjectsProps) {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const ITEMS_TO_SHOW = 6;

    const sortedData = [...data]
        .sort((a, b) => {
            if (a.websitePosition === undefined) return 1;
            if (b.websitePosition === undefined) return -1;

            return a.websitePosition - b.websitePosition;
        })
        .slice(0, ITEMS_TO_SHOW);

    const shouldShowNavigation = !(
        (swiperRef.current?.currentBreakpoint === BREAKPOINTS[ScreenSize.Sm].toString() &&
            sortedData.length <= SLIDES_IN_DESKTOP) ||
        sortedData.length <= SLIDES_IN_MOBILE
    );

    return (
        <div className="flex flex-col items-center gap-12 w-full">
            <Swiper
                className="w-full h-full [&>div]:items-stretch !p-4 !-m-4"
                modules={[A11y, Pagination]}
                pagination={{
                    el: `#${PROJECTS_PAGINATION_BULLET_ID}`,
                    clickable: true,
                }}
                spaceBetween={SPACE_BETWEEN_SLIDES}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
                onResize={(swiper) => setSlidesPerView(swiper.params.slidesPerView as number)}
                breakpoints={SWIPER_BREAKPOINTS}
            >
                {sortedData.map((card, index) => (
                    <SwiperSlide key={card.title} className="!h-auto">
                        {card.link ? (
                            <Link
                                key={`${card.title}-${index}`}
                                className="!h-full block [&>div]:h-full"
                                href={card.link ?? ''}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ImageCard
                                    title={card.title}
                                    overline={card.category.join(', ')}
                                    body={card.body}
                                    image={card.image}
                                />
                            </Link>
                        ) : (
                            <ImageCard
                                title={card.title}
                                overline={card.category.join(', ')}
                                body={card.body}
                                image={card.image}
                                isHoverable={false}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {shouldShowNavigation && (
                <SliderNavigation
                    onPrev={() => swiperRef.current?.slidePrev()}
                    onNext={() => swiperRef.current?.slideNext()}
                    isPrevDisabled={activeSlideIndex === 0}
                    isNextDisabled={activeSlideIndex >= sortedData.length - slidesPerView}
                    id={PROJECTS_PAGINATION_BULLET_ID}
                />
            )}
        </div>
    );
}
