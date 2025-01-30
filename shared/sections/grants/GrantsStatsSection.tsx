import { GrantsStats } from '../../utils/airtable/sanitizeGrantsStats';
import { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';

export interface GrantsStatsSectionProps {
    stats: GrantsStats | undefined;
    inverted?: boolean;
}

export function GrantsStatsSection({ stats, inverted }: GrantsStatsSectionProps) {
    const MISSING_VALUE = '-';

    const CARDS: ComponentProps<typeof DisplayStats>[] = [
        {
            label: 'Total Granted',
            value: stats?.formattedTotalGranted
                ? `$${stats.formattedTotalGranted}+`
                : MISSING_VALUE,
            highlighted: true,
        },
        {
            label: 'Tier 3 Funding',
            value: '$50K+',
            inverted: inverted,
        },
        {
            label: 'Total Applications',
            value: stats?.totalApplications ? `${stats.totalApplications}` : MISSING_VALUE,
            inverted: inverted,
        },
        {
            label: 'Approved Applications',
            value: stats?.totalApprovedApplications
                ? `${stats.totalApprovedApplications}`
                : MISSING_VALUE,
            inverted: inverted,
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
