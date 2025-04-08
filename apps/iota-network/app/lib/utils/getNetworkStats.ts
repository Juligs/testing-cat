import { getIotaClient } from '@lib/utils';
import { getStakingRatio } from '@lib/utils';

export interface NetworkStats {
    dailyActiveAddresses?: number | string | null;
    stakingRatio?: number | null;
}

async function getDailyActiveAddresses() {
    const client = getIotaClient();
    try {
        const { dailyActiveAddresses } = await client.getAddressMetrics();
        return dailyActiveAddresses;
    } catch (error) {
        console.error('Error in getTotalSupply:', error);
        return null;
    }
}

export async function getNetworkStats(): Promise<NetworkStats> {
    try {
        const [dailyActiveAddresses, stakingRatio] = await Promise.all([
            getDailyActiveAddresses(),
            getStakingRatio(),
        ]);

        return {
            dailyActiveAddresses,
            stakingRatio,
        };
    } catch (error) {
        console.error('Error in getNetworkStats:', error);
        return {
            dailyActiveAddresses: null,
            stakingRatio: null,
        };
    }
}
