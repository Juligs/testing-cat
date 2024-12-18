import { fetchGrantsStats } from '@lib/airtable';
import { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';

export type Stats = Omit<ComponentProps<typeof DisplayStats>, 'inverted' | 'highlighted'>;

export async function StatsSection() {
    const stats = await fetchGrantsStats();

    const UNDEFINED_VALUE = '-';

    const CARDS: ComponentProps<typeof DisplayStats>[] = [
        {
            label: 'Total Granted',
            value: stats?.formattedTotalGranted ? `$${stats.formattedTotalGranted}+` : '-',
            highlighted: true,
        },
        {
            label: 'Tier 3 Funding',
            value: '$50K+',
        },
        {
            label: 'Total Applications',
            value: stats?.totalApplications ? `${stats.totalApplications}` : UNDEFINED_VALUE,
        },
        {
            label: 'Approved Applications',
            value: stats?.totalApprovedApplications
                ? `${stats.totalApprovedApplications}`
                : UNDEFINED_VALUE,
        },
    ];

    return (
        <div className="flex flex-col xs:flex-row justify-center items-center gap-6">
            {CARDS.map((card, label) => (
                <DisplayStats key={label} {...card} />
            ))}
        </div>
    );
}
