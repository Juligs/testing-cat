import { getIotaClient } from './getIotaClient';
import { COIN_TYPE } from '@lib/constants';

export async function getStakingRatio() {
    const client = getIotaClient();
    try {
        const totalSupplyResponse = await client.getTotalSupply({ coinType: COIN_TYPE });
        const totalSupply = totalSupplyResponse.value ?? '0';

        const { totalStake } = await client.getLatestIotaSystemState();
        return calculateStakingRatio(totalSupply, totalStake);
    } catch (error) {
        console.error('Error in getStakingRatio:', error);
        return null;
    }
}
function calculateStakingRatio(totalSupply: string, totalStaked: string): number | null {
    if (Number(totalSupply) > 0 && Number(totalStaked) >= 0) {
        return Number(((Number(totalStaked) / Number(totalSupply)) * 100).toFixed(2));
    }
    return null;
}
