import { NetworkStats } from '@lib/utils';
import { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';
import { ScrollReveal } from '@repo/shared/components';

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
        <ScrollReveal
            variant="reveal-stagger"
            rootMargin="-10% 0px"
            className="flex flex-col xs:flex-row justify-center items-center gap-6"
        >
            {CARDS.map((card, i) => (
                <div
                    key={card.label}
                    style={{ '--i': i } as React.CSSProperties}
                    className="w-full"
                >
                    <DisplayStats {...card} />
                </div>
            ))}
        </ScrollReveal>
    );
}
