'use client';

import { useRef, useState, useEffect } from 'react';
import { ImageCard, ImageCardSize } from 'react-ui-kit';
import { Chip, ChipSize } from 'react-ui-kit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Scrollbar, A11y, Pagination } from 'swiper/modules';
import { SliderNavigation } from '../../../components';
import { SWIPER_BREAKPOINTS, SPACE_BETWEEN_SLIDES } from '../../../constants';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProposalCards } from '../../../utils';

interface ProposalsSliderDataProps {
    data: ProposalCards[];
}

const PROPOSALS_PAGINATION_BULLET_ID = 'proposals-pagination-bullets';

export function ProposalsSliderData({ data }: ProposalsSliderDataProps) {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string>(data?.[0]?.status || '');
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const filteredCards = selectedStatus
        ? data.filter((card) => card.status.toLowerCase() === selectedStatus.toLowerCase())
        : data;

    const uniqueStatuses = Array.from(new Set(data.map((card) => card.status)));
    const currentBreakpoint = swiperRef.current?.currentBreakpoint || '';
    const swiperKey = `${filteredCards.map((card) => card.title).join('-')}-${currentBreakpoint}`;

    const handleStatusClick = (status: string) => {
        setSelectedStatus(status);
        setActiveSlideIndex(0);
        swiperRef.current?.slideTo(0);
    };

    const statusLabelMap: Record<string, string> = {
        accepted: 'Open',
        closed: 'Closed',
    };

    useEffect(() => {
        swiperRef.current?.update();
    }, [filteredCards]);

    const shouldShowNavigation = filteredCards.length > slidesPerView;

    return (
        <div className="flex flex-col w-full gap-12 items-center">
            <div className="w-full flex flex-wrap gap-2">
                {uniqueStatuses.map((status, index) => (
                    <Chip
                        key={index}
                        label={statusLabelMap[status.toLowerCase()] || status}
                        size={ChipSize.Large}
                        onClick={() => handleStatusClick(status)}
                        selected={selectedStatus === status}
                    />
                ))}
            </div>

            <Swiper
                key={swiperKey}
                className="w-full h-full [&>div]:items-stretch !p-6 !-m-6"
                modules={[Scrollbar, A11y, Pagination]}
                pagination={{
                    el: `#${PROPOSALS_PAGINATION_BULLET_ID}`,
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
                {filteredCards.map((card) => (
                    <SwiperSlide key={card.title} className="!h-auto">
                        <div className="!h-full block [&>div]:h-full">
                            <Link href={card.link} className="!h-full block [&>div]:h-full">
                                <ImageCard
                                    title={card.title}
                                    image={card.image}
                                    body={card.body}
                                    overline={card.overline}
                                    size={ImageCardSize.Small}
                                />
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
                    isNextDisabled={activeSlideIndex >= filteredCards.length - slidesPerView}
                    id={PROPOSALS_PAGINATION_BULLET_ID}
                />
            )}
        </div>
    );
}
