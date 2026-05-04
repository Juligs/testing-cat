'use client';

import type { PastEventsData } from '@lib/utils';
import { useEffect, useState } from 'react';
import { EventImpressions } from './EventImpressions';
import { ExploreWorkshops } from './ExploreWorkshops';
import { BeyondTheChainYear } from './BeyondTheChainYear';
import { WorkshopSkeleton } from './subsections/WorkshopSkeleton';

interface Props {
    year: string;
}

export function FetchWorkshopPage({ year }: Props) {
    const [workshopData, setWorkshopData] = useState<PastEventsData[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/past-events');
                if (!res.ok) throw new Error(`Failed to fetch pastEvents: ${res.status}`);

                const { papers } = (await res.json()) as {
                    papers: PastEventsData[];
                };

                setWorkshopData(papers.filter((paper) => paper.edition === year));
            } catch (err) {
                console.error('Error fetching workshops:', err);
                setWorkshopData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [year]);

    if (loading) {
        return <WorkshopSkeleton />;
    }

    return (
        <>
            <ExploreWorkshops id="explore" activeYear={year} />
            {workshopData && workshopData.length > 0 ? (
                <>
                    <BeyondTheChainYear id="paper-year" year={year} data={workshopData} />
                    <EventImpressions id="event-impressions" year={year} />
                </>
            ) : (
                <div className="py-20">
                    <h4 className="text-headline-sm text-center">
                        No data found for the year {year}.
                    </h4>
                </div>
            )}
        </>
    );
}
