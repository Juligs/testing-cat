import { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';
import { formatCoin, RfPFields } from '../../../utils';

type StatsItem = ComponentProps<typeof DisplayStats>;

export function getStatsFromProposal(proposal: RfPFields): StatsItem[] {
    const status = proposal.Status.toLowerCase();
    const deadline =
        proposal['Deadline?'] && proposal['Deadline Detail']
            ? `${proposal['Deadline Detail']} weeks`
            : 'Indefinite';
    const categoryBlock: StatsItem[] = proposal['Relationship Management']
        ? [{ label: 'Category', value: proposal['Relationship Management'] }]
        : [];
    const STAT_BUILDERS: Record<string, () => StatsItem[]> = {
        closed: () => [
            { label: 'Status', value: 'Closed', inverted: true },
            { label: 'Deadline', value: deadline },
            ...categoryBlock,
        ],
        accepted: () => [
            ...(proposal['Maximum Budget']
                ? [
                      {
                          label: 'Total Budget',
                          value: formatCoin(proposal['Maximum Budget']),
                          highlighted: true,
                      },
                  ]
                : []),
            { label: 'Deadline', value: deadline },
            ...categoryBlock,
        ],
    };
    return STAT_BUILDERS[status]?.() ?? [];
}
