import { fetchSheetData } from './fetchSheetData';
import { SanitizeNewsSheetData } from './SanitizeNewsSheetData';

const NEWS_SPREADSHEET_ID = '1QxaxhU-K1ozd2jRiIDfExwQFCrPO3FvZr55mJmI8Udg';

export async function fetchNewsPapers() {
    return Promise.all([fetchSheetData(NEWS_SPREADSHEET_ID, 'Sheet1', SanitizeNewsSheetData)]);
}
