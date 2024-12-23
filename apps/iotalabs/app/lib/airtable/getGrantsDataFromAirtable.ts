import { AIRTABLE_ENDPOINT_URL } from '../constants/airtable.constants';
import Airtable from 'airtable';

const AIRTABLE_BASE_ID = 'appQqzg74YoTqK3Ht';
const INFRA_AIRTABLE_BASE_NAME = 'Applications';
const INFRA_AIRTABLE_VIEW_NAME = 'iotalabs applications';

interface FetchAirtableDataProps {
    fields: string[];
    filtered?: boolean;
}

export const getGrantsDataFromAirtable = async ({
    fields,
    filtered = true,
}: FetchAirtableDataProps): Promise<Airtable.Record<Airtable.FieldSet>[]> => {
    try {
        Airtable.configure({
            endpointUrl: AIRTABLE_ENDPOINT_URL,
            apiKey: process.env.IOTALABS_AIRTABLE_KEY,
        });

        const airtableBase = Airtable.base(AIRTABLE_BASE_ID);

        const selectParams = {
            fields,
            // for unfiltered data we dont need to provide a view as it will be the default one
            ...(filtered ? { view: INFRA_AIRTABLE_VIEW_NAME } : {}),
        };
        const records = await airtableBase(INFRA_AIRTABLE_BASE_NAME).select(selectParams).all();

        return Array.from(records);
    } catch (error) {
        console.error('Error fetching data from Airtable:', error);
    }
    return [];
};
