import { ECOSYSTEM_PROJECTS_ALLOWED_CATEGORIES } from '../../constants';
import { getDataFromAirtable, sanitizeEcosystemProjectsData, type CardShowcase } from '../../utils';

const PROJECTS_AIRTABLE_BASE_NAME = 'Accounts';
const PROJECTS_AIRTABLE_VIEW_NAME = 'iotalabs projects';

export const fetchProjects: (useWebsitePosition?: boolean) => Promise<CardShowcase[]> = async (
    useWebsitePosition = false,
) => {
    try {
        const rawData = await getDataFromAirtable({
            view: PROJECTS_AIRTABLE_VIEW_NAME,
            fields: [
                'Name',
                'Sub-Category',
                'Website',
                'websiteImage',
                'websiteDescription',
                ...(useWebsitePosition ? ['websitePosition'] : []),
            ],
            airtableName: PROJECTS_AIRTABLE_BASE_NAME,
        });
        const filteredData = rawData.filter(
            (record) =>
                record.fields.Name &&
                record.fields.Website &&
                record.fields['Sub-Category'] &&
                Array.isArray(record.fields['Sub-Category']) &&
                record.fields['Sub-Category'].length > 0 &&
                (useWebsitePosition ? record.fields.websitePosition : true),
        );

        if (!filteredData || filteredData.length === 0) {
            console.warn('No records passed the filter for Infra');
            return [];
        }

        return sanitizeEcosystemProjectsData(filteredData, {
            allowedCategories: ECOSYSTEM_PROJECTS_ALLOWED_CATEGORIES,
        });
    } catch (error) {
        console.error('Error in fetchInfraData:', error);
        return [];
    }
};
