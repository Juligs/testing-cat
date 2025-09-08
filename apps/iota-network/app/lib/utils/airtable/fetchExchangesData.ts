import { getDataFromAirtable } from '@repo/shared/utils';
import { sanitizeExchangesData, ExchangesCards } from './sanitizeExchangesData';

const EXCHANGES_AIRTABLE_TABLE_NAME = 'Accounts';

export const fetchExchangesData = async (): Promise<ExchangesCards[]> => {
    try {
        const allRecords = await getDataFromAirtable({
            fields: [
                'Name',
                'Website',
                'websiteImage',
                'L1 Status',
                'Perceived Project Quality',
                'Coingecko Rating',
            ],
            filtered: true,
            view: 'Exchange Integration',
            airtableName: EXCHANGES_AIRTABLE_TABLE_NAME,
        });
        return sanitizeExchangesData(allRecords);
    } catch (error) {
        console.error('Error fetching Exchanges:', error);
        return [];
    }
};
