import { GrantsStats } from '@repo/shared/utils';
import { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';

export interface GrantsStatsSectionProps {
    stats: GrantsStats | undefined;
    inverted?: boolean;
}

export function GrantsStatsGetStarted({ stats, inverted }: GrantsStatsSectionProps) {
    const MISSING_VALUE = '-';

    const CARDS: ComponentProps<typeof DisplayStats>[] = [
        {
            supportingText: 'Total Granted',
            value: stats?.formattedTotalGranted
                ? `$${stats.formattedTotalGranted}+`
                : MISSING_VALUE,
        },
        {
            supportingText: 'Tier 3 Funding',
            value: '$50K+',
        },
        {
            supportingText: 'Approved',
            value: stats?.totalApprovedApplications
                ? `${stats.totalApprovedApplications}+`
                : MISSING_VALUE,
        },
    ];

    return (
        <div className="grid grid-cols-1 xs:grid-cols-3 justify-center items-center gap-6">
            {CARDS.map((card) => (
                <DisplayStats key={card.supportingText} {...card} inverted />
            ))}
        </div>
    );
}
