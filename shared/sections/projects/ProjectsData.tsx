'use client';

import { CardShowcase } from '../../utils';
import Link from 'next/link';
import { useState } from 'react';
import { Button, ButtonVariant, Chip, ChipSize, ImageCard } from 'react-ui-kit';
import 'swiper/css';
import 'swiper/css/pagination';

interface ProjectsProps {
    data: CardShowcase[];
    pagination?: boolean;
}
const MAX_PROJECTS_PER_PAGE = 30;

export function ProjectsData({ data, pagination = false }: ProjectsProps) {
    const [visibleCount, setVisibleCount] = useState(MAX_PROJECTS_PER_PAGE);
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
    const visibleProjects = filteredCards.slice(0, visibleCount);

    const handleLoadMore = () =>
        setVisibleCount((prev) => Math.min(prev + MAX_PROJECTS_PER_PAGE, filteredCards.length));

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
            {pagination ? (
                <div className="flex flex-col gap-12 items-center">
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 !h-auto">
                        {visibleProjects.map((card, index) =>
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
                    {visibleCount < filteredCards.length && (
                        <div className="max-w-[120px]">
                            <Button
                                text="Load more"
                                onClick={handleLoadMore}
                                variant={ButtonVariant.Secondary}
                            />
                        </div>
                    )}
                </div>
            ) : (
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
            )}
        </div>
    );
}
