'use client';
import { StakingStats } from '@lib/utils';
import { useEffect, useState } from 'react';
import { IotaStakingStats } from './IotaStakingStats';
import { StakingSkeleton } from './StakingSkeleton';

export function FetchIotaStakingkStats() {
    const [stats, setStats] = useState<StakingStats | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchStakingStatsData();
                setStats(fetchedData);
            } catch (error) {
                console.error('Error fetching from indexer:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchStakingStatsData = async () => {
        const res = await fetch('/api/staking-stats');
        return (await res.json()) as StakingStats;
    };

    return isLoading || !stats ? <StakingSkeleton /> : <IotaStakingStats stats={stats} />;
}
