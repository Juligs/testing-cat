import { getDataFromAirtable, sanitizeEcosystemProjectsData, type CardShowcase } from '../../utils';

const PROJECTS_AIRTABLE_BASE_NAME = 'Accounts';
export const PROJECT_VIEWS = {
    DEFAULT: 'iotalabs projects',
    IOTA_PROJECTS: 'IOTA Projects',
    IOTA_INFRA: 'IOTA Infra',
} as const;

const DEFAULT_VIEW = PROJECT_VIEWS.DEFAULT;
export const IOTA_PROJECTS_VIEW = PROJECT_VIEWS.IOTA_PROJECTS;
export const IOTA_INFRA_VIEW = PROJECT_VIEWS.IOTA_INFRA;

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
        console.error(`Error loading view: ${selectedView}`, error);

        if (selectedView !== PROJECT_VIEWS.IOTA_PROJECTS) {
            return fetchProjects({
                view: PROJECT_VIEWS.IOTA_PROJECTS,
                useWebsitePosition,
            });
        }

        return [];
    }
};
