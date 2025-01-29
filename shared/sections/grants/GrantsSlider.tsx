'use client';

import { useState, useRef } from 'react';
import { ImageCard, BREAKPOINTS, ScreenSize } from 'react-ui-kit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { SliderNavigation } from '../../components';
import { Scrollbar, A11y, Pagination } from 'swiper/modules';
import { GrantsCardData } from '../../utils';
import {
    SWIPER_BREAKPOINTS,
    SPACE_BETWEEN_SLIDES,
    SLIDES_IN_DESKTOP,
    SLIDES_IN_MOBILE,
} from '../../constants';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { TextLink } from 'react-ui-kit';

interface GrantsSliderProps {
    data: GrantsCardData[];
    itemsToShow?: number;
}
const GRANTS_PAGINATION_BULLET_ID = 'grants-pagination-bullets';

export function GrantSlider({ data, itemsToShow = 6 }: GrantsSliderProps) {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const sortedGrantsData = data
        .sort((a, b) => {
            if (a.websitePosition === undefined) return -1;
            if (b.websitePosition === undefined) return -1;

            return a.websitePosition - b.websitePosition;
        })
        .slice(0, itemsToShow);

    const shouldShowNavigation = !(
        (swiperRef.current?.currentBreakpoint === BREAKPOINTS[ScreenSize.Sm].toString() &&
            sortedGrantsData.length <= SLIDES_IN_DESKTOP) ||
        sortedGrantsData.length <= SLIDES_IN_MOBILE
    );

    return (
        <div className="flex flex-col items-center gap-12 w-full">
            <Swiper
                className="w-full h-full [&>div]:items-stretch !p-6 !-m-6"
                modules={[Scrollbar, A11y, Pagination]}
                pagination={{
                    el: `#${GRANTS_PAGINATION_BULLET_ID}`,
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
                {sortedGrantsData.map((card) => (
                    <SwiperSlide key={card.title} className="!h-auto">
                        <div className="!h-full block [&>div]:h-full">
                            <ImageCard title={card.title} image={card.image} body={card.body}>
                                {card.websiteTwitter && (
                                    <Link
                                        href={card.websiteTwitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TextLink text="X Account" showIcon />
                                    </Link>
                                )}
                                <Link href={card.link} target="_blank" rel="noopener noreferrer">
                                    <TextLink text="Website" showIcon />
                                </Link>
                            </ImageCard>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {shouldShowNavigation && (
                <SliderNavigation
                    onPrev={() => swiperRef.current?.slidePrev()}
                    onNext={() => swiperRef.current?.slideNext()}
                    isPrevDisabled={activeSlideIndex === 0}
                    isNextDisabled={activeSlideIndex >= sortedGrantsData.length - slidesPerView}
                    id={GRANTS_PAGINATION_BULLET_ID}
                />
            )}
        </div>
    );
}
