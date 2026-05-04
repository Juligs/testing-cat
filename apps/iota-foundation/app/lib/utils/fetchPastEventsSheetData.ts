import { fetchSheetData } from './fetchSheetData';
import { sanitizePastEventsSheetData } from './sanitizePastEventsSheetData';

const PAST_EVENTS_SPREADSHEET_ID = '1Cke-ceISgw-LtAJ3JYw5MlKajzdcupG3lFLb6nwml14';
const PAST_EVENTS_SHEET = 'Workshops';

export async function fetchPastEventsSheetData() {
    return fetchSheetData(
        PAST_EVENTS_SPREADSHEET_ID,
        PAST_EVENTS_SHEET,
        sanitizePastEventsSheetData,
    );
}
