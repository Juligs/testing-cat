import { IotaTVLProps } from '@lib/utils';
import { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';

export interface EvmNewEraStatsProps {
    stats: IotaTVLProps | undefined;
}

export function EvmNewEraStats({ stats }: EvmNewEraStatsProps) {
    const MISSING_VALUE = '-';

    const CARDS: ComponentProps<typeof DisplayStats>[] = [
        {
            label: 'Score in Security Audits by Zokyo',
            value: '100%',
            highlighted: true,
        },
        {
            label: 'Network Up Time',
            value: '99.99%',
        },
        {
            label: 'Total Value Locked',
            value: stats?.tvl?.toString() ?? MISSING_VALUE,
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
