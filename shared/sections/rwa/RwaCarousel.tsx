'use client';

import { useRef, useState } from 'react';
import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import { useTheme } from 'react-ui-kit/client';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { SliderNavigation } from '../../components';
import { SPACE_BETWEEN_SLIDES } from '../../constants';
import { getSharedSectionLink } from '../../utils';
import { CTA_CAROUSEL_CONTENT, LOGOS_CAROUSEL } from './rwaContent.constants';
import 'swiper/css';
import 'swiper/css/pagination';

export function RwaCarousel() {
    const themeContext = useTheme();
    const ctaSwiperRef = useRef<SwiperCore | null>(null);
    const logosSwiperRef = useRef<SwiperCore | null>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (index: number) => {
        setActiveSlideIndex(index);

        if (ctaSwiperRef.current) {
            ctaSwiperRef.current.slideTo(index);
        }
        if (logosSwiperRef.current) {
            logosSwiperRef.current.slideTo(index);
        }
    };

    const handlePrev = () => {
        const newIndex = Math.max(activeSlideIndex - 1, 0);
        handleSlideChange(newIndex);
    };

    const handleNext = () => {
        const newIndex = activeSlideIndex + 1;
        handleSlideChange(newIndex);
    };

    const RWA_PAGINATION_BULLET_ID = 'rwa-pagination-bullets';

    return (
        <div className="flex flex-col items-center justify-center gap-12 w-full">
            <Swiper
                className="w-full h-full [&>div]:items-stretch"
                modules={[Scrollbar, A11y, Pagination]}
                pagination={{
                    el: `#${RWA_PAGINATION_BULLET_ID}`,
                    clickable: true,
                }}
                spaceBetween={SPACE_BETWEEN_SLIDES}
                onBeforeInit={(swiper) => {
                    ctaSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
            >
                {CTA_CAROUSEL_CONTENT.map((text, index) => (
                    <SwiperSlide key={index} className="!h-auto cursor-grab">
                        <div className="!h-full block sm:!h-auto [&>div]:h-full">
                            <CtaCard
                                title={text.title}
                                subtitle={text.subtitle}
                                image={text.image}
                                brand
                            >
                                <Actions>
                                    <a
                                        href={getSharedSectionLink(text.link, themeContext?.theme)}
                                        key={index}
                                        aria-label={`Visit ${text.title}`}
                                    >
                                        <TextLink text={text.text} showIcon />
                                    </a>
                                </Actions>
                            </CtaCard>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderNavigation
                onPrev={handlePrev}
                onNext={handleNext}
                isPrevDisabled={activeSlideIndex === 0}
                isNextDisabled={activeSlideIndex === CTA_CAROUSEL_CONTENT.length - 1}
                id={RWA_PAGINATION_BULLET_ID}
            />

            <Swiper
                className="w-full flex flex-row flex-wrap "
                modules={[Scrollbar, A11y, Pagination]}
                pagination={{
                    el: `#${RWA_PAGINATION_BULLET_ID}`,
                    clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={SPACE_BETWEEN_SLIDES}
                onBeforeInit={(swiper) => {
                    logosSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
                autoHeight
            >
                {Object.entries(LOGOS_CAROUSEL).map(([key, images]) => (
                    <SwiperSlide key={key}>
                        <div className="grid grid-cols-2 sm:grid-cols-none sm:flex sm:flex-wrap items-center justify-center  gap-6 cursor-grab ">
                            {images.map((logo) => (
                                <img
                                    key={logo}
                                    src={logo}
                                    className="w-auto max-h-[123px] object-contain max-w-full"
                                    alt={logo}
                                />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
