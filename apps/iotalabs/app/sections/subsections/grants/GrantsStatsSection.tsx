import { GrantsStats } from '@lib/airtable';
import { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';

export function GrantsStatsSection({ stats }: { stats: GrantsStats | undefined }) {
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
        },
        {
            label: 'Total Applications',
            value: stats?.totalApplications ? `${stats.totalApplications}` : MISSING_VALUE,
        },
        {
            label: 'Approved Applications',
            value: stats?.totalApprovedApplications
                ? `${stats.totalApprovedApplications}`
                : MISSING_VALUE,
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
