'use client';

import { useRef, useState } from 'react';
import { ImageCard, BREAKPOINTS, ScreenSize } from 'react-ui-kit';
import { Chip, ChipSize } from 'react-ui-kit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Scrollbar, A11y, Pagination } from 'swiper/modules';
import { SliderNavigation } from '@components';
import {
    SWIPER_BREAKPOINTS,
    SLIDES_IN_DESKTOP,
    SLIDES_IN_MOBILE,
    SPACE_BETWEEN_SLIDES,
} from '@lib/constants';
import { CardShowcase } from '@lib/airtable';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

interface InfraSliderProps {
    data: CardShowcase[];
}
const INFRA_PAGINATION_BULLET_ID = 'infra-pagination-bullets';

export function InfraSlider({ data }: InfraSliderProps) {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>(data?.[0]?.category[0] || '');
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const filteredCards = selectedCategory
        ? data.filter((card) => card.category.includes(selectedCategory))
        : data;

    const uniqueCardCategories = Array.from(new Set(data.flatMap((card) => card.category)));

    function handleCategoryClick(category: string) {
        setSelectedCategory(category);
    }
    const shouldShowNavigation = !(
        (swiperRef.current?.currentBreakpoint === BREAKPOINTS[ScreenSize.Sm].toString() &&
            filteredCards.length <= SLIDES_IN_DESKTOP) ||
        filteredCards.length <= SLIDES_IN_MOBILE
    );

    return (
        <>
            <div className="w-full flex flex-wrap gap-2 capitalize">
                {uniqueCardCategories.map((category, index) => (
                    <Chip
                        key={index}
                        label={category}
                        size={ChipSize.Large}
                        onClick={() => handleCategoryClick(category)}
                        selected={selectedCategory === category}
                    />
                ))}
            </div>
            <Swiper
                className="w-full h-full [&>div]:items-stretch"
                modules={[Scrollbar, A11y, Pagination]}
                pagination={{
                    el: `#${INFRA_PAGINATION_BULLET_ID}`,
                    clickable: true,
                }}
                spaceBetween={SPACE_BETWEEN_SLIDES}
                scrollbar={{ draggable: true }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
                onResize={(swiper) => setSlidesPerView(swiper.params.slidesPerView as number)}
                breakpoints={SWIPER_BREAKPOINTS}
            >
                {filteredCards.map((card, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                        <div className="h-full">
                            <Link href={card.link} target="_blank" rel="noopener noreferrer">
                                <ImageCard title={card.title} image={card.image} body={card.body} />
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
                    isNextDisabled={activeSlideIndex >= data.length - slidesPerView}
                    id={INFRA_PAGINATION_BULLET_ID}
                />
            )}
        </>
    );
}
