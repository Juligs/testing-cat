'use client';

import { useRef, useState } from 'react';
import {
    ImageCard,
    Button,
    ButtonVariant,
    ButtonSize,
    BREAKPOINTS,
    ScreenSize,
} from 'react-ui-kit';
import { Chip, ChipSize } from 'react-ui-kit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Scrollbar, A11y } from 'swiper/modules';
import { Left, Right } from '@repo/icons';
import { SWIPER_BREAKPOINTS, SLIDES_IN_DESKTOP, SLIDES_IN_MOBILE } from '@lib/constants';
import { CardShowcase } from '@lib/airtable';
import 'swiper/css';

interface InfraSliderProps {
    data: CardShowcase[];
}
export function InfraSlider({ data }: InfraSliderProps) {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>(
        data[0] ? data[0].category : '',
    );
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const filteredCards = selectedCategory
        ? data.filter((card) => card.category === selectedCategory)
        : data;

    const uniqueCardCategories = Array.from(new Set(data.map((card) => card.category)));

    function handleCategoryClick(category: string) {
        setSelectedCategory(category);
    }
    return (
        <>
            <div className="w-full flex flex-wrap gap-2">
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
                modules={[Scrollbar, A11y]}
                spaceBetween={24}
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
                            <ImageCard title={card.title} image={card.image} body={card.body} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {!(
                (swiperRef.current?.currentBreakpoint === BREAKPOINTS[ScreenSize.Sm].toString() &&
                    filteredCards.length <= SLIDES_IN_DESKTOP) ||
                filteredCards.length <= SLIDES_IN_MOBILE
            ) && (
                <div className="flex w-full gap-6 justify-center xs:justify-end">
                    <Button
                        onClick={() => swiperRef.current?.slidePrev()}
                        variant={ButtonVariant.Secondary}
                        size={ButtonSize.Large}
                        icon={<Left />}
                        disabled={activeSlideIndex === 0}
                    />
                    <Button
                        onClick={() => swiperRef.current?.slideNext()}
                        icon={<Right />}
                        variant={ButtonVariant.Secondary}
                        size={ButtonSize.Large}
                        disabled={activeSlideIndex >= filteredCards.length - slidesPerView}
                    />
                </div>
            )}
        </>
    );
}
