import { sanitizeInfraData, type CardShowcase } from '../../lib/airtable/sanitizeInfraData';
import Airtable from 'airtable';
import { AIRTABLE_ENDPOINT_URL } from '../../lib/constants/airtable.constants';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const AIRTABLE_BASE_ID = 'appQqzg74YoTqK3Ht';
const INFRA_AIRTABLE_BASE_NAME = 'Accounts';
const INFRA_AIRTABLE_VIEW_NAME = 'iotalabs infra';

export async function GET() {
    const data = await fetchData();
    return NextResponse.json(data);
}

const fetchData: () => Promise<CardShowcase[]> = async () => {
    try {
        Airtable.configure({
            endpointUrl: AIRTABLE_ENDPOINT_URL,
            apiKey: process.env.IOTALABS_AIRTABLE_KEY,
        });
        const airtableBase = Airtable.base(AIRTABLE_BASE_ID);
        const infraViewPosts = (
            await airtableBase(INFRA_AIRTABLE_BASE_NAME)
                .select({
                    view: INFRA_AIRTABLE_VIEW_NAME,
                    fields: [
                        'Name',
                        'Sub-Category',
                        'Website',
                        'websiteImage',
                        'websiteDescription',
                    ],
                })
                .all()
        ).filter((record) => {
            return (
                record.fields.Name &&
                record.fields.Website &&
                record.fields['Sub-Category'] &&
                Array.isArray(record.fields['Sub-Category']) &&
                record.fields['Sub-Category'].length > 0
            );
        });
        if (!infraViewPosts) {
            throw new Error('No infra slider posts found');
        }
        if (infraViewPosts !== undefined && Array.isArray(infraViewPosts)) {
            return sanitizeInfraData(infraViewPosts);
        }
    } catch (error) {
        console.error('Error fetching infra slider from Airtable (fetchData):', error);
    }
    return [];
};
