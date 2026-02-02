import { getDataFromAirtable, sanitizeEcosystemProjectsData, type CardShowcase } from '../../utils';

const PROJECTS_AIRTABLE_BASE_NAME = 'Accounts';
const DEFAULT_VIEW = 'iotalabs projects';
const IOTA_PROJECTS_VIEW = 'IOTA Projects';

export const fetchProjects = async ({
    view,
    useWebsitePosition = false,
}: {
    view?: string;
    useWebsitePosition?: boolean;
}): Promise<CardShowcase[]> => {
    const selectedView = view ?? DEFAULT_VIEW;

    try {
        const rawData = await getDataFromAirtable({
            airtableName: PROJECTS_AIRTABLE_BASE_NAME,
            view: selectedView,
            fields: [
                'Name',
                'Sub-Category',
                'Website',
                'websiteImage',
                'websiteDescription',
                ...(useWebsitePosition ? ['websitePosition'] : []),
            ],
        });

        return sanitizeEcosystemProjectsData(rawData, {
            requireWebsitePosition: useWebsitePosition,
        });
    } catch (error) {
        if (selectedView !== IOTA_PROJECTS_VIEW) {
            return fetchProjects({
                view: IOTA_PROJECTS_VIEW,
                useWebsitePosition,
            });
        }

        console.error('Error in fetchProjects:', error);
        return [];
    }
};
