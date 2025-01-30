import { getDataFromAirtable, sanitizeGrantsStats, GrantsStats } from '../utils';

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
            .map((record: { fields: { [key: string]: unknown } }) => record.fields)
            .filter((fields: { [key: string]: unknown }) => fields['Sum Milestones (USD)']);

        if (!filteredData || filteredData.length === 0) {
            console.warn('No records passed the filter for Stats');
            return undefined;
        }

        return await sanitizeGrantsStats(filteredData);
    } catch (error) {
        console.error('Error in fetchStatsData:', error);
    }
}
