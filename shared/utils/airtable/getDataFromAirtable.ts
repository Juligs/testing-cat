import Airtable from 'airtable';
import { AIRTABLE_ENDPOINT_URL } from '../../constants';
const AIRTABLE_BASE_ID = 'appQqzg74YoTqK3Ht';

interface FetchAirtableDataProps {
    fields: string[];
    filtered?: boolean;
    view?: string;
    airtableName: string;
}

export const getDataFromAirtable = async ({
    fields,
    filtered = true,
    view,
    airtableName,
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
            ...(filtered ? { view } : {}),
        };
        const records = await airtableBase(airtableName).select(selectParams).all();

        return Array.from(records);
    } catch (error) {
        console.error('Error fetching data from Airtable:', error);
    }
    return [];
};
