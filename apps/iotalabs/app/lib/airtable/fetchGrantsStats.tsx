import { getGrantsDataFromAirtable } from '@lib/airtable/getGrantsDataFromAirtable';
import { formatToFinancialNotation } from '@shared/utils';

interface GrantsStats {
    totalGranted?: number;
    totalApplications?: number;
    formattedTotalGranted?: string;
    totalApprovedApplications?: number;
}

export async function fetchGrantsStats(): Promise<GrantsStats | undefined> {
    try {
        const rawData = await getGrantsDataFromAirtable({
            fields: ['Sum Milestones (USD)', 'Grant Running'],
        });

        const filteredData = rawData
            .map((record) => record.fields)
            .filter((fields) => fields['Sum Milestones (USD)']);

        if (!filteredData || filteredData.length === 0) {
            console.warn('No records passed the filter for Stats');
            return;
        }

        return sanitizeGrantsStats(filteredData);
    } catch (error) {
        console.error('Error in fetchStatsData:', error);
    }
}

export async function sanitizeGrantsStats(
    data: Array<{ [key: string]: unknown }>,
): Promise<GrantsStats> {
    let totalApplications = 0;
    let totalApprovedApplications = 0;

    const totalGranted = calculateTotalGranted(data);
    const formattedTotal = formatToFinancialNotation(totalGranted);
    totalApplications = totalApplicationsCount(data);
    totalApprovedApplications = totalApprovedApplicationsCount(data);

    return {
        totalGranted,
        formattedTotalGranted: formattedTotal,
        totalApplications,
        totalApprovedApplications,
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

function totalApplicationsCount(data: Array<{ [key: string]: unknown }>): number {
    return data.length;
}

function totalApprovedApplicationsCount(data: Array<{ [key: string]: unknown }>): number {
    return data.filter((fields) => fields['Grant Running'] === true).length;
}
