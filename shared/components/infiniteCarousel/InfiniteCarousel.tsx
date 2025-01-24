'use client';

import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

interface InfiniteCarouselProps {
    logos: string[];
}

export function InfiniteCarousel({ logos }: InfiniteCarouselProps) {
    const swiperRef = useRef<SwiperClass | null>(null);

    const duplicatedLogos = [...logos, ...logos, ...logos];

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    }, []);

    return (
        <Swiper
            loop={true}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            slidesPerView="auto"
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={2000}
            allowTouchMove={false}
            className="w-full h-full swiper-container-infinite-loop overflow-hidden"
            // Reminder: Add the following globals.css to ensure a continuous loop
            // .swiper-container-infinite-loop > .swiper-wrapper {
            //     transition-timing-function: linear !important; // Smooth and consistent transitions
            //     will-change: transform; // Optimize performance for animations
            // }
            modules={[Autoplay]}
        >
            {duplicatedLogos.map((logo, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                    <div className="flex items-center justify-center gap-4">
                        <img src={logo} className="w-auto max-h-[123px] w-max-full" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
