import { isValidUrl } from '@repo/shared/utils';

export interface NewsPaperData {
    title: string;
    description?: string;
    date?: string;
    link: string;
    active?: string;
}

export function SanitizeNewsSheetData(
    rows: (string | undefined)[][],
    sheet: string,
): NewsPaperData[] {
    if (!Array.isArray(rows) || rows.length < 2) {
        console.log(`No data found or invalid format in news sheet: ${sheet}`);
        return [];
    }

    return rows.slice(1).reduce<NewsPaperData[]>((papers, row) => {
        const [title, description, date, link, active] = row;

        if (!title || !description || !active) return papers;
        if (link && !isValidUrl(link)) return papers;

        papers.push({
            title,
            description,
            date,
            link: link || '',
            active,
        });

        return papers;
    }, []);
}
