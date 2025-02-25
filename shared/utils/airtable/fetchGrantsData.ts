import { getDataFromAirtable } from './getDataFromAirtable';
import { sanitizeGrantsData, type GrantsCardData } from './sanitizeGrantsData';

const GRANTS_AIRTABLE_VIEW_NAME = 'iotalabs applications';
const AIRTABLE_BASE_NAME = 'Applications';

export const fetchGrantsData = async (): Promise<GrantsCardData[]> => {
    try {
        const rawData = await getDataFromAirtable({
            airtableName: AIRTABLE_BASE_NAME,
            view: GRANTS_AIRTABLE_VIEW_NAME,
            fields: [
                'Grant Name',
                'websiteFeaturedPosition',
                'websiteDescription',
                'websiteLink',
                'websiteTwitter',
                'websiteCardBackground',
            ],
        });

        const filteredData = rawData.filter(
            (record) => record.fields['Grant Name'] && record.fields['websiteLink'],
        );

        if (!filteredData || filteredData.length === 0) {
            console.warn('No records passed the filter for Grants');
            return [];
        }

        return sanitizeGrantsData(filteredData);
    } catch (error) {
        console.error('Error in fetchGrantsData:', error);
        return [];
    }
};
