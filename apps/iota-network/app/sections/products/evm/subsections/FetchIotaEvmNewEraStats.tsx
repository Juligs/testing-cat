'use client';
import { IotaTVLProps } from '@lib/utils';
import { useEffect, useState } from 'react';
import { EvmNewEraStats } from './EvmNewEraStats';
import { ArrayDisplayStatsSkeleton } from '@repo/shared/sections';

export function FetchEVMNewEraStats() {
    const [stats, setStats] = useState<IotaTVLProps | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchIotaNewEraStatsData();
                setStats(fetchedData);
            } catch (error) {
                console.error('Error fetching from defillama api:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchIotaNewEraStatsData = async () => {
        const res = await fetch('/api/evm-stats');
        return (await res.json()) as IotaTVLProps;
    };

    return isLoading || !stats ? (
        <ArrayDisplayStatsSkeleton count={3} />
    ) : (
        <EvmNewEraStats stats={stats} />
    );
}
