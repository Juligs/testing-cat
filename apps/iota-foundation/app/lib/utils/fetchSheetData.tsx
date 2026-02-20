import { google } from 'googleapis';

let sheets: ReturnType<typeof google.sheets> | null = null;
export type SanitizeFunction<T> = (rows: (string | undefined)[][], sheet: string) => T[];

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

export async function fetchSheetData<T>(
    spreadsheetId: string,
    sheet: string,
    sanitizeFn: SanitizeFunction<T>,
): Promise<T[]> {
    const res = await getSheets().spreadsheets.values.get({
        spreadsheetId,
        range: sheet,
    });

    const rows = res.data.values ?? [];
    return sanitizeFn(rows, sheet);
}
