import { getDataFromAirtable } from '@lib/airtable/getDataFromAirtable';
import { formatToFinancialNotation } from '@shared/utils';

interface GrantsStats {
    totalApplications?: number;
    formattedTotalGranted?: string;
    totalApprovedApplications?: number;
}
const GRANTS_AIRTABLE_VIEW_NAME = 'iotalabs applications';
const AIRTABLE_BASE_NAME = 'Applications';

export async function fetchGrantsStats(): Promise<GrantsStats | undefined> {
    try {
        const rawData = await getDataFromAirtable({
            fields: ['Sum Milestones (USD)', 'Grant Running'],
            filtered: false,
            view: GRANTS_AIRTABLE_VIEW_NAME,
            airtableName: AIRTABLE_BASE_NAME,
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
