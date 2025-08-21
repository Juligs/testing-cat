import { sanitizeSheetData } from './sanitizeSheetsData';

const SPREADSHEET_ID = '1FUwmeJylloLgVzs4fGg6_gbUynKFY3IwdqTzTj6KNas';
const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

async function fetchSheetData(sheet: string, referer: string) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(sheet)}?key=${GOOGLE_SHEETS_API_KEY}`;

    const res = await fetch(url, {
        headers: { referer },
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        const message = error?.error?.message ?? 'Unknown error';
        throw new Error(`Google Sheets API error (${res.status}): ${message}`);
    }

    const { values: rows } = await res.json();
    return sanitizeSheetData(rows, sheet);
}

export async function fetchResearchPapers(referer: string) {
    const [coordicide, preCoordicide] = await Promise.all([
        fetchSheetData('COORDICIDE PAPERS', referer),
        fetchSheetData('PRE-COORDICIDE PAPERS', referer),
    ]);
    return [coordicide, preCoordicide];
}
