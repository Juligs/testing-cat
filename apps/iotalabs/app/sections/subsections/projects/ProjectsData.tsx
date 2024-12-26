'use client';

import { ImageCard, Chip, ChipSize } from 'react-ui-kit';
import { CardShowcase } from '@lib/airtable';
import { useState } from 'react';
import Link from 'next/link';

interface ProjectsProps {
    data: CardShowcase[];
}

export function ProjectsData({ data }: ProjectsProps) {
    const uniqueCardCategories = [
        'All',
        ...Array.from(new Set(data.flatMap((card) => card.category))),
    ];
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredCards =
        selectedCategory === 'All'
            ? data
            : data.filter((card) => card.category.includes(selectedCategory));

    function handleCategoryClick(category: string) {
        if (selectedCategory === category) {
            setSelectedCategory('All');
        } else {
            setSelectedCategory(category);
        }
    }

    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="w-full flex flex-wrap gap-2 capitalize">
                {uniqueCardCategories.map((category, label) => (
                    <Chip
                        key={label}
                        label={category}
                        size={ChipSize.Large}
                        onClick={() => handleCategoryClick(category)}
                        selected={selectedCategory === category}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 !h-auto">
                {filteredCards.map((card, index) => (
                    <Link
                        key={`${card.title}-${index}`}
                        className="!h-full block [&>div]:h-full"
                        href={card.link}
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
                ))}
            </div>
        </div>
    );
}
