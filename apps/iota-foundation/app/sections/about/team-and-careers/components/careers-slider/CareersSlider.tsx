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
import { SanitizedJobData } from '@lib/utils';
import Link from 'next/link';

interface CareersSliderProps {
    data: SanitizedJobData[];
}
const ICON_PLACEHOLDER_CONTENT = {
    name: 'Thank you for your interest. Unfortunately, we are not hiring at this moment.',
    department:
        'Please check back as we will most certainly be looking for great people to join our team in the future.',
};

export function CareersSlider({ data }: CareersSliderProps) {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const JOBS_PAGINATION_BULLET_ID = 'jobs-pagination-bullets';
    const shouldShowNavigation = data.length > slidesPerView;

    if (data.length === 0) {
        return (
            <div className="h-full max-w-[464px]">
                <IconContent
                    title={ICON_PLACEHOLDER_CONTENT.name}
                    body={ICON_PLACEHOLDER_CONTENT.department}
                    filled
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center gap-12 w-full">
            <Swiper
                className="w-full h-full [&>div]:items-stretch"
                modules={[Scrollbar, A11y, Pagination]}
                pagination={{
                    el: `#${JOBS_PAGINATION_BULLET_ID}`,
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
                {data.map((job, index) => (
                    <SwiperSlide key={index} className="!h-auto cursor-grab">
                        <div className="!h-full block [&>div]:h-full">
                            <IconContent title={job.name} body={job.department} filled>
                                <Actions>
                                    <Link href={job.link} target="_blank">
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
                    id={JOBS_PAGINATION_BULLET_ID}
                />
            )}
        </div>
    );
}
