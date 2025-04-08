import { CommitteeMembersProps } from '@lib/utils';
import { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';

export interface IotaConsensusStatsProps {
    stats: CommitteeMembersProps | undefined;
}

export function IotaConsensusStats({ stats }: IotaConsensusStatsProps) {
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
            label: 'Committee Members',
            value: stats?.committeeMembers?.toString() ?? MISSING_VALUE,
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
