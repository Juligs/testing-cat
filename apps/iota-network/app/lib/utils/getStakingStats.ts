import { DEFAULT_APY_DECIMALS, MINIMUM_APY_THRESHOLD } from '@lib/constants';
import { CoinFormat } from '@lib/enums';
import {
    convertIotaBalanceToUsd,
    FormatIotaCoin,
    getIotaClient,
    roundFloat,
    getStakingRatio,
} from '@lib/utils';

export interface StakingStats {
    totalStaked?: string | null;
    totalStakedUSD?: string | null;
    averageAPY?: number | string | null;
    stakingRatio?: number | null;
    validators?: number | null;
    lastEpochRewardValidators?: number | string | null;
    participationMetrics?: string | null;
}

async function getSystemState() {
    const client = getIotaClient();
    try {
        return await client.getLatestIotaSystemState();
    } catch (error) {
        console.error('Error fetching getSystemState:', error);
        return null;
    }
}

async function getTotalStake(): Promise<[string, string | null]> {
    const systemState = await getSystemState();
    if (!systemState) return ['0', null];

    const totalStake = systemState.totalStake ?? '0';

    const formattedTotalStaked = FormatIotaCoin({
        balance: totalStake,
        format: CoinFormat.COMPACT,
        showSign: false,
    });

    const totalStakedUSD = await convertIotaBalanceToUsd(totalStake);

    return [formattedTotalStaked, totalStakedUSD];
}

async function getAverageApy(): Promise<number | string | null> {
    const client = getIotaClient();
    const { apys } = await client.getValidatorsApy();

    if (!apys || apys.length === 0) return null;

    try {
        const processedApys = apys.map(({ apy }) => ({
            apy: roundFloat(apy * 100.0, DEFAULT_APY_DECIMALS),
            isApyApproxZero: apy < MINIMUM_APY_THRESHOLD,
        }));

        if (processedApys.every(({ isApyApproxZero }) => isApyApproxZero)) {
            return '~0';
        }

        const validApys = processedApys.filter((a) => a.apy > 0 && !a.isApyApproxZero);

        if (validApys.length === 0) return 0;
        const total = validApys.reduce((sum, cur) => sum + cur.apy, 0);

        return roundFloat(total / validApys.length, DEFAULT_APY_DECIMALS);
    } catch (error) {
        console.error('Error in getAverageApy:', error);
        return null;
    }
}

async function getActiveValidators(): Promise<number | null> {
    const systemState = await getSystemState();
    if (!systemState) {
        console.error('System state is null');
        return null;
    }
    const validators = systemState.activeValidators.length;
    return validators;
}

async function getLastEpochReward(): Promise<number | string | null> {
    const client = getIotaClient();
    const systemState = await getSystemState();
    if (!systemState) {
        console.error('getSystemState is null');
        return null;
    }
    const currentEpoch = Number(systemState.epoch);

    const previousEpoch = await client.getEpochs({
        cursor: currentEpoch <= 1 ? undefined : (currentEpoch - 2).toString(),
        limit: 1,
    });

    const lastEpochRewardValidators =
        previousEpoch?.data?.[0]?.endOfEpochInfo?.totalStakeRewardsDistributed ?? null;

    const formattedLastEpochRewards = FormatIotaCoin({
        balance: lastEpochRewardValidators ?? '0',
        format: CoinFormat.COMPACT,
        showSign: false,
    });
    return formattedLastEpochRewards;
}

async function getParticipationMetrics(): Promise<string | null> {
    const client = getIotaClient();
    try {
        const metrics = await client.getParticipationMetrics();
        return metrics?.totalAddresses ?? null;
    } catch (error) {
        console.error('Error in getParticipationMetrics:', error);
        return null;
    }
}

export async function getStakingStats(): Promise<StakingStats> {
    try {
        const [
            [totalStaked, totalStakedUSD],
            averageAPY,
            stakingRatio,
            validators,
            lastEpochRewardValidators,
            participationMetrics,
        ] = await Promise.all([
            getTotalStake(),
            getAverageApy(),
            getStakingRatio(),
            getActiveValidators(),
            getLastEpochReward(),
            getParticipationMetrics(),
        ]);

        return {
            totalStaked,
            totalStakedUSD,
            averageAPY,
            stakingRatio,
            validators,
            lastEpochRewardValidators,
            participationMetrics,
        };
    } catch (error) {
        console.error('Error in getStakingStats:', error);
        return {
            averageAPY: null,
            totalStaked: null,
            totalStakedUSD: null,
            validators: null,
            lastEpochRewardValidators: null,
        };
    }
}
