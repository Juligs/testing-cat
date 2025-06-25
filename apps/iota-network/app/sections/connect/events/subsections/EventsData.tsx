'use client';

import { EventsCards } from '@lib/utils';
import { formatDate, getPlatformFromUrl } from '@repo/shared/utils';
import { Badge, Chip, ChipSize, ImageCard } from 'react-ui-kit';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

interface EventsProps {
    data: EventsCards[];
}

function buildOverlineText(data: EventsCards) {
    const date = formatDate(data.startDate, data.endDate);
    const location = data.location ? ` (${getPlatformFromUrl(data.location)})` : '';
    return `${date}${location}`;
}

export function EventsData({ data }: EventsProps) {
    const sortedDataAlphabetically = [...data].sort((a, b) => a.title.localeCompare(b.title));
    const uniqueCardCategories = [
        'All',
        ...Array.from(new Set(sortedDataAlphabetically.flatMap((card) => card.category))).sort(
            (a, b) => a.localeCompare(b),
        ),
    ];

    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredCards =
        selectedCategory === 'All'
            ? sortedDataAlphabetically
            : sortedDataAlphabetically.filter((card) => card.category.includes(selectedCategory));

    function handleCategoryClick(category: string) {
        setSelectedCategory(category === selectedCategory ? 'All' : category);
    }

    if (!data || data.length === 0) {
        return (
            <div className="w-full max-w-[850px] mx-auto">
                <div className="flex flex-col items-center justify-center gap-6">
                    <Image
                        src="/connect/events/no_events.png"
                        width={464}
                        height={348}
                        alt="footer-pattern"
                    />

                    <p className="text-label-lg text-light text-center">No events</p>
                </div>
            </div>
        );
    }

    if (data.length <= 2) {
        return (
            <div className="flex flex-row gap-6 items-center w-full max-w-[400px] justify-center mx-auto">
                {data.map((card, index) => {
                    const content = (
                        <>
                            <ImageCard
                                title={card.title}
                                overline={buildOverlineText(card)}
                                image={card.image}
                                isHoverable={!card.link ? false : undefined}
                            />
                        </>
                    );
                    return card.link ? (
                        <Link
                            key={`${card.title}-${index}`}
                            className="block"
                            href={card.link ?? ''}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {content}
                        </Link>
                    ) : (
                        <div key={`${card.title}-${index}`}>{content}</div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="w-full flex flex-wrap gap-2 capitalize items-center justify-center">
                {uniqueCardCategories.map((category) => (
                    <Chip
                        key={category}
                        label={category}
                        size={ChipSize.Large}
                        onClick={() => handleCategoryClick(category)}
                        selected={selectedCategory === category}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 !h-auto">
                {filteredCards.map((card, index) => {
                    const categories = Array.isArray(card.category)
                        ? card.category
                        : typeof card.category === 'string'
                          ? [card.category]
                          : [];

                    const content = (
                        <>
                            <ImageCard
                                title={card.title}
                                overline={buildOverlineText(card)}
                                body={
                                    typeof card.body === 'string' ? (
                                        <span title={card.body.length > 250 ? card.body : ''}>
                                            {card.body.slice(0, 250)}
                                            {card.body.length > 250 ? '...' : ''}
                                        </span>
                                    ) : undefined
                                }
                                image={card.image}
                                isHoverable={!card.link ? false : undefined}
                            >
                                {categories.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {categories.map((data, index) => (
                                            <Badge key={index} label={data} />
                                        ))}
                                    </div>
                                )}
                            </ImageCard>
                        </>
                    );

                    return card.link ? (
                        <Link
                            key={`${card.title}-${index}`}
                            className="!h-full block [&>div]:h-full"
                            href={card.link ?? ''}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {content}
                        </Link>
                    ) : (
                        <div key={`${card.title}-${index}`}>{content}</div>
                    );
                })}
            </div>
        </div>
    );
}
