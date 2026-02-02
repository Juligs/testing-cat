import {
    getDataFromAirtable,
    sanitizeEcosystemProjectsData,
    type CardShowcase,
} from '@repo/shared/utils';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    const data = await fetchData();
    return NextResponse.json(data);
}

const INFRA_AIRTABLE_VIEW_NAME = 'iotalabs infra';
const INFRA_AIRTABLE_BASE_NAME = 'Accounts';

const fetchData: () => Promise<CardShowcase[]> = async () => {
    try {
        const rawData = await getDataFromAirtable({
            view: INFRA_AIRTABLE_VIEW_NAME,
            fields: ['Name', 'Sub-Category', 'Website', 'websiteImage', 'websiteDescription'],
            airtableName: INFRA_AIRTABLE_BASE_NAME,
        });

        return sanitizeEcosystemProjectsData(rawData, {});
    } catch (error) {
        console.error('Error in fetchInfraData:', error);
        return [];
    }
};
