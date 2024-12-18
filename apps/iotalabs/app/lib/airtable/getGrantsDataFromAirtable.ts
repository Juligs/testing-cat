import { AIRTABLE_ENDPOINT_URL } from '../constants/airtable.constants';
import Airtable from 'airtable';

const AIRTABLE_BASE_ID = 'appQqzg74YoTqK3Ht';
const INFRA_AIRTABLE_BASE_NAME = 'Applications';
const INFRA_AIRTABLE_VIEW_NAME = 'iotalabs applications';

interface FetchAirtableDataProps {
    fields: string[];
}

export const getGrantsDataFromAirtable = async ({
    fields,
}: FetchAirtableDataProps): Promise<Airtable.Record<Airtable.FieldSet>[]> => {
    try {
        Airtable.configure({
            endpointUrl: AIRTABLE_ENDPOINT_URL,
            apiKey: process.env.IOTALABS_AIRTABLE_KEY,
        });

        const airtableBase = Airtable.base(AIRTABLE_BASE_ID);

        const records = await airtableBase(INFRA_AIRTABLE_BASE_NAME)
            .select({
                view: INFRA_AIRTABLE_VIEW_NAME,
                fields,
            })
            .all();

        return Array.from(records);
    } catch (error) {
        console.error('Error fetching data from Airtable:', error);
    }
    return [];
};
