'use client';

import { ImageCard } from 'react-ui-kit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Pagination } from 'swiper/modules';
import { GrantsCardData } from '@lib/airtable';
import { SWIPER_BREAKPOINTS, SPACE_BETWEEN_SLIDES } from '@lib/constants';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

interface GrantsSliderProps {
    data: GrantsCardData[];
}

export function GrantSlider({ data }: GrantsSliderProps) {
    const handleClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    const sortedGrantsData = data
        .sort((a, b) => {
            if (a.websitePosition === undefined) return -1;
            if (b.websitePosition === undefined) return -1;

            return a.websitePosition - b.websitePosition;
        })
        .slice(0, 6);

    return (
        <div className="flex flex-col items-center gap-12 w-full">
            <Swiper
                className="w-full h-full [&>div]:items-stretch !py-8 !-my-8"
                pagination={{
                    el: '#swiper-pagination-custom',
                    clickable: true,
                }}
                modules={[Scrollbar, A11y, Pagination]}
                breakpoints={SWIPER_BREAKPOINTS}
                spaceBetween={SPACE_BETWEEN_SLIDES}
            >
                {sortedGrantsData.map((card, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                        <div className="!h-full">
                            <Link
                                href={card.link}
                                className="block h-full [&>div]:h-full"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ImageCard
                                    title={card.title}
                                    image={card.image}
                                    body={card.body}
                                    elevated
                                    subtitle={
                                        <span
                                            onClick={() =>
                                                handleClick(card.websiteTwitter as string)
                                            }
                                        >
                                            {card.subtitle}
                                        </span>
                                    }
                                />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                id="swiper-pagination-custom"
                className="flex items-center justify-center w-full cursor-pointer"
            />
        </div>
    );
}
