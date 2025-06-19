'use client';

import { useRef, useState } from 'react';
import { Actions, IconContent, TextLink } from 'react-ui-kit';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { SPACE_BETWEEN_SLIDES, SWIPER_BREAKPOINTS } from '@repo/shared/constants';
import { SliderNavigation } from '@repo/shared/components';
import { LATEST_REGULATORY_CONTENT } from '../constants/latestContent.constants';
import Link from 'next/link';

export function LatestRegulatoryCarousel() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const LATEST_PAGINATION_BULLET_ID = 'latest-carousel-pagination-bullets';

    return (
        <div className="flex flex-col items-center justify-center gap-12 w-full">
            <Swiper
                className="w-full h-full [&>div]:items-stretch !p-4 !-m-4"
                modules={[Scrollbar, A11y, Pagination]}
                pagination={{
                    el: `#${LATEST_PAGINATION_BULLET_ID}`,
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
                {LATEST_REGULATORY_CONTENT.map((data, index) => (
                    <SwiperSlide key={index} className="!h-auto cursor-grab">
                        <div className="!h-full block [&>div]:h-full">
                            <IconContent {...data}>
                                <Actions>
                                    <Link
                                        href={data.link}
                                        target="_blank"
                                        rel="nopener noreferrer"
                                        aria-label={`Read blog post: ${data.title}`}
                                    >
                                        <TextLink text="Read the blog post" showIcon />
                                    </Link>
                                </Actions>
                            </IconContent>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderNavigation
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
                isPrevDisabled={activeSlideIndex === 0}
                isNextDisabled={
                    activeSlideIndex >= LATEST_REGULATORY_CONTENT.length - slidesPerView
                }
                id={LATEST_PAGINATION_BULLET_ID}
            />
        </div>
    );
}
