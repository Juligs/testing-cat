import { getDataFromAirtable } from './getDataFromAirtable';
import { ProposalCardFilterTypes, sanitizeProposalsData } from './sanitizeProposalsData';

const PROPOSALS_AIRTABLE_TABLE_NAME = 'RfPRequest';

export const fetchFilteredProposals = async (): Promise<ProposalCardFilterTypes> => {
    try {
        const allRecords = await getDataFromAirtable({
            fields: [
                'slug',
                'RfP Title',
                'Scope of Work',
                'Status',
                'Purpose',
                'Technical Requirements',
                'Non-Technical Requirements',
                'Other Information',
                'Selection Criteria',
                'Relationship Management',
                'Maximum Budget',
                'Deadline?',
                'Deadline Detail',
                'image',
            ],
            filtered: false,
            airtableName: PROPOSALS_AIRTABLE_TABLE_NAME,
        });

        return sanitizeProposalsData(allRecords);
    } catch (error) {
        console.error('Error fetching proposals:', error);
        return {
            proposalCards: [],
            fullData: [],
        };
    }
};
