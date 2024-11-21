'use client';

import { useState, useRef } from 'react';
import { ImageCard, BREAKPOINTS, ScreenSize } from 'react-ui-kit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { SliderNavigation } from '@components';
import { Scrollbar, A11y, Pagination } from 'swiper/modules';
import { GrantsCardData } from '@lib/airtable';
import {
    SWIPER_BREAKPOINTS,
    SPACE_BETWEEN_SLIDES,
    SLIDES_IN_DESKTOP,
    SLIDES_IN_MOBILE,
} from '@lib/constants';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

interface GrantsSliderProps {
    data: GrantsCardData[];
}
const GRANTS_PAGINATION_BULLET_ID = 'grants-pagination-bullets';

export function GrantSlider({ data }: GrantsSliderProps) {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const handleClick = (url?: string) => {
        url ? window.open(url, '_blank', 'noopener,noreferrer') : null;
    };
    const sortedGrantsData = data
        .sort((a, b) => {
            if (a.websitePosition === undefined) return -1;
            if (b.websitePosition === undefined) return -1;

            return a.websitePosition - b.websitePosition;
        })
        .slice(0, 6);

    const shouldShowNavigation = !(
        (swiperRef.current?.currentBreakpoint === BREAKPOINTS[ScreenSize.Sm].toString() &&
            sortedGrantsData.length <= SLIDES_IN_DESKTOP) ||
        sortedGrantsData.length <= SLIDES_IN_MOBILE
    );

    return (
        <div className="flex flex-col items-center gap-12 w-full">
            <Swiper
                className="w-full h-full [&>div]:items-stretch !py-8 !-my-8"
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
                {sortedGrantsData.map((card, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                        <div className="!h-full">
                            <Link
                                href={card.link}
                                className="block h-full [&>div]:h-full"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ImageCard
                                    title={card.title}
                                    image={card.image}
                                    body={card.body}
                                    elevated
                                    subtitle={
                                        <span onClick={() => handleClick(card.websiteTwitter)}>
                                            {card.subtitle}
                                        </span>
                                    }
                                />
                            </Link>
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
