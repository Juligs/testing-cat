import { StakingStats } from '@lib/utils';
import { DecentralizedFinance, IotaDnsResolver } from '@repo/icons';
import { ComponentProps } from 'react';
import { CardSize, DisplayStats, ProgressCircleIcon, TextSize } from 'react-ui-kit';

export interface IotaStakingStatsProps {
    stats: StakingStats | undefined;
}

export function IotaStakingStats({ stats }: IotaStakingStatsProps) {
    const MISSING_VALUE = '-';

    const CARDS: ComponentProps<typeof DisplayStats>[] = [
        {
            label: 'Total Staked',
            value: stats?.totalStaked ?? MISSING_VALUE,
            supportingText: 'IOTA',
            highlighted: true,
        },
        {
            label: 'Total Staked USD Value',
            value: stats?.totalStakedUSD ?? MISSING_VALUE,
        },
        {
            label: 'Avg. APY',
            value: stats?.averageAPY ? `${stats.averageAPY}%` : MISSING_VALUE,
        },
        {
            label: 'Validators',
            value: stats?.validators?.toString() ?? MISSING_VALUE,
            size: CardSize.Small,
            textSize: TextSize.Default,
            icon: stats?.validators ? <IotaDnsResolver /> : undefined,
        },
        {
            label: 'Staking Ratio',
            value: stats?.stakingRatio ? `${stats.stakingRatio}%` : MISSING_VALUE,
            size: CardSize.Small,
            icon:
                stats?.stakingRatio != null ? (
                    <ProgressCircleIcon progress={stats.stakingRatio} />
                ) : undefined,
            textSize: TextSize.Default,
        },
        {
            label: 'Last Epoch Rewards',
            value: stats?.lastEpochRewardValidators?.toString() ?? MISSING_VALUE,
            size: CardSize.Small,
            textSize: TextSize.Default,
            supportingText: 'IOTA',
            icon: stats?.validators ? <DecentralizedFinance /> : undefined,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CARDS.map((card) => (
                <DisplayStats key={card.label} {...card} />
            ))}
        </div>
    );
}
