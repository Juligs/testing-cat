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
import { ComponentProps } from 'react';
import { Left, Right } from '@repo/icons';
import { SWIPER_BREAKPOINTS, SLIDES_IN_DESKTOP, SLIDES_IN_MOBILE } from '@lib/constants';
import 'swiper/css';

type Card = Omit<ComponentProps<typeof ImageCard>, 'elevated' | 'inverted' | 'size'>;
type CardShowcase = Card & { category: string };
const MOCK_CARDS: CardShowcase[] = [
    {
        title: 'IOTA Streams',
        image: 'https://placehold.co/328x160',
        body: 'lorem ipsum',
        category: 'wallet',
    },
    {
        title: 'Explorers',
        image: 'https://placehold.co/328x160',
        body: 'lorem ipsum',
        category: 'Explorers',
    },
    {
        title: 'RPCs',
        image: 'https://placehold.co/328x160',
        body: 'lorem ipsum',
        category: 'RPCs',
    },
    {
        title: 'RPCs',
        image: 'https://placehold.co/328x160',
        body: 'lorem ipsum',
        category: 'RPCs',
    },
    {
        title: 'Oracles',
        image: 'https://placehold.co/328x160',
        body: 'lorem ipsum',
        category: 'Oracles',
    },
    {
        title: 'Bridges',
        image: 'https://placehold.co/328x160',
        body: 'lorem ipsum',
        category: 'Bridges',
    },
    {
        title: 'Bridges',
        image: 'https://placehold.co/328x160',
        body: 'lorem ipsum',
        category: 'Bridges',
    },
    {
        title: 'Bridges',
        image: 'https://placehold.co/328x160',
        body: 'lorem ipsum',
        category: 'Bridges',
    },
    {
        title: 'Bridges',
        image: 'https://placehold.co/328x160',
        body: 'lorem ipsum',
        category: 'Bridges',
    },
];

export function InfraSlider() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>(
        MOCK_CARDS[0] ? MOCK_CARDS[0].category : '',
    );
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const filteredCards = selectedCategory
        ? MOCK_CARDS.filter((card) => card.category === selectedCategory)
        : MOCK_CARDS;

    const uniqueCardCategories = Array.from(new Set(MOCK_CARDS.map((card) => card.category)));

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
