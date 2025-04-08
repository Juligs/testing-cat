'use client';
import { NetworkStats } from '@lib/utils';
import { ArrayDisplayStatsSkeleton } from '@repo/shared/sections';
import { useEffect, useState } from 'react';
import { IotaNetworkStats } from './IotaNetworkStats';

export function FetchIotaNetworkStats() {
    const [stats, setStats] = useState<NetworkStats | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchNetworkStatsData();
                setStats(fetchedData);
            } catch (error) {
                console.error('Error fetching from indexer:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchNetworkStatsData = async () => {
        const res = await fetch('/api/network-stats');
        return (await res.json()) as NetworkStats;
    };

    return isLoading || !stats ? (
        <ArrayDisplayStatsSkeleton count={4} />
    ) : (
        <IotaNetworkStats stats={stats} />
    );
}
