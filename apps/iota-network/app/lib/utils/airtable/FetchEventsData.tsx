import { getDataFromAirtable } from '@repo/shared/utils';
import { sanitizeEventsData, EventsCards } from './SanitizeEventsData';

const EVENTS_AIRTABLE_TABLE_NAME = 'websiteEvents';

export const fetchEventsData = async (): Promise<EventsCards[]> => {
    try {
        const allRecords = await getDataFromAirtable({
            fields: [
                'websiteShown',
                'Event Title',
                'Description',
                'Start Date',
                'End Date',
                'Location',
                'Image',
                'Categories',
                'URL',
                'Is External?',
            ],
            filtered: false,
            airtableName: EVENTS_AIRTABLE_TABLE_NAME,
        });
        return sanitizeEventsData(allRecords);
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
};
