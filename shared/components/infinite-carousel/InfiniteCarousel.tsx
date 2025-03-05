'use client';

import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { StaticImageData } from 'node_modules/next/image';

interface InfiniteCarouselProps {
    logos: (string | StaticImageData)[];
    itemWidth?: number;
}

export function InfiniteCarousel({ logos, itemWidth = 190 }: InfiniteCarouselProps) {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [swiperWidth, setSwiperWidth] = useState(0);
    const [staticCarousel, setStaticCarousel] = useState(false);
    const [isLoop, setIsLoop] = useState(true);
    const [key, setKey] = useState(0);
    const [maxHeight, setMaxHeight] = useState('max-h-[123px]');

    useEffect(() => {
        if (window.innerWidth < 712) {
            setMaxHeight('max-h-[90px]');
        } else {
            setMaxHeight('max-h-[123px]');
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const totalItemsWidth = logos.length * itemWidth;
            const windowWidth = window.innerWidth;

            const isStatic = logos.length <= 2 || totalItemsWidth <= windowWidth;

            setSwiperWidth(windowWidth);
            setStaticCarousel(isStatic);
            setIsLoop(!isStatic && logos.length > 2);

            setKey((prevKey) => prevKey + 1);
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
            key={key}
            loop={isLoop}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            slidesPerView="auto"
            autoplay={isLoop ? { delay: 0, disableOnInteraction: !staticCarousel } : false}
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
                    <div className="flex items-center justify-center overflow-hidden">
                        <img
                            src={typeof logo === 'string' ? logo : logo.src}
                            className={`w-auto ${maxHeight} w-max-full`}
                            alt={typeof logo === 'string' ? logo : logo.src}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
