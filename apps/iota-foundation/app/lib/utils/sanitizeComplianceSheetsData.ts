import { isValidUrl } from '@repo/shared/utils';

export interface ComplianceData {
    date?: string;
    title: string;
    subline?: string;
    description?: string;
    cta: string;
    url?: string;
    active?: boolean;
    favourite?: boolean;
}
export function sanitizeComplianceSheetsData(
    rows: (string | undefined)[][],
    sheet: string,
): ComplianceData[] {
    if (!Array.isArray(rows) || rows.length < 2) {
        console.log(`No data found or invalid format in sheet: ${sheet}`);
        return [];
    }

    return rows.slice(1).reduce<ComplianceData[]>((papers, row) => {
        const [date, title, subline, description, cta, url, active, favourite] = row;

        if (!title) return papers;
        if (active !== 'TRUE') return papers;
        if (url && !isValidUrl(url)) return papers;

        papers.push({
            date,
            title,
            subline,
            description,
            cta: cta ?? '',
            url,
            active: true,
            favourite: favourite === 'TRUE',
        });

        return papers;
    }, []);
}
