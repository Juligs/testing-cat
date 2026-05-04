import { isValidUrl } from '@repo/shared/utils';

export interface PastEventsData {
    title: string;
    names: string;
    edition?: string;
    location?: string;
    abstract?: string;
    linkToPaper?: string;
}

export function sanitizePastEventsSheetData(
    rows: (string | undefined)[][],
    sheet: string,
): PastEventsData[] {
    if (!Array.isArray(rows) || rows.length < 2) {
        console.log(`No data found or invalid format in Past Events sheet: ${sheet}`);
        return [];
    }

    return rows.slice(1).reduce<PastEventsData[]>((papers, row) => {
        const [title, names, edition, location, abstract, linkToPaper] = row;

        if (!title || !names) return papers;
        if (linkToPaper && !isValidUrl(linkToPaper)) return papers;

        papers.push({
            title,
            linkToPaper,
            names,
            edition,
            location,
            abstract,
        });

        return papers;
    }, []);
}
