'use client';

import { CardShowcase } from '@repo/shared/utils';
import Link from 'next/link';
import { useState } from 'react';
import { Chip, ChipSize, ImageCard } from 'react-ui-kit';
import 'swiper/css';
import 'swiper/css/pagination';

interface ProjectsProps {
    data: CardShowcase[];
}

export function ProjectsData({ data }: ProjectsProps) {
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
        if (selectedCategory === category) {
            setSelectedCategory('All');
        } else {
            setSelectedCategory(category);
        }
        setSelectedCategory(category === selectedCategory ? 'All' : category);
    }
    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="w-full flex flex-wrap gap-2 capitalize">
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
                {filteredCards.map((card, index) =>
                    card.link ? (
                        <Link
                            key={`${card.title}-${index}`}
                            className="!h-full block [&>div]:h-full"
                            href={card.link ?? ''}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImageCard
                                title={card.title}
                                overline={card.category.join(', ')}
                                body={card.body}
                                image={card.image}
                            />
                        </Link>
                    ) : (
                        <ImageCard
                            title={card.title}
                            overline={card.category.join(', ')}
                            body={card.body}
                            image={card.image}
                            isHoverable={false}
                        />
                    ),
                )}
            </div>
        </div>
    );
}
