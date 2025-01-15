import { getDataFromAirtable } from '@repo/shared/utils';
import { NextResponse } from 'next/server';
import { sanitizeInfraData, type CardShowcase } from '../../lib/airtable';
import { PROJECTS_ALLOWED_CATEGORIES } from '../../lib/constants';

export const dynamic = 'force-dynamic';

export async function GET() {
    const data = await fetchProjects();
    return NextResponse.json(data);
}
const PROJECTS_AIRTABLE_BASE_NAME = 'Accounts';
const PROJECTS_AIRTABLE_VIEW_NAME = 'iotalabs projects';

const fetchProjects: () => Promise<CardShowcase[]> = async () => {
    try {
        const rawData = await getDataFromAirtable({
            view: PROJECTS_AIRTABLE_VIEW_NAME,
            fields: ['Name', 'Sub-Category', 'Website', 'websiteImage', 'websiteDescription'],
            airtableName: PROJECTS_AIRTABLE_BASE_NAME,
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

        return sanitizeInfraData(filteredData, { allowedCategories: PROJECTS_ALLOWED_CATEGORIES });
    } catch (error) {
        console.error('Error in fetchInfraData:', error);
        return [];
    }
};
