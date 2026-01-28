import { google } from 'googleapis';
import { sanitizeSheetData } from './sanitizeSheetsData';

const SPREADSHEET_ID = '1FUwmeJylloLgVzs4fGg6_gbUynKFY3IwdqTzTj6KNas';

let sheets: ReturnType<typeof google.sheets> | null = null;

function getSheets() {
    if (!sheets) {
        if (!process.env.GOOGLE_WEBSITES_SERVICE_ACCOUNT_JSON) {
            throw new Error('Missing GOOGLE_WEBSITES_SERVICE_ACCOUNT_JSON');
        }

        const googleServiceCredentials = JSON.parse(
            process.env.GOOGLE_WEBSITES_SERVICE_ACCOUNT_JSON,
        );

        const sheetDataAuth = new google.auth.GoogleAuth({
            credentials: googleServiceCredentials,
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        sheets = google.sheets({ version: 'v4', auth: sheetDataAuth });
    }

    return sheets;
}

async function fetchSheetData(sheet: string) {
    const res = await getSheets().spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: sheet,
    });

    return sanitizeSheetData(res.data.values ?? [], sheet);
}

export async function fetchResearchPapers() {
    return Promise.all([
        fetchSheetData('COORDICIDE PAPERS'),
        fetchSheetData('PRE-COORDICIDE PAPERS'),
    ]);
}
