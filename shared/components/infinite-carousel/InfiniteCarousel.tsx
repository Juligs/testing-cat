'use client';

import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

interface InfiniteCarouselProps {
    logos: string[];
    itemWidth?: number;
}

export function InfiniteCarousel({ logos, itemWidth = 190 }: InfiniteCarouselProps) {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [swiperWidth, setSwiperWidth] = useState(0);
    const [staticCarousel, setStaticCarousel] = useState(false);
    const [isLoop, setIsLoop] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const totalItemsWidth = logos.length * itemWidth;
            const windowWidth = window.innerWidth;

            setSwiperWidth(windowWidth);
            setStaticCarousel(totalItemsWidth <= windowWidth);
            setIsLoop(totalItemsWidth > windowWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [logos, itemWidth]);

    useEffect(() => {
        if (swiperRef.current && !staticCarousel) {
            swiperRef.current.autoplay.start();
        }
    }, [staticCarousel]);

    return (
        <Swiper
            loop={isLoop}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            slidesPerView="auto"
            autoplay={{
                delay: 0,
                disableOnInteraction: !staticCarousel,
            }}
            speed={2000}
            allowTouchMove={!staticCarousel}
            className={`w-full h-full overflow-hidden ${isLoop ? 'swiper-container-infinite-loop' : ''} ${staticCarousel ? 'static-swiper' : ''}`}
            // Reminder: Add the following globals.css to ensure a continuous loop
            // .swiper-container-infinite-loop > .swiper-wrapper {
            //     transition-timing-function: linear !important; // Smooth and consistent transitions
            //     will-change: transform; // Optimize performance for animations
            // }
            modules={[Autoplay]}
        >
            {logos.map((logo, index) => (
                <SwiperSlide key={index} style={{ width: `${itemWidth}px` }}>
                    <div className="flex items-center justify-center gap-4">
                        <img src={logo} className="w-auto max-h-[123px] w-max-full" alt={logo} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
