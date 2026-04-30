import { StakingStats } from '@lib/utils';
import { Daos, DecentralizedFinance, IotaDnsResolver } from '@repo/icons';
import { ComponentProps } from 'react';
import { CardSize, DisplayStats, ProgressCircleIcon, TextSize } from 'react-ui-kit';
import { ScrollReveal } from '@repo/shared/components';

export interface IotaStakingStatsProps {
    stats: StakingStats | undefined;
}

export function IotaStakingStats({ stats }: IotaStakingStatsProps) {
    const MISSING_VALUE = '-';

    const TOP_CARDS: ComponentProps<typeof DisplayStats>[] = [
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
    ];

    const BOTTOM_CARDS: ComponentProps<typeof DisplayStats>[] = [
        {
            label: 'Participation',
            value: stats?.participationMetrics ?? MISSING_VALUE,
            size: CardSize.Small,
            textSize: TextSize.Default,
            icon: <Daos />,
        },
        {
            label: 'Validators',
            value: stats?.validators?.toString() ?? MISSING_VALUE,
            size: CardSize.Small,
            textSize: TextSize.Default,
            icon: <IotaDnsResolver />,
        },
        {
            label: 'Staking Ratio',
            value: stats?.stakingRatio ? `${stats.stakingRatio}%` : MISSING_VALUE,
            size: CardSize.Small,
            icon: <ProgressCircleIcon progress={stats?.stakingRatio ?? 0} />,
            textSize: TextSize.Default,
        },
        {
            label: 'Last Epoch Rewards',
            value: stats?.lastEpochRewardValidators?.toString() ?? MISSING_VALUE,
            size: CardSize.Small,
            textSize: TextSize.Default,
            supportingText: 'IOTA',
            icon: <DecentralizedFinance />,
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            <ScrollReveal
                variant="reveal-stagger"
                rootMargin="-10% 0px"
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
                {TOP_CARDS.map((card, i) => (
                    <div key={card.label} style={{ '--i': i } as React.CSSProperties}>
                        <DisplayStats {...card} />
                    </div>
                ))}
            </ScrollReveal>
            <ScrollReveal
                variant="reveal-stagger"
                rootMargin="-10% 0px"
                className="grid grid-cols-1 sm:grid-cols-4 gap-6"
            >
                {BOTTOM_CARDS.map((card, i) => (
                    <div key={card.label} style={{ '--i': i } as React.CSSProperties}>
                        <DisplayStats {...card} />
                    </div>
                ))}
            </ScrollReveal>
        </div>
    );
}
