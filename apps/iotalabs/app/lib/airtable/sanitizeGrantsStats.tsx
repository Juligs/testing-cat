import { formatToFinancialNotation } from '@repo/shared';

export interface GrantsStats {
    totalApplications?: number;
    formattedTotalGranted?: string;
    totalApprovedApplications?: number;
}

export async function sanitizeGrantsStats(
    data: Array<{ [key: string]: unknown }> = [],
): Promise<GrantsStats> {
    const approvedApplications = data.filter((fields) => fields['Grant Running'] === true) ?? [];
    const totalGranted = calculateTotalGranted(approvedApplications);
    const formattedTotalGranted = formatToFinancialNotation(totalGranted);

    return {
        formattedTotalGranted,
        totalApplications: data.length,
        totalApprovedApplications: approvedApplications.length,
    };
}

function calculateTotalGranted(data: Array<{ [key: string]: unknown }>): number {
    let totalGranted = 0;

    data.forEach((fields) => {
        const grantedUsd = fields['Sum Milestones (USD)'] as string;

        if (!isNaN(parseFloat(grantedUsd))) {
            totalGranted += Math.floor(parseFloat(grantedUsd));
        }
    });

    totalGranted = Math.floor(totalGranted * 100) / 100;

    return totalGranted;
}
