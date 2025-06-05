import { NetworkStats } from '@lib/utils';
import { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';

export interface IotaNetworkStatsProps {
    stats: NetworkStats | undefined;
}

export function IotaNetworkStats({ stats }: IotaNetworkStatsProps) {
    const MISSING_VALUE = '-';

    const CARDS: ComponentProps<typeof DisplayStats>[] = [
        {
            label: 'Transactions per Second',
            value: '> 50k',
            highlighted: true,
        },
        {
            label: 'Time to Finality (avg)',
            value: '~400ms',
        },
        {
            label: 'Staking Ratio',
            value: stats?.stakingRatio ? `${stats.stakingRatio}%` : MISSING_VALUE,
        },
        {
            label: 'Transactions (30d)',
            value: stats?.stakingRatio ? `${stats.numberOfTxsLast30Days}` : MISSING_VALUE,
        },
    ];

    return (
        <div className="flex flex-col xs:flex-row justify-center items-center gap-6">
            {CARDS.map((card) => (
                <DisplayStats key={card.label} {...card} />
            ))}
        </div>
    );
}
