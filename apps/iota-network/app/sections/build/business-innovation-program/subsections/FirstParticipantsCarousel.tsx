'use client';

import { useRef, useState } from 'react';
import { Actions, ImageCard } from 'react-ui-kit';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { SPACE_BETWEEN_SLIDES, SWIPER_BREAKPOINTS } from '@repo/shared/constants';
import { SliderNavigation } from '@repo/shared/components';
import { FIRST_PARTICIPANTS_IMAGE_CARD } from '../constants';
import Link from 'next/link';

export function FirstParticipantsCarousel() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const PARTICIPANTS_PAGINATION_BULLET_ID = 'participants-pagination-bullets';

    return (
        <div className="flex flex-col items-center justify-center gap-12 w-full">
            <Swiper
                className="w-full h-full [&>div]:items-stretch !p-4 !-m-4"
                modules={[Scrollbar, A11y, Pagination]}
                pagination={{
                    el: `#${PARTICIPANTS_PAGINATION_BULLET_ID}`,
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
                {FIRST_PARTICIPANTS_IMAGE_CARD.map((data) => (
                    <SwiperSlide key={data.title} className="!h-auto">
                        <div className="!h-full block [&>div]:h-full">
                            <Actions>
                                <Link
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="!h-full block [&>div]:h-full"
                                >
                                    <ImageCard {...data} />
                                </Link>
                            </Actions>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderNavigation
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
                isPrevDisabled={activeSlideIndex === 0}
                isNextDisabled={
                    activeSlideIndex >= FIRST_PARTICIPANTS_IMAGE_CARD.length - slidesPerView
                }
                id={PARTICIPANTS_PAGINATION_BULLET_ID}
            />
        </div>
    );
}
