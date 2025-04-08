'use client';
import { CommitteeMembersProps } from '@lib/utils';
import { useEffect, useState } from 'react';
import { IotaConsensusStats } from './ConsensusStats';
import { ArrayDisplayStatsSkeleton } from '@repo/shared/sections';

export function FetchIotaConsensusStats() {
    const [stats, setStats] = useState<CommitteeMembersProps | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchConsensusStatsData();
                setStats(fetchedData);
            } catch (error) {
                console.error('Error fetching from indexer:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchConsensusStatsData = async () => {
        const res = await fetch('/api/consensus-stats');
        return (await res.json()) as CommitteeMembersProps;
    };

    return isLoading || !stats ? (
        <ArrayDisplayStatsSkeleton count={3} />
    ) : (
        <IotaConsensusStats stats={stats} />
    );
}
