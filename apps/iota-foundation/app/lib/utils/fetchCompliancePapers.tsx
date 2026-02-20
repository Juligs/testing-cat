import { fetchSheetData } from './fetchSheetData';
import { sanitizeComplianceSheetsData } from './sanitizeComplianceSheetsData';

const COMPLIANCE_SPREADSHEET_ID = '1zJ_go1U0JIbecL9Z-IJ2IdfwSy2UsRAfE8TwCpi9FWM';

export async function fetchCompliancePapers() {
    return Promise.all([
        fetchSheetData(COMPLIANCE_SPREADSHEET_ID, 'Sheet1', sanitizeComplianceSheetsData),
    ]);
}
