'use client';

import { useEffect, useState } from 'react';
import { VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { IconSkeleton } from '@repo/shared/components';
import { NewsPaperData } from '@lib/utils';
import { NEWS_VERTICAL_TITLE } from '../constants';
import { NewsSlider } from './NewsSlider';

export function FetchNewsSliderData({ id, navbarColorScheme }: BaseSectionProps) {
    const [data, setData] = useState<NewsPaperData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('/api/news-papers');
                if (!res.ok) throw new Error('Network response was not ok');
                const json = await res.json();
                const [sheet1Data] = json.papers;
                setData([...sheet1Data] as NewsPaperData[]);
            } catch (error) {
                console.error('Error fetching news data:', error);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (!data.length) return null;

    if (isLoading) {
        return (
            <section id={id} data-navbar-color-scheme={navbarColorScheme}>
                <div className="container py-14 xs:py-20 lg:py-30 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="sm:col-span-1">
                        <VerticalTitle {...NEWS_VERTICAL_TITLE} />
                    </div>
                    <div className="min-w-0 sm:col-span-2">
                        <IconSkeleton />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-1">
                    <VerticalTitle {...NEWS_VERTICAL_TITLE} />
                </div>
                <div className="min-w-0 sm:col-span-2">
                    <NewsSlider data={data} />
                </div>
            </div>
        </section>
    );
}
