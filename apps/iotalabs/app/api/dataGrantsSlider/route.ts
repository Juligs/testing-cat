import { AIRTABLE_ENDPOINT_URL } from '../../lib/constants/airtable.constants';
import Airtable from 'airtable';
import { sanitizeGrantsData, type GrantsCardData } from '../../lib/airtable/sanitizeGrantsData';
import { NextResponse } from 'next/server';

export const revalidate = 14400;

const AIRTABLE_BASE_ID = 'appQqzg74YoTqK3Ht';
const INFRA_AIRTABLE_BASE_NAME = 'Applications';
const INFRA_AIRTABLE_VIEW_NAME = 'iotalabs applications';

export async function GET() {
    const data = await fetchGrantsData();
    return NextResponse.json(data);
}

const fetchGrantsData: () => Promise<GrantsCardData[]> = async () => {
    try {
        Airtable.configure({
            endpointUrl: AIRTABLE_ENDPOINT_URL,
            apiKey: process.env.IOTALABS_AIRTABLE_KEY,
        });
        const airtableBase = Airtable.base(AIRTABLE_BASE_ID);
        const grantViewPosts = (
            await airtableBase(INFRA_AIRTABLE_BASE_NAME)
                .select({
                    view: INFRA_AIRTABLE_VIEW_NAME,
                    fields: [
                        'Grant Name',
                        'websiteFeaturedPosition',
                        'websiteDescription',
                        'websiteLink',
                        'websiteTwitter',
                        'websiteCardBackground',
                    ],
                })
                .all()
        ).filter((record) => record.fields['Grant Name'] && record.fields['websiteLink']);
        if (!grantViewPosts) {
            throw new Error('Error fetching from Airtable');
        }
        if (grantViewPosts !== undefined && Array.isArray(grantViewPosts)) {
            return sanitizeGrantsData(grantViewPosts);
        }
    } catch {
        console.error('Error fetching data from Airtable');
    }
    return [];
};
