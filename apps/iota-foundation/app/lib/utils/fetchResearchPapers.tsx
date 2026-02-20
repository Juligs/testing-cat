import { fetchSheetData } from './fetchSheetData';
import { sanitizeResearchSheetsData } from './sanitizeResearchSheetsData';

const RESEARCH_SPREADSHEET_ID = '1FUwmeJylloLgVzs4fGg6_gbUynKFY3IwdqTzTj6KNas';

export async function fetchResearchPapers() {
    return Promise.all([
        fetchSheetData(RESEARCH_SPREADSHEET_ID, 'COORDICIDE PAPERS', sanitizeResearchSheetsData),
        fetchSheetData(
            RESEARCH_SPREADSHEET_ID,
            'PRE-COORDICIDE PAPERS',
            sanitizeResearchSheetsData,
        ),
    ]);
}
