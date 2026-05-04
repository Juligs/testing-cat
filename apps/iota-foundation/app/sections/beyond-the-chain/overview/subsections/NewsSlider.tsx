'use client';

import { useRef, useState } from 'react';
import { Actions, IconContent, TextLink } from 'react-ui-kit';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { SliderNavigation } from '@repo/shared/components';
import { NewsPaperData } from '@lib/utils';
import Link from 'next/link';
import { BlogPost } from '@repo/icons';
import {
    SPACE_BETWEEN_SLIDES,
    SWIPER_BREAKPOINTS,
} from '../constants/newsSliderBreakpoints.constants';

interface NewsSliderProps {
    data: NewsPaperData[];
}
export function NewsSlider({ data }: NewsSliderProps) {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const NEWS_PAGINATION_BULLET = 'news-pagination-bullets';
    const shouldShowNavigation = data.length > slidesPerView;

    const isSingleItem = data.length === 1;

    return (
        <div className="flex flex-col items-center justify-center gap-12 w-full">
            <Swiper
                className={`h-full [&>div]:items-stretch ${isSingleItem ? 'w-1/2' : 'w-full'}`}
                modules={[Scrollbar, A11y, Pagination]}
                pagination={{
                    el: `#${NEWS_PAGINATION_BULLET}`,
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
                {data.map((news, index) => (
                    <SwiperSlide key={index} className="!h-auto cursor-grab">
                        <div className="!h-full block [&>div]:h-full">
                            <IconContent icon={<BlogPost />} title={news.title} body={news.date}>
                                <Actions>
                                    <Link href={news.link} target="_blank">
                                        <TextLink text="Learn More" showIcon />
                                    </Link>
                                </Actions>
                            </IconContent>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {shouldShowNavigation && (
                <SliderNavigation
                    onPrev={() => swiperRef.current?.slidePrev()}
                    onNext={() => swiperRef.current?.slideNext()}
                    isPrevDisabled={activeSlideIndex === 0}
                    isNextDisabled={activeSlideIndex >= data.length - slidesPerView}
                    id={NEWS_PAGINATION_BULLET}
                />
            )}
        </div>
    );
}
