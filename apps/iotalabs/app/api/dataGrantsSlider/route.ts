import { AIRTABLE_ENDPOINT_URL } from '../../lib/constants/airtable.constants';
import Airtable from 'airtable';
import { sanitizeGrantsData, type GrantsCardData } from '../../lib/airtable/sanitizeGrantsData';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const AIRTABLE_BASE_ID = 'appQqzg74YoTqK3Ht';
const INFRA_AIRTABLE_BASE_NAME = 'Applications';
const INFRA_AIRTABLE_VIEW_NAME = 'iotalabs applications';

export async function GET() {
    const data = await fetchData();
    return NextResponse.json(data);
}

const fetchData: () => Promise<GrantsCardData[]> = async () => {
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
            throw new Error('No grants posts found');
        }
        if (grantViewPosts !== undefined && Array.isArray(grantViewPosts)) {
            return sanitizeGrantsData(grantViewPosts);
        }
    } catch (error) {
        console.error('Error fetching grants data from Airtable (fetchData):', error);
    }
    return [];
};
