'use client';
import { useEffect, useState } from 'react';
import { GrantsStats } from '@repo/shared/utils';
import { ArrayDisplayStatsSkeleton } from '@repo/shared/sections';
import { GrantsStatsGetStarted } from './GrantsStatsGetStarted';

interface FetchGrantsStatsDataProps {
    inverted?: boolean;
}

export function FetchGrantsStatsDataGetStarted({ inverted }: FetchGrantsStatsDataProps) {
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

    return isLoading || !stats ? (
        <ArrayDisplayStatsSkeleton />
    ) : (
        <GrantsStatsGetStarted stats={stats} inverted={inverted} />
    );
}
