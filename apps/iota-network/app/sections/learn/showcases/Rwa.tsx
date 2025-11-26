'use client';
import { useState } from 'react';
import { TitleTextSize, VerticalTitle, Chip } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import Link from 'next/link';
import { SHOWCASES } from './constants/showcasesContent.constants';

export function Rwa({ id, navbarColorScheme }: BaseSectionProps) {
    const showcaseCards = Object.entries(SHOWCASES)
        .filter(([_, page]) => page.card)
        .map(([key, page]) => ({
            ...page.card!,
            showcaseUrl: key,
        }));

    const [selectedCategory, setSelectedCategory] = useState('All');
    const allCategories = showcaseCards.flatMap((item) => item.category ?? []);

    const uniqueCategories = Array.from(new Set(allCategories)).sort();

    const categories = ['All', ...uniqueCategories];

    const filteredShowcases =
        selectedCategory === 'All'
            ? showcaseCards
            : showcaseCards.filter((item) => (item.category ?? []).includes(selectedCategory));

    return (
        <section
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
            className="bg-iota-neutral-98"
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-10 xs:gap-20">
                <div className="flex flex-col gap-6">
                    <VerticalTitle
                        title="Real-World Adoption in Action"
                        size={TitleTextSize.ExtraSmall}
                        isCentered
                    />

                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                selected={selectedCategory === category}
                                onClick={() => setSelectedCategory(category)}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {filteredShowcases.map((item, index) => (
                        <Link href={`/learn/showcases/${item.showcaseUrl}`} key={index}>
                            <SmallCtaCard {...item} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
