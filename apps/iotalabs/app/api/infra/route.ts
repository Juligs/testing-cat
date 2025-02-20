import {
    getDataFromAirtable,
    sanitizeEcosystemProjectsData,
    type CardShowcase,
} from '@repo/shared/utils';
import { NextResponse } from 'next/server';
import { INFRA_ALLOWED_CATEGORIES } from '../../lib/constants';

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

        const filteredData = rawData.filter(
            (record) =>
                record.fields.Name &&
                record.fields.Website &&
                record.fields['Sub-Category'] &&
                Array.isArray(record.fields['Sub-Category']) &&
                record.fields['Sub-Category'].length > 0,
        );

        if (!filteredData || filteredData.length === 0) {
            console.warn('No records passed the filter for Infra');
            return [];
        }

        return sanitizeEcosystemProjectsData(filteredData, {
            allowedCategories: INFRA_ALLOWED_CATEGORIES,
        });
    } catch (error) {
        console.error('Error in fetchInfraData:', error);
        return [];
    }
};
