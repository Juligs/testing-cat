import { sanitizeGrantsData, type GrantsCardData } from '../../lib/airtable/sanitizeGrantsData';
import { getGrantsDataFromAirtable } from '@lib/airtable/getGrantsDataFromAirtable';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    const data = await fetchGrantsData();
    return NextResponse.json(data);
}

const fetchGrantsData = async (): Promise<GrantsCardData[]> => {
    try {
        const rawData = await getGrantsDataFromAirtable({
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
