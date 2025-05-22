import { getIotaClient, getStakingRatio, formatCompactNumber } from '@lib/utils';

export interface NetworkStats {
    stakingRatio?: number | null;
    numberOfTxsLast30Days?: string | null;
}

async function getTotalTxsLast30Epochs(): Promise<string | null> {
    try {
        const client = getIotaClient();
        const { data } = await client.getEpochMetrics({
            descendingOrder: true,
            limit: 31, // Request 31 to skip current epoch (epochTotalTransactions = 0) and use previous 30
        });

        if (!data || data.length < 2) return null;

        // Skip current epoch and sum the previous 30
        const totalTxsLast30days = data
            .slice(1, 31)
            .reduce(
                (sum, { epochTotalTransactions }) => sum + Number(epochTotalTransactions || 0),
                0,
            );

        return formatCompactNumber(totalTxsLast30days);
    } catch (error) {
        console.error('Error fetching total transactions for last 30 epochs:', error);
        return null;
    }
}
export async function getNetworkStats(): Promise<NetworkStats> {
    try {
        const [stakingRatio, numberOfTxsLast30Days] = await Promise.all([
            getStakingRatio(),
            getTotalTxsLast30Epochs(),
        ]);

        return {
            stakingRatio,
            numberOfTxsLast30Days,
        };
    } catch (error) {
        console.error('Error in getNetworkStats:', error);
        return {
            stakingRatio: null,
            numberOfTxsLast30Days: null,
        };
    }
}
