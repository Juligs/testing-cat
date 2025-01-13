'use client';
import { GrantsStats } from '@lib/airtable';
import { useEffect, useState } from 'react';
import { GrantsStatsSkeleton } from '@sections/skeletons';
import { GrantsStatsSection } from './GrantsStatsSection';

export function FetchGrantsStatsData() {
    const [stats, setStats] = useState<GrantsStats | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchStatsData();
                setStats(fetchedData);
            } catch (error) {
                console.error('Error fetching grants stats from Airtable (FetchStatsData):', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchStatsData = async () => {
        const res = await fetch('/api/grants-stats');
        return (await res.json()) as GrantsStats;
    };

    return isLoading || !stats ? <GrantsStatsSkeleton /> : <GrantsStatsSection stats={stats} />;
}
